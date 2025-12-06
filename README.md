# Mayie Giveaway Landing Page - Decembrie 2025

Modern, responsive landing page pentru campania de giveaway Supreme Anti-Aging Routine.

## 🚀 Features

- ✅ Design modern, clean și minimalist
- ✅ Responsive (mobil, tabletă, desktop)
- ✅ Formular de înscriere cu validare
- ✅ Integrare pregătită pentru theMarketer newsletter
- ✅ SEO optimized
- ✅ Animații subtile la scroll
- ✅ Cod curat și ușor de modificat

## 📁 Structura Proiectului

```
├── index.html      # Structura paginii
├── styles.css      # Stilizare completă (responsive)
├── script.js       # Funcționalitate formular + integrări
└── README.md       # Acest fișier
```

## 🎨 Personalizare

### Culori Brand
Editează variabilele CSS în `styles.css`:

```css
:root {
    --primary-color: #2d5d4f;      /* Culoarea principală */
    --secondary-color: #e8b4a8;    /* Culoare accent */
    --accent-color: #d4a797;       /* Culoare secundară */
}
```

### Imagini
Înlocuiește placeholder-ele cu imagini reale:
- **Hero image**: Supreme Anti-Aging Routine bundle
- **Logo Mayie**: În footer

## 🔌 Integrare theMarketer

### Pași pentru configurare:

1. **Deschide `script.js`**
2. **Găsește secțiunea TODO: THEMARKETER INTEGRATION**
3. **Înlocuiește**:
   ```javascript
   const THEMARKETER_ENDPOINT = 'YOUR_THEMARKETER_API_ENDPOINT_HERE';
   ```
   cu endpoint-ul real de la theMarketer

4. **Modifică funcția `submitToTheMarketer()`** conform documentației theMarketer:
   ```javascript
   const response = await fetch(THEMARKETER_ENDPOINT, {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
           // Adaugă header-e necesare
       },
       body: JSON.stringify({
           email: formData.email,
           firstname: formData.firstname,
           newsletter_consent: formData.gdpr_consent,
           source: 'giveaway_decembrie_2025'
       })
   });
   ```

## 📱 Testare Locală

1. Deschide `index.html` într-un browser modern
2. Sau folosește un server local:
   ```bash
   # Cu Python
   python -m http.server 8000
   
   # Cu Node.js (http-server)
   npx http-server
   ```

## 🌐 Deployment

### GitHub Pages
1. Push repository-ul pe GitHub
2. Settings → Pages → Source: main branch
3. Landing page va fi disponibil la: `https://mayiecosmetics.github.io/LP-Giveaway-decembrie-2025/`

### Netlify
1. Conectează repository-ul
2. Deploy automat la fiecare commit

### Custom Domain
Actualizează link-urile în:
- Meta tags (index.html)
- Social sharing URLs
- Canonical URL

## ✏️ Modificări Text

Tot textul este în limba română și poate fi editat direct în `index.html`:
- Headline-uri
- Descrieri produse
- Pași de participare
- Termeni și condiții

## 🎯 Conversion Optimization

Landing page include:
- CTA clar și vizibil
- Trust signals (GDPR, transparență)
- Social proof (benefit-uri newsletter)
- Urgency (perioada limitată: 9-12 decembrie)
- Mobile-first design
- Loading states pentru formular
- Mesaje de succes/eroare clare

## 📊 Analytics (Opțional)

Pentru tracking, adaugă Google Analytics sau similar în `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### Formularul nu trimite date
- Verifică console-ul browser-ului pentru erori
- Asigură-te că endpoint-ul theMarketer este corect configurat
- Verifică că toate câmpurile obligatorii sunt completate

### Styling issues
- Verifică că `styles.css` este încărcat corect
- Testează în diferite browsere
- Verifică cache-ul browserului (Ctrl+F5 pentru refresh)

## 📞 Contact

Pentru întrebări despre integrarea theMarketer sau modificări:
- Email: office@mayiecosmetics.ro
- Website: www.mayie.ro

## 📄 License

© 2025 Mayie. Toate drepturile rezervate.