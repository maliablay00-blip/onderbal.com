# Önder Bal — Tek Sayfa Web Sitesi

Bu klasör, `önderbal.com` için tek sayfalık statik site dosyalarını içerir.

## Dosya Yapısı
- `index.html` — Ana sayfa
- `style.css` — Tema stilleri (renkleri logonuza göre `:root` değişkenlerinden güncelleyebilirsiniz)
- `script.js` — Küçük etkileşimler (menü, yukarı dön)
- `images/` — Görseller (logo koymak için `logo.png` ekleyin)
- `videos/` — Tanıtım videonuzu `tanitim.mp4` adıyla buraya atın

## Logo Renklerine Uydurma
`style.css` içindeki `--primary` ve `--primary-ink` değişkenlerini logonuzun ana ve koyu tonuna göre ayarlayın.

## Açma (Bilgisayarda)
1. Klasörü indirip çıkarın.
2. `index.html` dosyasını çift tıklayın (tarayıcıda açılır).

## Yayınlama (Hosting)
Statik dosyaları bir hosting'e veya modern barındırma (Vercel, Netlify vb.) servisine yükleyin. Domain yönlendirmesini `önderbal.com` için DNS üzerinden yapabilirsiniz.

---
## Hızlı Sorun Giderme (Troubleshooting)

1. Dosya yapısını kontrol edin:
   - `index.html`, `style.css`, `script.js` aynı klasörde olmalı.
   - Görseller `images/` içinde: `petek-bali.jpg`, `doga-yayla.jpg` (ve varsa `logo.png`).
   - Video varsa `videos/tanitim.mp4` adıyla `videos/` klasörüne koyun.

2. Tarayıcıda açarken sorun yaşıyorsanız:
   - Önerilen: klasörde terminal açıp `python -m http.server 8000` çalıştırın, sonra tarayıcıda `http://localhost:8000` adresini açın.
   - Alternatif: VS Code'ta "Live Server" eklentisi ile açın.

3. Görseller veya videolar görüntülenmiyorsa:
   - Tarayıcı konsolunu açın (F12) ve `Console` ile `Network` sekmelerinde hata veya 404 olup olmadığına bakın.
   - Eğer `404` hatası varsa, dosya yollarını ve isimlerinin doğru olduğundan emin olun.

4. Video oynatma problemi:
   - MP4 (H.264 / AAC) formatı en uyumlu olanıdır. Eğer farklı bir format varsa MP4'e dönüştürün veya YouTube'a yükleyip embed kullanın.

5. Hala çalışmıyorsa bana tarayıcı konsolunda görünen hata mesajının ekran görüntüsünü gönderin veya size çıkan davranışı (örn. "resimler görünmüyor", "menü açılmıyor", "video siyah") kısaca yazın — hemen düzelteyim.
