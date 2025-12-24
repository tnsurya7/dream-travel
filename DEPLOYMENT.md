# 🚀 Dream Travel Agency - Deployment Guide

## ✅ **Current Status**
- ✅ Git repository created and pushed to GitHub
- ✅ Build successful (no errors)
- ✅ All components working
- ✅ Ready for Vercel deployment

## 🌐 **Step 1: Deploy to Vercel**

### Option A: Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import `tnsurya7/dream-travel` repository
5. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
6. Click "Deploy"

### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: dream-travel-agency
# - Directory: ./
# - Override settings? No
```

## 📧 **Step 2: Configure EmailJS (After Deployment)**

### 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for free account
- Create email service (Gmail/Outlook)

### 2. Create Email Templates

**Template 1: Admin Notification**
- Template ID: `admin_enquiry_template`
- Copy HTML from: `email-templates/admin-notification.html`

**Template 2: Customer Confirmation**  
- Template ID: `customer_confirmation_template`
- Copy HTML from: `email-templates/customer-confirmation.html`

### 3. Update Configuration Files

**File 1: `app/components/EnquiryForm.tsx`**
```javascript
// Line 32-34, replace with your values:
const serviceId = 'YOUR_SERVICE_ID'
const templateId = 'YOUR_TEMPLATE_ID' 
const publicKey = 'YOUR_PUBLIC_KEY'
```

**File 2: `app/contact/page.tsx`**
```javascript
// Line 42-44, replace with your values:
const serviceId = 'YOUR_SERVICE_ID'
const templateId = 'YOUR_CONTACT_TEMPLATE_ID'
const publicKey = 'YOUR_PUBLIC_KEY'
```

## 🔄 **Step 3: Update and Redeploy**

After configuring EmailJS:

```bash
# Make your changes to the files above
git add .
git commit -m "Configure EmailJS for contact forms"
git push origin main
```

Vercel will automatically redeploy with the new changes.

## 🎨 **Step 4: Customize Business Details**

### Update Contact Information
**Files to edit:**
- `app/components/Navbar.tsx` - Phone numbers in top bar
- `app/components/Footer.tsx` - Contact info and address
- `app/contact/page.tsx` - Contact page details
- `app/layout.tsx` - SEO metadata

### Add Your Travel Packages
**File:** `app/utils/recommendations.ts`
```javascript
const samplePackages: Package[] = [
  // Replace with your actual packages
  {
    id: 'unique-id',
    title: 'Your Package Name',
    category: 'honeymoon', // or family, wedding, etc.
    price: 25000,
    duration: '4 Days 3 Nights',
    image: 'your-image-url',
    description: 'Package description',
    budget: 'affordable', // or 'premium'
    tags: ['beach', 'romantic']
  }
]
```

## 🔍 **Step 5: SEO & Performance**

### Update Domain in Metadata
**File:** `app/layout.tsx`
```javascript
// Line 12, replace with your domain:
metadataBase: new URL('https://your-domain.vercel.app'),
```

### Update Sitemap
**File:** `app/sitemap.ts`
```javascript
// Line 4, replace with your domain:
const baseUrl = 'https://your-domain.vercel.app'
```

## 📱 **Step 6: Test Everything**

After deployment, test:
- ✅ All pages load correctly
- ✅ Responsive design on mobile/tablet
- ✅ Contact forms work (after EmailJS setup)
- ✅ Package filtering and navigation
- ✅ SEO meta tags are correct

## 🌟 **Expected Vercel URL**
Your site will be available at:
`https://dream-travel-[random-string].vercel.app`

You can also add a custom domain in Vercel settings.

## 🆘 **Troubleshooting**

### Build Errors
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Verify no TypeScript errors locally

### EmailJS Not Working
- Verify service ID, template ID, and public key
- Check email templates are published
- Test with EmailJS dashboard first

### Images Not Loading
- Ensure image URLs are accessible
- Check Next.js image domains in `next.config.js`

## 📞 **Support**
- **Developer**: SURYA KUMAR M
- **Portfolio**: https://suryakumar-portfolio-777.vercel.app/
- **GitHub**: https://github.com/tnsurya7/dream-travel

---

**Your premium travel website is ready to go live! 🎉✈️**