# 📝 Motion - A Notion Clone

**Motion** is a fully functional Notion clone built to showcase my skills in modern web development. This project demonstrates my ability to work with complex state management, real-time databases, authentication systems, and responsive UI design—all while building a production-ready application from scratch.

---

## 🧠 Project Overview

Motion replicates core Notion functionality, allowing users to create, edit, and organize documents in a clean, intuitive interface. The app features:

- **Real-time document synchronization** powered by Convex
- **Secure authentication** via Clerk with GitHub OAuth
- **Rich text editing** capabilities for creating and formatting content
- **Nested document structure** for organizing pages hierarchically
- **Responsive design** that works seamlessly across devices
- **Dark/Light mode** support for enhanced user experience

Users can sign in with their GitHub account, create documents, organize them in a sidebar, and edit them in real-time with changes persisting instantly to the database.

---

## 🧰 Technologies Used

- **Next.js** - React framework for production
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality UI components
  - Popover, Dropdown, Dialog, and more component primitives
- **Convex** - Real-time backend and database
- **Clerk** - Authentication and user management
- **Lucide React** - Modern icon library
- **Vercel** - Deployment platform

---

## ⚡ Features

- **Authentication System**
  - GitHub OAuth integration via Clerk
  - Persistent user sessions across devices
  - Secure token-based authentication with Convex

- **Document Management**
  - Create, edit, and delete documents
  - Real-time synchronization across all devices
  - Nested document structure with parent-child relationships
  - Archive and restore functionality

- **Rich User Interface**
  - Clean, Notion-inspired design
  - Responsive layout for mobile, tablet, and desktop
  - Sidebar navigation with collapsible sections
  - Loading states and smooth transitions

- **Real-time Updates**
  - Changes sync instantly across all sessions
  - Optimistic UI updates for better user experience
  - Database-backed persistence via Convex

---

## 🛠 Setup

Clone the repository onto your local machine:

```bash
git clone https://github.com/your-username/motion-notion-clone.git
cd motion-notion-clone
```

Install dependencies:

```bash
npm install
```

Set up environment variables by creating a `.env.local` file:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Convex
CONVEX_DEPLOYMENT=your_convex_deployment
NEXT_PUBLIC_CONVEX_URL=your_convex_url
```

Run Convex in development mode:

```bash
npx convex dev
```

Start the development server:

```bash
npm run dev
```

Open the localhost link to view the project in your browser.

---

## 🚀 Deployment

The project is deployed on Vercel and uses:

- **Convex production deployment** for the backend
- **Clerk production instance** for authentication
- **Vercel** for frontend hosting

Key deployment considerations:

- Ensure Convex `auth.config.js` uses the correct Clerk domain (without `https://`)
- Deploy Convex separately using `npx convex deploy`
- Configure environment variables in both Vercel and Convex dashboards

---

## 🌐 Live Website

[Motion - Live Demo](https://motion-a-notion-clone-l3i5dk9gg-owolabis-projects-2efdecd5.vercel.app/)

---

## 💡 What I Learned

This project pushed my skills in several key areas:

- **Full-stack development** with Next.js and Convex
- **Authentication flows** and secure token handling
- **Real-time data synchronization** and optimistic updates
- **Complex state management** in a production environment
- **Debugging production issues** - especially the subtle `https://` bug in auth configuration
- **Modern UI development** with shadcn/ui and Tailwind CSS

Building Motion taught me that sometimes the biggest bugs hide in the smallest details, and that stepping away from a problem can be just as valuable as pushing through it.

---

## 📬 Contact

Feel free to reach out if you have questions or want to collaborate!

- **Twitter**: [@thetimiddev](https://x.com/thetimiddev)