# 📝 Medium

A full-stack Medium-like blogging platform built with modern web technologies.

## 🌐 Live Demo

**🔗 [View Live Demo](https://medium-71r1.vercel.app/)**

## 🛠️ Tech Stack

**Frontend:**
- ⚛️ React/Vue.js with Vite
- 🔷 TypeScript
- 🎨 Tailwind CSS

**Backend:**
- 🔥 Hono.js framework
- ☁️ Cloudflare Workers
- 🐘 PostgreSQL database
- 🔺 Prisma ORM
- 🔐 Clerk Auth

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd mediumclone
```

## 🎨 Frontend Setup

### 1. Navigate to Frontend Directory

```bash
cd frontend
```

### 2. Install Dependencies

```bash
pnpm install
# or
npm install
```

### 3. Configure Environment Variables

Update your `.env` file:

```env

VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 4. Set up Clerk Authentication

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application
3. Copy your Publishable Key and add it to your `.env` file
4. Configure your sign-in/sign-up settings in Clerk Dashboard

### 5. Run Development Server

```bash
pnpm dev
# or
npm run dev
```

🌐 **Frontend URL:** http://localhost:5173

## 🔧 Backend Setup (Hono + Cloudflare Workers + Prisma)

### Step 1 — Initialize Backend

From the root folder:

```bash
mkdir backend
cd backend
npm create hono@latest
```

**Configuration:**
- 📦 Target directory: `backend`
- Template: `cloudflare-workers`
- Package manager: Choose npm/yarn/bun

### Step 2 — Install Dependencies

```bash
cd backend
npm install prisma
```

### Step 3 — Set Up Database (PostgreSQL)

1. Get your database connection string from [Neon](https://neon.tech) or [Aiven](https://aiven.io)

Example format:
```
postgres://youruser:yourpass@yourhost/dbname
```

2. **[Optional]** Get Prisma Accelerate URL from [Prisma Data Platform](https://www.prisma.io/data-platform/accelerate) for production connection pooling.

### Step 4 — Initialize Prisma

```bash
npx prisma init
```

Update `.env` file inside backend directory:

```env
DATABASE_URL="postgres://youruser:yourpass@yourhost/dbname"
```

Configure your `schema.prisma` file with your data models.

### Step 5 — Generate Prisma Client & Push Schema

```bash
npx prisma generate
npx prisma db push
```

### Step 6 — Setup wrangler.toml

Create or update `wrangler.toml`:

```toml
name = "backend"
compatibility_date = "2023-12-01"

[vars]
DATABASE_URL = "prisma://accelerate.prisma-data.net/?api_key=YOUR_API_KEY"
```

### Step 7 — Run Backend Locally

```bash
npx wrangler dev
```

🔗 **Backend URL:** http://localhost:8787

## 🚀 Deployment

### Frontend Deployment
Deploy your frontend to your preferred platform (Vercel, Netlify, etc.)

### Backend Deployment (Cloudflare Workers)

```bash
cd backend
npx wrangler deploy
```

🔗 **Production Backend URL:** `https://your-backend-name.<your-worker-subdomain>.workers.dev`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐ **Don't forget to star this repository if you found it helpful!**
