# Corponizers 2.0 — Production Enterprise Recruitment Platform

Corponizers 2.0 is a production-ready enterprise recruitment, executive search, and lead-generation portal built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, MongoDB, and Mongoose.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Create a `.env.local` file in the root directory:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/corponizers
JWT_SECRET=corponizers-enterprise-secret-key-2026
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the live website.

---

## 🏛️ Platform Architecture

### Public Enterprise Portal (47 Routes)
- **Home Portal** (`/`): Enterprise hero, ISO 27001 badges, 8 Practice Areas matrix, 4-Step precision workflow, client trust grid, and stat counters.
- **8 Solutions Landing Pages** (`/solutions/*`): Executive Search, RPO, Permanent Hiring, Contract Staffing, Campus Hiring, Tech Hiring, Global Mobility, Recruitment Consulting.
- **10 Industry Practice Pages** (`/industries/*`): Finance, Healthcare, Manufacturing, Steel, Mining, IT & Cloud, Retail, Logistics, Education, Energy.
- **Careers Job Board** (`/careers`): Real-time search engine with department and engagement filters, position specifications, and double-blind candidate application modal.
- **Talent Insights Magazine** (`/insights`): Category filtering, search index, and article reader with executive abstracts.
- **Multi-Desk Contact Ingestion** (`/contact`): Segmented consultation desk (Employer, Job Seeker, Partnership, General) storing submissions in MongoDB.
- **Global Search Engine** (`/search`): Real-time indexing across open roles and whitepaper articles.

### Minimal Admin Operations Console
- **Login Gate** (`/admin/login`): Secure JWT authentication using HTTP-only cookies.
- **Dashboard Overview** (`/admin/dashboard`): Metrics counters for active jobs, published articles, and inquiries.
- **Jobs Management** (`/admin/jobs`): Post new executive positions, view live listings, and manage active status.
- **Blogs Management** (`/admin/blogs`): Review and manage published whitepapers.
- **Enquiries Inbox** (`/admin/enquiries`): Review candidate submissions and employer briefs with status toggling (`New`, `Reviewed`, `Contacted`).

---

## 🔑 Admin Credentials (Default Local Preview)
- **Portal**: `http://localhost:3000/admin/login`
- **Email**: `admin@corponizers.com`
- **Password**: `Corponizers2026!`

---

## 📦 Production Deployment (aaPanel / Docker)

### Build Production Bundle
```bash
npm run build
npm run start
```
