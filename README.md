# Horse Racing Game 🐎

## 🔧 Kullanılan Teknolojiler
- Vue.js (3.x)
- JavaScript (ES6+)
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
- `src/store` → Pinia store tanımı
- `App.vue` → Ana uygulama bileşeni
- `main.js` → Vue app giriş noktası

## ▶️ Başlatma
```bash
npm install
npm run serve
