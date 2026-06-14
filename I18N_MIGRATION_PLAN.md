# i18n Migration Plan — World-Standard Localization Architecture

## Problem (current state)
- Translation **keys are full Russian sentences**: `t("Инвестиции в Узбекистан")`, `t("рост ВВП (МВФ, 2025)")`.
- Hardcoded RU text lives in component `data` arrays (`label:`, `text:`, `title:`, `points:[]`, `year:`).
- Even units/numbers are translation keys: `t(" млрд")`, `t("2017.")`.
- `fallbackLocale: 'ru'` masks missing keys — a missing translation silently shows the raw RU key.
- 3 monolithic files: `en.json` (175KB), `ru.json` (219KB), `uz.json` (181KB), 897 flat keys each.

## Target architecture (best practice)
- **Semantic, English, namespaced keys**: `t("investments.hero.title")`, `t("investments.stats.gdpGrowth")`.
- **Per-page namespace** following `page.section.key` (nested JSON).
- The same key set in all 3 languages → no more RU-as-fallback leakage.
- Component `data` arrays keep **stable English keys**, not display text; the template calls `t(key)`.

## Pilot scope (this step)
**Only `app/pages/investmen/index.vue`** (1048 lines, 37 `t()` calls + data arrays).
Used as the reference pattern. After your approval of the result, the same recipe is applied page-by-page.

## Key namespace for the pilot (`investments.*`)
```
investments:
  meta: { titleSuffix: "FIC" }          # for useHead title
  hero: { title }
  intro: { eyebrow, heading, p1, p2 }
  units: { bln, percent }               # " bn" / "%" suffixes (lang-specific)
  indicators: { eyebrow, title, subtitle }
  stats:
    gdpTarget, gdpGrowth, fdiInflow, rating, reserves,
    inflation, exportGrowth, totalInvestment, unemployment   # label only
  guarantees:
    eyebrow, title, subtitle
    items: { legal:{term,text}, tax:{...}, dialogue:{...}, disputes:{...}, perks:{...} }
  sectors:
    eyebrow, title, subtitle
    items:
      greenEnergy:{ title, points:[p1,p2,p3] }
      digital:{...}, infra:{...}, finance:{...}, manufacturing:{...}, minerals:{...}
  timeline:
    eyebrow, title, subtitle
    items: { y2017:{year,text}, y2019:{...}, y2024:{...}, y2025:{...}, y2026:{...} }
```

## Implementation steps (pilot)
1. **Add `investments` namespace** to all 3 locale files (`en.json`, `ru.json`, `uz.json`) with full nested objects.
   - Values come from the existing translations already in the JSON files (en/ru/uz) — no re-translation, just remapped under the new keys. The few RU-only strings already have en/uz equivalents in the current files; where a value is genuinely missing it is filled from the corresponding language data already present.
2. **Rewrite `app/pages/investmen/index.vue`**:
   - `data` arrays store **English semantic keys** (e.g. `label: "investments.stats.gdpGrowth"`, `points: ["investments.sectors.greenEnergy.points.0", ...]`).
   - Template `t(...)` calls use the new keys.
   - `useHead` → `` `${t("investments.hero.title")} | ${t("investments.meta.titleSuffix")}` ``.
   - Units: `t(stat.suffix)` → `t("investments.units.bln")` / `t("investments.units.percent")` (keeps the existing per-locale " bn"/" млрд"/" mlrd" behavior).
   - Year tags: store plain `"2017"` strings in data (numbers aren't translatable content) — drop the `t(item.year).replace(...)` hack; bind directly.
   - **No CSS / no markup / no animation logic changes** — only the text-source layer.
3. **Verify**: JSON valid, dev server renders the page identically in en/ru/uz with correct capitalization, no raw-key leakage.

## What does NOT change in the pilot
- `PageHero.vue` (already does `t(title)` — we just pass it a key). No other page that uses PageHero is touched.
- Old RU-sentence keys stay in the JSON for now (other pages still use them). Cleanup of dead keys happens only after all pages migrate.
- No config change yet. (Optional later: flip `fallbackLocale` to `'en'` once all pages migrated, to surface gaps loudly.)

## After pilot (later steps, on approval)
- Apply the same `page.section.key` recipe to each page/namespace (home components, foreigninvestors, becomemember, management, admin, …).
- Migrate shared data (`data/leaderList.ts`, `app/constants/*`) to keyed entries.
- Final pass: remove obsolete RU-sentence keys, optionally switch `fallbackLocale` to `en`, enable `strictMessage`.

## Risk & rollback
- Pilot touches **4 files** (3 JSON + 1 page). Old keys remain, so nothing else breaks.
- Git: each page migration = one focused commit, easy to revert.
