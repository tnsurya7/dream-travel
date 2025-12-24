# Dream Travel Agency - Setup Guide

## 🚀 Quick Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure EmailJS (Required)

1. **Create EmailJS Account**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account
   - Create a new service (Gmail, Outlook, etc.)

2. **Create Email Templates**
   
   **Template 1: Admin Notification**
   - Template ID: `admin_enquiry_template`
   - Use the HTML from `email-templates/admin-notification.html`
   
   **Template 2: Customer Confirmation**
   - Template ID: `customer_confirmation_template`
   - Use the HTML from `email-templates/customer-confirmation.html`

3. **Update Configuration**
   
   Replace these values in the following files:
   - `app/components/EnquiryForm.tsx`
   - `app/contact/page.tsx`
   
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID'        // From EmailJS dashboard
   const templateId = 'YOUR_TEMPLATE_ID'      // admin_enquiry_template
   const publicKey = 'YOUR_PUBLIC_KEY'        // From EmailJS account settings
   ```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

## 📧 EmailJS Template Variables

### Admin Template Variables:
- `{{from_name}}` - Customer name
- `{{from_email}}` - Customer email
- `{{phone}}` - Customer phone
- `{{package_name}}` - Selected package
- `{{travel_date}}` - Preferred travel date
- `{{number_of_persons}}` - Number of travelers
- `{{message}}` - Customer message

### Customer Template Variables:
- `{{customer_name}}` - Customer name
- `{{package_name}}` - Selected package
- `{{travel_date}}` - Travel date
- `{{number_of_persons}}` - Number of persons
- `{{to_email}}` - Customer email

## 🎨 Customization

### Update Business Information
Edit these files with your business details:
- `app/components/Navbar.tsx` - Phone numbers in top bar
- `app/components/Footer.tsx` - Contact information
- `app/contact/page.tsx` - Contact page details
- `app/layout.tsx` - SEO metadata

### Add/Edit Packages
Edit `app/utils/recommendations.ts`:
```javascript
const samplePackages: Package[] = [
  // Add your packages here
]
```

### Customize Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your brand colors
  },
  gold: {
    // Accent colors
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Build: `npm run build`
2. Deploy `out` folder

## ✅ Pre-Launch Checklist

- [ ] EmailJS configured and tested
- [ ] Business information updated
- [ ] Contact forms working
- [ ] All pages responsive
- [ ] SEO metadata complete
- [ ] Images optimized
- [ ] Performance tested

## 🆘 Troubleshooting

### EmailJS Not Working
1. Check service ID, template ID, and public key
2. Verify email templates are published
3. Check browser console for errors
4. Test with EmailJS test feature

### Build Errors
1. Check TypeScript errors: `npm run lint`
2. Verify all imports are correct
3. Check image URLs are accessible

### Performance Issues
1. Optimize images (use WebP format)
2. Enable Next.js image optimization
3. Check bundle size with `npm run build`

## 📞 Support

For technical support or customization requests:
- Email: nikhiljatav5588@gmail.com
- Phone: +91 9109455317

---

**Ready to launch your premium travel website! 🎉**