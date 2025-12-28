# Dream Travel Agency - Deployment Guide

## Premium Email Configuration for Production

The website now features **premium HTML email templates** with gradient colors, animated effects, and professional branding.

### Environment Variables Required:

```
EMAIL_USER=dreamtravelagency395@gmail.com
EMAIL_PASS=ftwz jcrf ztxe ioev
EMAIL_FROM=dreamtravelagency395@gmail.com
EMAIL_TO=dreamtravelagency395@gmail.com
```

### Vercel Deployment Steps:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add premium SMTP email templates with gradients and animations"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard:
     - Go to Project Settings → Environment Variables
     - Add each variable listed above

3. **Gmail App Password Setup:**
   - The app password `ftwz jcrf ztxe ioev` is already configured
   - Make sure 2-factor authentication is enabled on the Gmail account
   - The app password should work for SMTP authentication

### Premium Email Features:

✅ **Premium Design** - Gradient backgrounds, animations, and modern styling
✅ **Brand Logo Integration** - Circular logo container with gradient effects
✅ **Animated Headers** - Shine animation effects for premium feel
✅ **SMTP Email Service** - Using Gmail with app password
✅ **HTML Email Templates** - Professional gradient yellow/blue/white theme
✅ **Admin Notifications** - Receive enquiries in premium format
✅ **Customer Confirmations** - Beautiful thank you emails with next steps
✅ **Success Notifications** - Green popup notifications in website
✅ **Error Handling** - Proper error messages and fallbacks
✅ **Contact Form Integration** - Works with contact page
✅ **Package Booking Integration** - Works with package enquiry forms
✅ **Responsive Design** - Works perfectly on all email clients
✅ **Interactive Elements** - Clickable buttons and contact information

### Premium Email Templates Design:

**🎨 Ultra-Premium Design Elements:**
- **Multi-Color Gradients:** Blue-purple-pink outer wrapper with animated shine effects
- **Brand Container:** Golden gradient container with "Dream Travel Agency" text (no logo)
- **Premium Typography:** Bold 900 weight fonts with text shadows and letter spacing
- **High-Quality Emojis:** Professional emojis with drop-shadow effects
- **Advanced Animations:** 4-second shine sweep animations across headers
- **Color Scheme:** Multi-gradient headers, golden brand containers, colorful content sections
- **Premium Shadows:** Deep box shadows with blur and spread effects
- **Borders:** Glass-morphism borders with transparency effects

**📧 Admin Email Premium Features:**
- **Brand Header:** "Dream Travel Agency" in gradient text with airplane emoji
- **New Lead Alert:** Green gradient badge with bold text
- **Customer Details:** Golden gradient section with rainbow top border
- **Contact Grid:** Glass-morphism contact cards with backdrop blur
- **Timestamp:** Blue gradient section with professional styling
- **Footer:** Multi-color gradient background with golden brand text

**👤 Customer Email Premium Features:**
- **Success Badge:** Large green gradient confirmation badge
- **Highlight Box:** Golden gradient welcome section with rainbow border
- **Summary Section:** Blue gradient enquiry details with bold typography
- **Contact Buttons:** Premium gradient buttons with hover effects
- **Next Steps:** Purple gradient section with numbered badges
- **Social Links:** Glass-morphism social media buttons

**✨ Premium Typography & Styling:**
- **Font Weight:** 900 (Extra Bold) for all headings and important text
- **Text Effects:** Drop shadows, letter spacing, and gradient text
- **Emoji Quality:** High-resolution emojis with shadow effects
- **Bold Emphasis:** All important text wrapped in `<strong>` tags
- **Color Gradients:** Multi-stop gradients for premium appearance
- **Responsive Design:** Perfect rendering across all email clients

### Testing:

1. Fill out contact form on website
2. Check for green success notification popup
3. Verify premium admin email received at dreamtravelagency395@gmail.com
4. Verify customer receives beautiful confirmation email
5. Test all clickable elements in emails

### Email Template Previews:

- **Admin Template:** `email-templates/admin-notification.html`
- **Customer Template:** `email-templates/customer-confirmation.html`

### Troubleshooting:

- If emails don't send, check Vercel function logs
- Ensure environment variables are set correctly
- Gmail app password must be exactly: `ftwz jcrf ztxe ioev`
- Check spam folder for emails
- Email templates are responsive and work in all major email clients