# Deployment to cPanel

Bu loyiha **Nuxt 4** static SPA (`ssr: false`, `nitro.preset = 'static'`).
Build natijasi oddiy HTML/CSS/JS fayllardan iborat — cPanel-ga shunchaki
ko'chirib tashlash kifoya. Node.js server **kerak emas**.

---

## 1. Lokal mashinada build qilish

```bash
# 1) dependencylarni o'rnatish (faqat birinchi marta yoki o'zgarganda)
npm install

# 2) .env faylni tayyorlash (namuna: .env.example)
cp .env.example .env
#   -> ichidagi URL larni production qiymatlariga moslang

# 3) static build
npm run deploy:build
```

Natija: **`.output/public/`** papkasi. Deploy qilinadigan narsa shu papka ichidagi
hamma narsa (ichidagi fayllar, jumladan `.htaccess` va `tgbot/`).

> `deploy:build` ishga tushgach `.htaccess` va `tgbot/*.php` fayllar
> avtomatik `.output/public/` ichiga ko'chiriladi (`copy:extras` skripti).

---

## 2. cPanel-ga yuklash

### Variant A — ZIP orqali (tavsiya etiladi)

1. `.output/public/` **ichidagi** hamma narsani ZIP qiling
   (papkaning o'zini emas — ichidagi fayllarni; ya'ni `index.html` ZIP ildizida bo'lsin).
   ```bash
   cd .output/public && zip -r ../site.zip . && cd ../..
   ```
   ZIP fayl `.output/site.zip` da paydo bo'ladi.
2. cPanel → **File Manager** → `public_html/` ga kiring.
3. Eski fayllarni tozalang (kerak bo'lsa zaxira oling).
4. `site.zip` ni `public_html/` ga yuklang → **Extract**.
5. ZIP faylni o'chiring.

### Variant B — Fayl menejeri orqali qo'lda

`.output/public/` ichidagi barcha fayl va papkalarni `public_html/` ichiga
ko'chiring. **`.htaccess` yashirin fayl** — File Manager-da
*Settings → Show Hidden Files (dotfiles)* yoqilganligiga ishonch hosil qiling.

---

## 3. Tekshirish (deploydan keyin)

- [ ] Bosh sahifa ochiladi: `https://SIZNING-DOMEN/`
- [ ] Ichki sahifani **refresh** qilib ko'ring (masalan `/ru/maininfo`) —
      404 bermasligi kerak (bu `.htaccess` SPA fallback ishlayotganini bildiradi).
- [ ] Til almashtirish (`/ru`, `/uz`, `/en`) ishlaydi.
- [ ] API chaqiruvlar ishlaydi (backend URL `.env` da to'g'ri bo'lsa, build ichida bog'lanadi).
- [ ] `tgbot/` (hujjat yuklash) ishlaydi — PHP cPanel-da yoqilgan bo'lishi kerak.

---

## Eslatmalar

- **Subdomenga deploy** qilsangiz (masalan `app.domen.uz`), o'sha subdomen
  papkasiga yuklang. Subfolderga joylasangiz (`domen.uz/app`), `.htaccess`
  ichidagi `RewriteBase /` ni `RewriteBase /app/` ga o'zgartiring.
- **HTTPS majburlash**: SSL o'rnatilgach `.htaccess` ichidagi "Force HTTPS"
  blokini izohdan chiqaring (uncomment).
- API URL build paytida (`.env`) ichiga bog'lanadi — URL o'zgarsa
  **qayta build qilish** kerak.
- `.htaccess` `mod_rewrite`, `mod_deflate`, `mod_expires`, `mod_headers`
  modullariga tayanadi — cPanel/Apache-da odatda yoqilgan.
