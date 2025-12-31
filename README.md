# HeyMello AI Voice Agents - Website

> Next.js 15 website for HeyMello AI Voice Agents platform with enterprise-grade SEO and performance optimization.

## 🚀 Quick Start

### Development
```bash
cd frontend && npm install    # Install dependencies
npm run dev                   # Start dev server at localhost:3000
```

### Deployment
```bash
./deploy-dev.sh              # Deploy to DEV environment
./deploy-uat.sh              # Deploy to UAT environment  
./deploy-prod.sh             # Deploy to production
```

### Database Setup
```bash
cd database
./setup-db.sh uat           # Setup UAT database
./setup-db.sh prod          # Setup production database
```

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| **[DEPLOYMENT_ENVIRONMENTS.md](DEPLOYMENT_ENVIRONMENTS.md)** | Complete deployment guide for all environments |
| **[database/README.md](database/README.md)** | Database setup and migration guide |
| **[EMAIL_SETUP.md](EMAIL_SETUP.md)** | Email configuration for contact forms |
| **[FORM_STORAGE_IMPLEMENTATION.md](FORM_STORAGE_IMPLEMENTATION.md)** | Form submission and database implementation |

## 📁 Project Structure

```
heymello-website-next/
├── frontend/                 # Next.js application
│   ├── src/
│   │   ├── app/             # Next.js App Router pages
│   │   │   ├── page.tsx     # Home page
│   │   │   ├── pricing/     # Pricing page with contact form
│   │   │   ├── solutions/   # Solutions showcase
│   │   │   ├── integrations/# Platform integrations
│   │   │   ├── help-center/ # Help & FAQs
│   │   │   ├── contact-sales/# Sales contact form
│   │   │   ├── how-it-works/# Product explanation
│   │   │   └── resources/   # Resources & testimonials
│   │   ├── components/      # React components
│   │   │   ├── Hero.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Features.tsx
│   │   │   └── ui/          # Shadcn/ui components
│   │   ├── data/            # Mock data & content
│   │   ├── hooks/           # Custom React hooks
│   │   └── lib/             # Utilities
│   ├── public/              # Static assets
│   └── package.json
├── database/                # PostgreSQL migrations
├── tests/                   # Test files
└── DEPLOYMENT.md           # GCP deployment guide
```

## 🎯 Key Features

- **Next.js 15** with App Router for optimal performance
- **Server-side rendering** for excellent SEO
- **Tailwind CSS** for styling with shadcn/ui components
- **TypeScript** for type safety
- **Responsive design** - Mobile-first approach
- **SEO optimized** - Sitemap, robots.txt, metadata
- **Contact forms** - Pricing inquiries and sales
- **Help Center** - FAQs and support resources

## 🌐 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, features, stats |
| `/pricing` | Pricing page with contact form |
| `/solutions` | AI voice agent solutions showcase |
| `/integrations` | Platform integrations (Salesforce, HubSpot, etc.) |
| `/help-center` | FAQs and support |
| `/contact-sales` | Sales contact form |
| `/how-it-works` | Product explanation |
| `/resources` | Testimonials and resources |

## 🛠️ Tech Stack

**Frontend:**
- Next.js 15.1.6
- React 19
- TypeScript
- Tailwind CSS
- Shadcn/ui components
- Radix UI primitives
- Lucide icons

**Backend/Database:**
- PostgreSQL (form submissions)
- Next.js API Routes
- Docker support

## 📦 Available Scripts

```bash
# Development
npm run dev              # Start dev server on port 3000
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues
npm run type-check       # Check TypeScript types

# Docker
npm run docker:build     # Build Docker image
npm run docker:run       # Run Docker container

# Deployment
npm run deploy:gcp       # Deploy to Google Cloud Platform
npm run deploy:quick     # Quick deployment script
```

## 🌍 Deployment

Choose your deployment environment:

```bash
./deploy-dev.sh             # Development environment
./deploy-uat.sh             # UAT/Staging environment
./deploy-prod.sh            # Production environment
```

Each script handles:
- ✅ Database password prompt and configuration
- ✅ GCP project setup and API enablement  
- ✅ Docker build and Cloud Run deployment
- ✅ Service URL and monitoring links

> **📖 Detailed Guide:** See [DEPLOYMENT_ENVIRONMENTS.md](DEPLOYMENT_ENVIRONMENTS.md) for comprehensive deployment documentation.

## 🔧 Configuration

### Environment Setup

**Local Development:**
```bash
cd frontend
cp .env.example .env.local    # Copy environment template
# Edit .env.local with your settings
```

**Production Deployment:**
- Database credentials are prompted during deployment
- Environment variables are automatically configured
- SSL settings are optimized for Cloud Run

> **📖 Advanced Config:** See individual documentation files for detailed configuration options.

## 🎨 Customization

### Brand Colors

Edit `frontend/src/app/globals.css` for theme colors:

```css
:root {
  --purple-600: #9333ea;
  --purple-700: #7e22ce;
  /* Add your brand colors */
}
```

### Content

Update content in:
- `frontend/src/data/mockData.ts` - Features, solutions, integrations
- `frontend/src/components/` - Individual component content

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔍 SEO Features

- ✅ Server-side rendering
- ✅ Dynamic metadata per page
- ✅ Sitemap generation (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ OpenGraph tags
- ✅ Twitter cards
- ✅ Structured data (JSON-LD)
- ✅ Web manifest

## 🧪 Testing

```bash
# Run tests (when available)
npm test

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📄 License

Proprietary - HeyMello AI

## 🤝 Contributing

Internal project. Contact the development team for contribution guidelines.

## �️ Troubleshooting

| Issue | Solution |
|-------|----------|
| **Local dev not working** | `cd frontend && npm install && npm run dev` |
| **Build fails** | Check TypeScript errors: `npm run type-check` |
| **Deployment fails** | Verify database password and GCP access |
| **Form submissions failing** | Check database connection and SSL settings |

## 📞 Support & Resources

- **🚀 Quick Deploy:** Use `./deploy-dev.sh`, `./deploy-uat.sh`, or `./deploy-prod.sh`
- **💾 Database Issues:** See [database/README.md](database/README.md)
- **🌍 Deployment Problems:** Check [DEPLOYMENT_ENVIRONMENTS.md](DEPLOYMENT_ENVIRONMENTS.md)
- **📧 Email Setup:** Configure forms with [EMAIL_SETUP.md](EMAIL_SETUP.md)

## 🏗️ Recent Optimizations

- ✅ **Eliminated setup-env.sh** - Database config now integrated into deployment
- ✅ **Streamlined README files** - Removed redundant documentation  
- ✅ **Fixed SSL certificate issues** - Optimized database connection settings
- ✅ **Consolidated deployment** - Single-command deployment per environment

---

**Built with ❤️ by the HeyMello team** | **Next.js 15** • **TypeScript** • **Tailwind CSS** • **PostgreSQL**
