# Dream Travel Agency - Premium Travel Booking Website

A complete, premium, no-database travel booking web application built with Next.js, featuring intelligent client-side recommendations and email-based booking system.

## 🌟 Features

### ✈️ Core Functionality
- **No Database Required** - All data handled client-side with session-based intelligence
- **Email-Only Booking System** - Professional enquiry handling via EmailJS
- **Smart Recommendations** - Client-side behavioral tracking and personalized suggestions
- **Premium UI/UX** - Luxury travel brand design with smooth animations
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **SEO Optimized** - Complete meta tags, structured data, and performance optimized

### 📦 Package Categories
- Wedding Tour Packages
- Honeymoon Packages  
- Educational Tour Packages
- Family Tour Packages
- Group Tour Packages
- Low & Affordable Packages
- India Tours
- International Tours

### 🎨 Premium Design Features
- Glassmorphism effects and soft shadows
- Framer Motion animations and micro-interactions
- Parallax scrolling effects
- Elegant hover animations
- Modern typography with gradients
- High-quality travel imagery

### 🧠 Smart Recommendation System
- Session-based user behavior tracking
- Category preference analysis
- Scroll depth and engagement metrics
- Personalized package suggestions
- No permanent data storage (privacy-focused)

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Icons**: React Icons (Feather Icons)
- **Deployment**: Vercel/Netlify ready

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dream-travel-agency
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up EmailJS (Required for contact forms)**
   - Create account at [EmailJS](https://www.emailjs.com/)
   - Create email service and templates
   - Update EmailJS configuration in:
     - `app/components/EnquiryForm.tsx`
     - `app/contact/page.tsx`
   - Replace placeholder values:
     ```javascript
     const serviceId = 'YOUR_SERVICE_ID'
     const templateId = 'YOUR_TEMPLATE_ID' 
     const publicKey = 'YOUR_PUBLIC_KEY'
     ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 📧 Email Configuration

### EmailJS Templates Required:

1. **Admin Notification Template** (`YOUR_TEMPLATE_ID`)
   ```
   Subject: New Travel Enquiry - {{package_name}}
   
   New enquiry received:
   
   Customer: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Package: {{package_name}}
   Travel Date: {{travel_date}}
   Persons: {{number_of_persons}}
   
   Message: {{message}}
   ```

2. **Customer Confirmation Template** (`customer_confirmation_template`)
   ```
   Subject: Thank you for your enquiry - Dream Travel Agency
   
   Dear {{customer_name}},
   
   Thank you for your interest in {{package_name}}.
   Our team will contact you within 24 hours.
   
   Travel Details:
   - Package: {{package_name}}
   - Date: {{travel_date}}  
   - Persons: {{number_of_persons}}
   
   Best regards,
   Dream Travel Agency Team
   ```

## 📱 Pages Structure

- **Home** (`/`) - Hero, featured packages, recommendations, testimonials
- **Packages** (`/packages`) - All packages with category filtering
- **Package Details** (`/packages/[id]`) - Detailed package information
- **About Us** (`/about`) - Company story, team, values
- **Contact** (`/contact`) - Contact form, business info, map

## 🎯 Smart Recommendations

The recommendation system tracks:
- Page views and time spent
- Package category clicks
- Scroll depth and engagement
- User interests and preferences

Recommendations are generated based on:
- Category preferences (honeymoon, family, budget, etc.)
- Budget indicators (affordable vs premium)
- Engagement patterns
- Similar package matching

## 🔧 Customization

### Adding New Packages
Edit `app/utils/recommendations.ts`:
```javascript
const samplePackages: Package[] = [
  {
    id: 'unique-id',
    title: 'Package Name',
    category: 'honeymoon', // or family, wedding, etc.
    price: 25000,
    duration: '4 Days 3 Nights',
    image: 'image-url',
    description: 'Package description',
    budget: 'affordable', // or 'premium'
    tags: ['beach', 'romantic', 'couple']
  }
]
```

### Styling Customization
- Colors: `tailwind.config.js` - Update primary and gold color schemes
- Fonts: `app/globals.css` - Modify Google Fonts imports
- Animations: `tailwind.config.js` - Add custom keyframes and animations

### Contact Information
Update business details in:
- `app/components/Navbar.tsx`
- `app/components/Footer.tsx` 
- `app/contact/page.tsx`
- `app/layout.tsx` (metadata)

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Environment Variables
No environment variables required - all configuration is in the code.

## 📊 SEO Features

- Unique meta titles and descriptions for each page
- Open Graph and Twitter Card tags
- Structured data markup ready
- Image alt attributes
- Semantic HTML structure
- Fast loading optimized images
- Mobile-first responsive design

## 🎨 Design System

### Colors
- **Primary**: Blue shades (#0ea5e9, #0284c7, #0369a1)
- **Gold**: Accent colors (#fbbf24, #f59e0b, #d97706)
- **Gradients**: Primary to gold combinations

### Typography
- **Headings**: Playfair Display (luxury serif)
- **Body**: Inter (modern sans-serif)

### Components
- Glassmorphism cards with backdrop blur
- Gradient buttons with hover effects
- Smooth animations and transitions
- Consistent spacing and shadows

## 📞 Business Information

**Dream Travel Agency**
- Phone: +91 9109455317
- Email: dreamtravelagency395@gmail.com
- Address: Damoh, Madhya Pradesh, India
- Instagram: @dreamtravellers3

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Unsplash for high-quality travel images
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- EmailJS for email service integration

---

**Built Dream Travel Agency By SURYA KUMAR M**
