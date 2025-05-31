# Horse Racing Game 🐎
![Visitor Badge](https://visitor-badge.laobi.icu/badge?page_id=hawanbeats.horse-racing-game)
![GitHub top language](https://img.shields.io/github/languages/top/hawanbeats/horse-racing-game)
![GitHub last commit](https://img.shields.io/github/last-commit/hawanbeats/horse-racing-game)
![GitHub Repo stars](https://img.shields.io/github/stars/hawanbeats/horse-racing-game?style=social)

## 🔧 Kullanılan Teknolojiler
- Vue.js
- JavaScript
- CSS3
- Pinia (State Management)
- Component Tabanlı Mimari

## 🎮 Oyun Özellikleri
- **20 farklı at** rastgele oluşturulur (isim + kondisyon).
- **6 round** (1200m–2200m) yarış programı oluşturulur.
- Her roundda **10 at yarışır** ve kazananlar belirlenir.
- **Simülasyon** her atı kendi renginde ve ismiyle birlikte gösterir.
- Kullanıcı aşağıdaki butonlarla oyunu kontrol eder:
  - `Generate` → At listesi ve yarış programı oluşturur.
  - `Start` / `Pause` / `Resume` → Simülasyonu başlatır, durdurur, devam ettirir.
  - `Stop` → Oyunu sıfırlar.
  - `Normal Speed / 2x Speed` → Hız kontrolü sağlar.
  - `Skip to Results` → Anlık yarış sonuçlarını gösterir.

## 📁 Klasör Yapısı
- `src/components` → Arayüz bileşenleri
- `src/stores` → Pinia store tanımı
- `App.vue` → Ana uygulama bileşeni
- `main.js` → Vue app giriş noktası

## ▶️ Başlatma
```bash
npm install
npm run serve
```

## ✅ Geliştirilebilecek Özellikler
- Yarış geçmişi istatistikleri
- Kullanıcı at seçimi ve skor takibi
- Mobil uyumluluk ve responsivity iyileştirmeleri
