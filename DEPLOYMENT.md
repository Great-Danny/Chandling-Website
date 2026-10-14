# 🚀 DEPLOYMENT GUIDE - Limani Supply

## Quick Deployment (Choose One)

### 1. **Standard cPanel Shared Hosting**

Best for: Traditional shared hosting without Node.js

This project includes a standalone HTML/CSS/JavaScript site in `public/`. It
can run on standard Apache/cPanel hosting without Node.js or a Next.js server.

1. Open cPanel **File Manager** and open your domain's document root (usually
   `public_html`; addon domains may use a different folder).
2. Upload the **contents** of the project's `public/` folder into that
   document root. Put `index.html` directly in `public_html`, not inside a
   nested `public` folder.
3. Keep the `css/`, `js/`, and `images/` folders alongside the HTML files.
4. Visit your domain and test the catalog, filters, mobile menu, and other
   pages.

You can upload the contents of `public/` using FTP/SFTP instead of cPanel File
Manager. Do not upload `.git`, `node_modules`, `.next`, or the Next.js source
files for this static hosting option.

To create a ZIP for cPanel, run this command from the project folder in
PowerShell:

```powershell
Compress-Archive -Path public\* -DestinationPath shared-host-upload.zip -Force
```

Upload `shared-host-upload.zip` to the document root and extract it there.
The archive puts `index.html` and the asset folders directly at its root.

The login, cart, favorites, and dashboard examples currently use browser-side
JavaScript/local storage. Static hosting does not provide real user accounts,
shared order storage, payment processing, or message delivery; those features
need a server-side application and backend services.

---

### 2. **Vercel (Easiest - 2 minutes)** ⭐⭐⭐

Best for: Production, auto-deploys, always free

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd "C:\Users\pc\OneDrive\Desktop\Web Projects\Chandling Website"
vercel
```

**Or deploy via GitHub:**

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repo
5. Deploy! (one click)

✅ **Live URL:** `https://limani-supply.vercel.app`

---

### 3. **GitHub Pages (Free Forever)**

Best for: Free static hosting with Git versioning

1. Create GitHub account at [github.com](https://github.com)

2. Create new repository called `limani-supply`

3. In terminal:

```bash
cd "C:\Users\pc\OneDrive\Desktop\Web Projects\Chandling Website"
git init
git add .
git commit -m "Initial ship chandling website"
git remote add origin https://github.com/yourusername/limani-supply
git branch -M main
git push -u origin main
```

4. Go to repository settings → Pages
5. Set source to `main` branch
6. Save

✅ **Live URL:** `https://yourusername.github.io/limani-supply`

---

### 4. **Netlify (Drag & Drop)**

Best for: Simplicity, free SSL, great UI

```bash
npm install -g netlify-cli
cd "C:\Users\pc\OneDrive\Desktop\Web Projects\Chandling Website"
netlify deploy
```

**Or:** Drag the entire folder to [netlify.com](https://netlify.com)

✅ **Live URL:** `https://your-domain.netlify.app`

---

### 5. **AWS S3 + CloudFront**

Best for: Speed, enterprise scale, global CDN

```bash
# Install AWS CLI
pip install awscli

# Configure credentials
aws configure

# Create S3 bucket
aws s3 mb s3://limani-supply-2024

# Upload files
aws s3 sync . s3://limani-supply-2024 --delete

# Set up CloudFront in AWS Console
```

✅ **Live URL:** `https://d111111abcdef8.cloudfront.net`

---

### 6. **Traditional FTP Hosting**

Best for: Budget hosting, shared servers

1. Get hosting with FTP/SFTP access (Bluehost, Hostinger, GoDaddy, or another cPanel provider).
2. Connect via FTP client (FileZilla).
3. Upload the contents of `public/` to your domain's document root, usually `/public_html`.

✅ **Live URL:** `https://yourdomain.com`

---

## Step-by-Step: Vercel (Recommended)

### Prerequisites:

- ✅ Node.js installed (needed for Vercel CLI only)
- ✅ GitHub account (for link to source)

### Steps:

**Step 1:** Open PowerShell as Administrator

```powershell
# Verify Node.js
node --version   # Should show version
npm --version
```

**Step 2:** Install Vercel CLI

```powershell
npm install -g vercel
```

**Step 3:** Deploy

```powershell
cd "C:\Users\pc\OneDrive\Desktop\Web Projects\Chandling Website"
vercel
```

**Step 4:** Follow prompts:

```
? Set up and deploy "...\Chandling Website"? [Y/n] → y
? Which scope do you want to deploy to? → (select your account)
? Link to existing project? [y/N] → N
? What's your project's name? → limani-supply
? In which directory is your code located? → . (current)
? Want to modify these settings? [y/N] → N
```

**Step 5:** ✅ Done! Your URL will be displayed:

```
✨ Deployment complete!
🔗 https://limani-supply.vercel.app
📝 https://vercel.com/dashboard
```

---

## Deployment Comparison

| Platform            | Cost     | Setup Time | Free Tier | Custom Domain | SSL | Auto-Deploy |
| ------------------- | -------- | ---------- | --------- | ------------- | --- | ----------- |
| **Vercel**          | Free     | 2 min      | Yes       | ✅            | ✅  | ✅          |
| **GitHub Pages**    | Free     | 5 min      | Yes       | ✅            | ✅  | ✅          |
| **Netlify**         | Free     | 3 min      | Yes       | ✅            | ✅  | ✅          |
| **AWS S3**          | ~$1/mo   | 15 min     | No        | ✅            | ✅  | ❌          |
| **Traditional FTP** | $5-10/mo | 10 min     | Yes       | ✅            | ❌  | ❌          |

---

## What Gets Deployed?

```
✅ Standard shared hosting: contents of `public/` (HTML, CSS, JavaScript, and images)
✅ Vercel: full repository (Next.js source and public assets)
❌ .git folder (not deployed)
❌ node_modules (installed by the build platform when needed)
```

---

## Post-Deployment

### 1. **Test Your Site**

- Open the live URL
- Click through all pages
- Test products filtering
- Try add to cart
- Check mobile responsiveness

### 2. **Set Up Domain**

- Buy domain: Namecheap, GoDaddy, Google Domains
- Point DNS to deployment platform
- Platform guide: Vercel → Settings → Domains

### 3. **Monitor**

- Vercel Analytics Dashboard
- Google Analytics (add to HTML)
- Uptime monitoring

### 4. **Continuous Deployment**

With GitHub + Vercel:

- Push to GitHub
- Vercel auto-deploys
- No manual deployment needed!

---

## Troubleshooting

### "Node.js not found"

```powershell
# Check if installed
where node

# If not found, restart PowerShell after installation
# Close all PowerShell windows and reopen
```

### "Can't deploy"

```powershell
# Verify you're in the right directory
Get-Location   # Should show: .../Chandling Website

# Check files exist
Get-ChildItem *.html   # Should list HTML files
```

### "Vercel command not found"

```powershell
# Reinstall
npm uninstall -g vercel
npm install -g vercel
```

---

## Environment Variables (Advanced)

Create `.env.production` for production secrets:

```
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=your_database_url
```

---

## Performance Tips

1. **Optimize Images** - Use WebP format
2. **Minify CSS/JS** - Reduce file size
3. **Use CDN** - Vercel/Netlify includes CDN
4. **Cache** - Set cache headers
5. **Monitor** - Track Core Web Vitals

---

## Security

- ✅ HTTPS enabled on all platforms
- ✅ DDoS protection
- ✅ Free SSL certificates
- ⚠️ Don't store secrets in JavaScript
- ⚠️ Validate all user input

---

## Support

- **Vercel Help:** https://vercel.com/docs
- **GitHub Pages:** https://pages.github.com
- **Netlify Help:** https://docs.netlify.com
- **My Email:** info@limanisupply.com

---

## 🎉 Your Site is Live!

Share your deployment URL:

- Social media
- Email newsletter
- Business cards
- Marketing materials

**Example:** `https://limani-supply.vercel.app` ⚓

---

**Built with 💙 for maritime professionals**
