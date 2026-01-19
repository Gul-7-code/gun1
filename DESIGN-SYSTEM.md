# Ben Dilek - Premium Tur Rehberi
## WordPress + Elementor Tasarim Sistemi

---

## 1. TASARIM FELSEFESI

### Ilham Kaynaklari
- **Apple**: Minimalizm, beyaz alan kullanimi, tipografi odakli
- **Stripe**: Temiz grid, subtle gradientler, profesyonel his
- **Notion**: Sadelik, okunabilirlik, fonksiyonel estetik
- **Webflow**: Dinamik animasyonlar, modern layoutlar

### Temel Prensipler
1. **Less is More** - Gereksiz element yok
2. **Whitespace is King** - Bol beyaz alan
3. **Typography First** - Yazi tipi hiyerarsisi guclu
4. **Subtle Animations** - Dikkat dagitmayan animasyonlar
5. **Mobile First** - Oncelik mobil tasarim

---

## 2. RENK PALETI (Modern Toprak Tonlari)

### Ana Renkler
```
Primary (Kahve)     : #6B4423    - Ana aksiyon rengi
Primary Dark        : #4A2F18    - Hover durumlari
Primary Light       : #8B6B4D    - Soft varyant
```

### Notr Renkler
```
Dark (Metin)        : #1A1A1A    - Ana metin
Dark Secondary      : #4A4A4A    - Ikincil metin
Gray                : #6B6B6B    - Aciklama metinleri
Gray Light          : #9B9B9B    - Placeholder
Border              : #E5E5E5    - Cizgiler
Background Light    : #FAFAFA    - Acik arka plan
Background          : #FFFFFF    - Beyaz arka plan
```

### Aksan Renkler
```
Accent Warm         : #C4956A    - Altin/bronz aksan
Accent Success      : #4A7C59    - Basari/dogal
Accent Cream        : #F5F0E8    - Soft arka plan
```

### Gradient
```
Hero Gradient       : linear-gradient(135deg, #FAFAFA 0%, #F5F0E8 100%)
Card Hover          : linear-gradient(180deg, transparent 0%, rgba(107,68,35,0.02) 100%)
```

---

## 3. TIPOGRAFI

### Font Ailesi
```css
/* Basliklar - Modern Sans */
--font-display: 'Inter', 'SF Pro Display', -apple-system, sans-serif;

/* Govde Metni */
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Font Olcekleri (Desktop)
```
Hero Title      : 72px / 80px line-height / -0.02em letter-spacing / 600 weight
H1              : 56px / 64px / -0.02em / 600
H2              : 44px / 52px / -0.01em / 600
H3              : 32px / 40px / -0.01em / 600
H4              : 24px / 32px / 0 / 600
H5              : 20px / 28px / 0 / 600
Body Large      : 20px / 32px / 0 / 400
Body            : 17px / 28px / 0 / 400
Body Small      : 15px / 24px / 0 / 400
Caption         : 13px / 20px / 0.02em / 500
Overline        : 12px / 16px / 0.1em / 600 / UPPERCASE
```

### Font Olcekleri (Mobile)
```
Hero Title      : 40px / 48px
H1              : 36px / 44px
H2              : 28px / 36px
H3              : 24px / 32px
H4              : 20px / 28px
Body Large      : 18px / 28px
Body            : 16px / 26px
```

---

## 4. SPACING SISTEMI (8px Grid)

### Base Unit: 8px
```
--space-1   : 4px      (0.5x)
--space-2   : 8px      (1x)
--space-3   : 12px     (1.5x)
--space-4   : 16px     (2x)
--space-5   : 24px     (3x)
--space-6   : 32px     (4x)
--space-7   : 48px     (6x)
--space-8   : 64px     (8x)
--space-9   : 96px     (12x)
--space-10  : 128px    (16x)
--space-11  : 192px    (24x)
```

### Section Padding
```
Desktop         : 120px (top/bottom)
Tablet          : 80px
Mobile          : 64px
```

### Container Widths
```
Max Width       : 1200px
Content Width   : 800px (blog/metin)
Narrow Width    : 640px (formlar)
Wide Width      : 1400px (galeri)
```

---

## 5. BILESENLERI (Components)

### Butonlar

#### Primary Button
```
Padding         : 16px 32px
Border Radius   : 8px
Font            : 15px / 600 weight
Background      : #6B4423
Color           : #FFFFFF
Transition      : all 0.2s ease

Hover:
Background      : #4A2F18
Transform       : translateY(-2px)
Box Shadow      : 0 4px 12px rgba(107,68,35,0.2)
```

#### Secondary Button
```
Padding         : 16px 32px
Border Radius   : 8px
Border          : 1.5px solid #6B4423
Background      : transparent
Color           : #6B4423

Hover:
Background      : #6B4423
Color           : #FFFFFF
```

#### Ghost Button
```
Padding         : 16px 24px
Background      : transparent
Color           : #6B4423
Border          : none

Hover:
Background      : rgba(107,68,35,0.05)
```

### Kartlar

#### Service Card
```
Padding         : 40px
Background      : #FFFFFF
Border          : 1px solid #E5E5E5
Border Radius   : 16px
Transition      : all 0.3s ease

Hover:
Border Color    : #C4956A
Box Shadow      : 0 20px 40px rgba(0,0,0,0.06)
Transform       : translateY(-4px)
```

#### Tour Card
```
Border Radius   : 16px
Overflow        : hidden
Background      : #FFFFFF
Box Shadow      : 0 2px 8px rgba(0,0,0,0.04)

Image Height    : 240px (desktop) / 200px (mobile)
Content Padding : 32px
```

### Form Elemanlari

#### Input Field
```
Padding         : 16px 20px
Border          : 1.5px solid #E5E5E5
Border Radius   : 8px
Font Size       : 16px
Background      : #FFFFFF

Focus:
Border Color    : #6B4423
Box Shadow      : 0 0 0 3px rgba(107,68,35,0.08)
Outline         : none
```

---

## 6. SAYFA YAPISI

### Header/Navigation
```
Height          : 80px (desktop) / 64px (mobile)
Position        : Fixed, transparent -> solid on scroll
Background      : rgba(255,255,255,0.9)
Backdrop Filter : blur(20px)
Border Bottom   : 1px solid rgba(0,0,0,0.05)
```

### Hero Section (Apple Style)
```
Height          : 100vh (veya min-height: 90vh)
Layout          : Centered text
Alignment       : Center
Max Width       : 900px

Elementler:
- Overline tag (opsiyonel)
- Main headline (H1)
- Subheadline (Body Large)
- CTA Buttons
- Scroll indicator (opsiyonel)
```

### Icerigi Layout Secenekleri

#### 1. Centered Content
- Metin ortalanmis
- Max-width ile sinirli
- Apple tarzinda temiz

#### 2. Split Layout (50/50)
- Sol: Metin
- Sag: Gorsel/Animasyon
- Stripe tarzinda

#### 3. Asymmetric Grid
- 60/40 veya 40/60 oran
- Dinamik his

#### 4. Bento Grid
- Farkli boyutlarda kartlar
- Notion/Apple tarzinda

---

## 7. ANIMASYONLAR

### Scroll Reveal
```css
/* Elementor: Fade In Up */
Initial State:
  opacity: 0
  transform: translateY(30px)

Final State:
  opacity: 1
  transform: translateY(0)

Duration: 0.6s
Easing: cubic-bezier(0.16, 1, 0.3, 1)
Stagger: 0.1s (sirali elementler icin)
```

### Hover Transitions
```css
/* Tum hover efektleri */
transition: all 0.2s ease;

/* Butonlar icin */
transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
```

### Mikro Animasyonlar
- Button hover: scale(1.02) + shadow
- Card hover: translateY(-4px) + shadow
- Link hover: color change + underline
- Image hover: scale(1.05) icinde

---

## 8. ELEMENTOR AYARLARI

### Global Settings
```
Content Width       : 1200px
Container Padding   : 0 (custom ile)
Default Font        : Inter
Stretch Section     : Hayir (container kullan)
```

### Responsive Breakpoints
```
Desktop             : 1025px+
Tablet              : 768px - 1024px
Mobile              : 0 - 767px
```

### Onerilen Elementor Widgetlar
1. **Container** (Flexbox) - Section yerine
2. **Heading** - Tipografi kontrolu
3. **Text Editor** - Govde metinleri
4. **Button** - Custom styling
5. **Image** - Lazy load aktif
6. **Spacer** - Tutarli bosluk
7. **Icon Box** - Hizmet kartlari
8. **Testimonial** - Yorumlar
9. **Form** - Iletisim

### Performans Ayarlari
```
- Improved Asset Loading: ON
- CSS Print Method: External File
- Google Fonts Load: Swap
- Lazy Load: ON
- Disable Default Colors/Fonts: ON
```

---

## 9. SEO & HIZ OPTIMIZASYONU

### Core Web Vitals Hedefleri
```
LCP (Largest Contentful Paint)  : < 2.5s
FID (First Input Delay)         : < 100ms
CLS (Cumulative Layout Shift)   : < 0.1
```

### Performans Oneriler
1. **Gorseller**
   - WebP format kullan
   - Lazy loading aktif
   - Boyutlari optimize et (max 200KB)
   - srcset ile responsive images

2. **Fontlar**
   - Sadece Inter (400, 500, 600)
   - font-display: swap
   - Preload critical fonts

3. **CSS/JS**
   - Kullanilmayan CSS kaldir
   - Critical CSS inline
   - JS defer/async

4. **Hosting**
   - CDN kullan
   - GZIP/Brotli compression
   - HTTP/2 veya HTTP/3

### SEO Checklist
- [ ] Meta title ve description
- [ ] Open Graph tags
- [ ] Schema markup (LocalBusiness)
- [ ] XML sitemap
- [ ] robots.txt
- [ ] Canonical URLs
- [ ] Alt text for images
- [ ] H1-H6 hierarchy
- [ ] Internal linking

---

## 10. SAYFA WIREFRAMES

### Ana Sayfa Yapisi
```
┌─────────────────────────────────────────────────────┐
│  HEADER (Transparent -> Solid on scroll)            │
│  Logo          Nav Links              CTA Button    │
├─────────────────────────────────────────────────────┤
│                                                     │
│                    HERO SECTION                     │
│                  (Full viewport)                    │
│                                                     │
│              [Overline: TUR REHBERI]                │
│                                                     │
│            Tarihin Izinde                           │
│            Unutulmaz Yolculuklar                    │
│                                                     │
│      18 yillik deneyimle Ege'nin gizemli            │
│      topraklarinda sizlere rehberlik ediyorum       │
│                                                     │
│         [Turlari Kesfedin]  [Iletisim]              │
│                                                     │
│                    ↓ (scroll)                       │
├─────────────────────────────────────────────────────┤
│                                                     │
│                 GUVEN GOSTERGELERI                  │
│     (Subtle, minimal - logolar veya rakamlar)       │
│                                                     │
│   18+ Yil    │   5000+ Misafir   │   5★ Puan       │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│                  HAKKIMDA SECTION                   │
│              (Split layout: 50/50)                  │
│                                                     │
│   ┌─────────────┐    Profesyonel Tur Rehberi        │
│   │             │                                   │
│   │   FOTOGRAF  │    Antik Efes'in kapisinda        │
│   │             │    dogdum, tarihi sizinle         │
│   │             │    paylasmak icin buradayim.      │
│   └─────────────┘                                   │
│                      ✓ Lisansli Rehber              │
│                      ✓ Tum Turkiye Yetkili          │
│                      ✓ Coklu Dil Destegi            │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│                  HIZMETLER SECTION                  │
│                                                     │
│   [Overline: HIZMETLER]                             │
│   Sundugun Tur Deneyimleri                          │
│                                                     │
│   ┌─────────────┐  ┌─────────────┐                  │
│   │ Antik Kent  │  │   Sehir     │                  │
│   │   Turlari   │  │  Turlari    │                  │
│   └─────────────┘  └─────────────┘                  │
│   ┌─────────────┐  ┌─────────────┐                  │
│   │ Gastronomi  │  │    VIP      │                  │
│   │   Turlari   │  │   Turlar    │                  │
│   └─────────────┘  └─────────────┘                  │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│                 POPULER TURLAR                      │
│            (Horizontal scroll veya grid)            │
│                                                     │
│   ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │
│   │  Efes  │ │Sirince │ │Pamukkale│ │Bergama│       │
│   └────────┘ └────────┘ └────────┘ └────────┘       │
│                                                     │
│              [Tum Turlari Goruntule →]              │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│                    TESTIMONIAL                      │
│               (Tek buyuk yorum)                     │
│                                                     │
│         "Ben Bey ile yaptibimiz Efes turu           │
│          hayatimizin en guzel deneyimiydi.          │
│          Bilgisi ve samimiyeti muhtesemdi."         │
│                                                     │
│                  - Sarah J., ABD                    │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│                  CTA SECTION                        │
│             (Full width, accent bg)                 │
│                                                     │
│         Hayalinizdeki Turu Planlayalim              │
│                                                     │
│              [Iletisime Gecin]                      │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│                 ILETISIM SECTION                    │
│              (Split: Info + Form)                   │
│                                                     │
│   Iletisim Bilgileri    │    Form                   │
│   📧 Email              │    [Ad Soyad]             │
│   📱 Telefon            │    [Email]                │
│   💬 WhatsApp           │    [Tur Secimi]           │
│                         │    [Mesaj]                │
│   Sosyal Medya          │    [Gonder]               │
│   IG  FB  YT            │                           │
│                                                     │
├─────────────────────────────────────────────────────┤
│                      FOOTER                         │
│                                                     │
│   Logo     Hakkimda | Hizmetler | Turlar | Iletisim │
│                                                     │
│              © 2026 Ben Dilek                       │
│            orubestravelclub.com                     │
└─────────────────────────────────────────────────────┘
```

---

## 11. ELEMENTOR UYGULAMA REHBERI

### Adim 1: Tema Secimi
- **Oneri**: Hello Elementor (en hafif)
- Alternatif: Astra, GeneratePress

### Adim 2: Global Ayarlar
1. Site Settings > Global Colors ekle
2. Site Settings > Global Fonts ekle
3. Theme Style > Typography ayarla
4. Theme Style > Buttons ayarla

### Adim 3: Header Olustur
1. Theme Builder > Header
2. Container kullan (flexbox)
3. Sticky + Transparent ayarla
4. Scroll'da background degisimi (CSS ile)

### Adim 4: Sayfalari Olustur
1. Her section icin ayri Container
2. Inner Container ile max-width
3. Responsive padding ayarla
4. Entrance animations ekle

### Adim 5: Mobile Optimizasyon
1. Her element icin mobile ayarlarini kontrol et
2. Font boyutlarini responsive yap
3. Padding/margin'leri ayarla
4. Gereksiz elementleri gizle

---

## 12. CUSTOM CSS SNIPPETS

### Elementor'a Eklenecek CSS
```css
/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}

/* Better Font Rendering */
body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Container Transition */
.elementor-element {
    transition: all 0.3s ease;
}

/* Custom Selection Color */
::selection {
    background: rgba(107, 68, 35, 0.2);
    color: #1A1A1A;
}

/* Scroll-triggered Header */
.header-scrolled {
    background: rgba(255, 255, 255, 0.95) !important;
    backdrop-filter: blur(20px);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
}
```

---

Bu tasarim sistemi, premium ve modern bir WordPress sitesi icin temel olusturuyor.
Elementor ile uyguladiginda Apple, Stripe ve Notion tarzinda bir sonuc elde edeceksiniz.
