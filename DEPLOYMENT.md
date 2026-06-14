# Deployment to cPanel (GitHub Actions auto-deploy)

Bu loyiha **Nuxt 4** static SPA (`ssr: false`, `nitro.preset = 'static'`).
`main` branchga push qilinganda **GitHub Actions** avtomatik build qilib,
SSH/rsync orqali cPanel'ga deploy qiladi.

## Rasmlar qanday ishlaydi (MUHIM)

Rasmlar **git'ga push qilinmaydi** (juda katta, ~290MB). Kod ularni build
paytida `import` qilmaydi — runtime'da `${siteUrl}/images/...` dan yuklaydi
(`img()` helper, [app/composables/helpers.js](app/composables/helpers.js)).

Demak:
- **Kod** → git → GitHub Actions → cPanel (avtomatik, har push'da)
- **Rasmlar** → cPanel'ga **bir marta qo'lda** yuklanadi, `/images/` papkaga.
  rsync `--exclude '/images/'` qilgani uchun har deploy'da saqlanib qoladi.

---

## 1. Bir martalik sozlash

### 1a. Rasmlarni cPanel'ga yuklash (faqat birinchi marta)

Lokalda birlashtirilgan `deploy-images/` papka yasaladi (app/assets/images +
public/images birlashgan). Uni yangilash kerak bo'lsa:

```bash
rm -rf deploy-images && mkdir -p deploy-images
cp -R public/images/. deploy-images/
rsync -a --exclude '.DS_Store' app/assets/images/ deploy-images/
find deploy-images -name '.DS_Store' -delete
```

So'ng `deploy-images/` **ichidagi** hamma narsani cPanel'da
`public_html/fics.uz/images/` papkaga yuklang (ZIP qilib → Extract eng tez).
Natijada cPanel'da `/images/leaders/`, `/images/brands/`, `/images/users/`,
`/images/management/` va h.k. struktura paydo bo'ladi.

> `public/documents/` (PDF'lar) ham xuddi shunday `public_html/fics.uz/documents/`
> ga qo'lda yuklanadi.

### 1b. GitHub Secret (faqat BITTA)

Maxfiy bo'lmagan sozlamalar (host, user, port, target dir, URL'lar)
to'g'ridan-to'g'ri [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
ichidagi `env:` blokda turadi. O'zgartirish kerak bo'lsa o'sha faylni tahrirlang.

Yagona secret (Settings → Secrets and variables → Actions → New repository secret):

| Secret | Qiymat |
|--------|--------|
| `CPANEL_SSH_KEY` | Private SSH key (to'liq matn, `-----BEGIN ... END-----` bilan) |

> **SSH key:** cPanel → SSH Access → Manage SSH Keys → Generate yoki Import.
> Public key **Authorized** bo'lishi kerak. Private key'ni `CPANEL_SSH_KEY`
> secret'iga to'liq joylang.

---

## 2. Deploy qilish (har safar)

Shunchaki `main` ga push qiling:

```bash
git add -A
git commit -m "..."
git push origin main
```

GitHub → **Actions** tab'da deploy jarayonini kuzating.
Qo'lda ishga tushirish: Actions → "Deploy to cPanel" → **Run workflow**.

---

## 3. Tekshirish (deploydan keyin)

- [ ] `https://fics.uz/` ochiladi
- [ ] **Rasmlar ko'rinadi** (ular `https://fics.uz/images/...` dan keladi)
- [ ] Ichki sahifani **refresh** qiling (`/ru/maininfo`) — 404 bermasligi kerak
      (`.htaccess` SPA fallback)
- [ ] Til almashtirish `/ru` `/uz` `/en` ishlaydi
- [ ] Hujjat yuklash (`tgbot/`) — PHP cPanel'da yoqilgan bo'lishi kerak

---

## Eslatmalar

- **Yangi rasm qo'shsangiz:** kodda `img('subpath')` deb chaqiring va shu
  rasmni cPanel `/images/subpath` ga qo'lda yuklang. Git/deploy talab etilmaydi
  (lekin lokal dev uchun `app/assets/images` yoki `public/images` ga ham qo'ying).
- **Domen o'zgarsa:** faqat `NUXT_PUBLIC_SITE_URL` secret'ini o'zgartiring —
  `img()` avtomatik yangi domendan rasm oladi.
- **Subfolderga** deploy qilsangiz, [public/.htaccess](public/.htaccess) dagi
  `RewriteBase /` ni moslang.
- `.htaccess` va `tgbot/*.php` build paytida avtomatik `.output/public/` ga
  ko'chiriladi (`copy:extras` skripti).
