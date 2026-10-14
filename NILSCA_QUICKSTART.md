# NILSCA Portal Quick Start Guide

## 🚀 Get Started in 60 Seconds

### Step 1: Open the Portal

Navigate to **`nilsca-index.html`** in your web browser.

### Step 2: Explore Key Features

#### Verify a Chandler (Homepage CTA)

1. Click the glassmorphism verification box
2. Enter a chandler name (try "Maritime Excellence Ltd")
3. View instant verification results

#### Browse Member Directory

1. Click "Member Directory" from navbar or quick access cards
2. Use filters to search by:
   - **Port:** Lagos, Port Harcourt, Calabar, Delta
   - **Services:** Provisions, Lubricants, Spare Parts, Repairs
   - **Status:** Verified or Pending Review
3. Click "Certificate" to view member's digital credentials

#### Check Digital Certificates

1. Navigate to "Certificates" section
2. View sample NILSCA certificate with QR code
3. "Download Certificate" button (demo phase)

#### Verify License Number

1. Go to "Verify Chandler" page
2. Choose verification method:
   - Search by name
   - Scan QR code (demo)
   - Enter license number (e.g., `NILSCA-2026-00145`)
3. View complete verification details

---

## 📊 Sample Data Loaded

### Verified Members Database

```
1. Maritime Excellence Ltd (Lagos)
2. Ocean Supply Services (Port Harcourt)
3. Port Harbor Chandlers (Calabar)
4. Delta Maritime Services (Delta Port)
5. Lagos Port Supplies (Lagos)
6. Calabar Marine Supplies (Calabar)
7. Lagos Ship Provisions (Lagos)
```

### Port Resources

- Port of Lagos
- Port Harcourt
- Calabar Port
- Delta Port
- Tin Can Island Terminal
- Lekki Deep Sea Port

### News Feed

- NILSCA announcements
- Port authority updates
- Global maritime news

---

## 🎨 Customize the Portal

### Change Colors

Edit **`css/nilsca-premium.css`**:

```css
:root {
  --color-navy-900: #002147; /* Change this */
  --color-gold-500: #d4af37; /* Change this */
}
```

### Update Member Database

Edit **`js/nilsca-members.js`** and **`js/nilsca-portal.js`**:

```javascript
const nilscaMembers = [
  {
    id: 1,
    name: "Your Company Name",
    port: "lagos",
    // Add more fields...
  },
];
```

### Add News Articles

Edit **`news.html`** inline JavaScript:

```javascript
const newsArticles = [
  {
    title: "Your News Title",
    excerpt: "Brief description",
    date: "2026-02-23",
    category: "nilsca", // or "port", "global"
    source: "Your Source",
  },
];
```

---

## 📂 File Overview

| File                | Purpose              | Custom Content                       |
| ------------------- | -------------------- | ------------------------------------ |
| `nilsca-index.html` | Homepage             | Logo, hero text, President's message |
| `directory.html`    | Member search        | Member database                      |
| `verify.html`       | License verification | Member verification data             |
| `certificates.html` | Digital credentials  | Certificate templates                |
| `compliance.html`   | Regulations          | NILSCA compliance requirements       |
| `ports.html`        | Port info            | Nigerian port details                |
| `news.html`         | News feed            | Current maritime news                |
| `contact.html`      | Contact form         | NILSCA contact info                  |

---

## 🔧 Common Customizations

### Add Your Logo

1. Replace `⚓ NILSCA` text in navbar with `<img src="logo.png" alt="Logo">`
2. Add CSS for logo styling

### Update Contact Information

Edit `contact.html`:

- Phone number
- Email address
- Office location
- Contact form recipients

### Change Navigation Links

Edit `navbar` in any page:

```html
<li><a href="your-page.html">Your Link</a></li>
```

### Add New Members

1. Add to database in `js/nilsca-members.js`
2. Add to verification in `js/nilsca-verify.js`
3. Add to homepage search in `js/nilsca-portal.js`

---

## 📱 Test on Mobile

### Using Chrome DevTools

1. Press `F12` or `Ctrl+Shift+I`
2. Click device toolbar icon (top-left)
3. Choose mobile device size
4. Test all features at 375px, 768px widths

### Test Breakpoints

- Mobile: 320px - 480px
- Tablet: 481px - 768px
- Desktop: 769px+

---

## 🌐 Deploy Your Portal

### Quick Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

```bash
git add .
git commit -m "Deploy NILSCA Portal"
git push origin main
```

**Enable in GitHub:**

1. Go to repository Settings
2. Scroll to Pages section
3. Set source to "main" branch
4. Your site publishes at `https://username.github.io/`

### Deploy to FTP

Use FileZilla or similar:

1. Upload all files to `/public_html/`
2. Maintain folder structure
3. Test all links work correctly

---

## ✨ Key Features Summary

| Feature              | Status     | Details                           |
| -------------------- | ---------- | --------------------------------- |
| Member Directory     | ✓ Complete | Filter by port & service          |
| Verification Tool    | ✓ Complete | Search, QR (demo), License lookup |
| Digital Certificates | ✓ Complete | Display with QR placeholder       |
| Compliance Hub       | ✓ Complete | IMO, ISPS, Nigerian law           |
| Port Resources       | ✓ Complete | 6 major Nigerian ports            |
| News Feed            | ✓ Complete | 6 sample articles with filtering  |
| Contact Center       | ✓ Complete | Form + direct contact             |
| SSL/HTTPS            | ✓ Built-in | Vercel, Netlify, GitHub Pages     |
| Mobile Responsive    | ✓ Complete | 320px - 2560px viewports          |
| Dark Mode            | 🟡 Partial | Navy/gold theme included          |
| QR Code Generation   | 🟡 Ready   | Integrate qrcode.js library       |
| PDF Export           | 🟡 Ready   | Integrate jsPDF library           |
| Multilingual         | 🟡 Ready   | Framework prepared for i18n       |
| Backend Database     | 🟡 Ready   | Structure supports any DB         |

---

## 🐛 Troubleshooting

### Portal won't load

- Check file paths are relative (e.g., `js/main.js` not `/js/main.js`)
- Verify all `.html`, `.css`, `.js` files are in correct folders
- Open browser console (F12) and look for 404 errors

### Navbar not appearing

- Check `css/nilsca-premium.css` is loaded
- Verify navbar HTML syntax in each page
- Check font imports from Google Fonts are loading

### Members not showing

- Open browser console and check for JavaScript errors
- Verify `js/nilsca-members.js` is loading
- Check member database structure matches expected format

### Mobile menu not working

- Check hamburger toggle HTML ID matches JavaScript (`#navToggle`)
- Verify click handlers are attached in `js/nilsca-portal.js`
- Check CSS media queries are set to `max-width: 768px`

---

## 💡 Pro Tips

1. **Test URLs:** Always test links work on both desktop and mobile
2. **Backup Data:** Keep copy of member database before updates
3. **Monitor Analytics:** Track which pages visitors use most
4. **Update Regularly:** Monthly news feed updates keep site fresh
5. **Security:** Change any demo passwords/API keys before production
6. **Performance:** Optimize images to under 100KB each
7. **SEO:** Add meta tags for search engine visibility
8. **Accessibility:** Test with screen readers for compliance

---

## 🎯 Next Steps

1. **Add Real Data:** Replace sample members with actual NILSCA members
2. **Integrate QR:** Add `qrcode.js` library for real QR generation
3. **Setup Backend:** Connect to database for member management
4. **Add Payments:** Integrate Stripe/Paystack for renewals
5. **Multilingual:** Activate French and Chinese interfaces
6. **Analytics:** Add Google Analytics or Hotjar tracking

---

## 📞 Support Resources

- **Strategic Overview:** See `NILSCA_STRATEGIC_BRIEF.md`
- **Full Documentation:** See `NILSCA_README.md`
- **Project Structure:** See `PROJECT_STRUCTURE.md`
- **Deployment Guides:** See `DEPLOYMENT.md`

---

**Ready to launch? Start with nilsca-index.html and explore! 🚀⚓**
