This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# 🏥 Healthcare+ Frontend UI

A clean, responsive, and minimal **frontend prototype** for a healthcare web app.  
Designed with simplicity and clarity in mind — covering key pages like **Home**, **Login**, and **Signup**.

> ⚡ Built in ~5 hours as a fast prototype to demonstrate intent, UX skills, and code structure.

---

## ✨ Features

- ✅ Built with **Next.js 14 (App Router)**
- 🎨 Styled using **CSS Modules + SCSS**
- 📱 Fully **responsive** design (desktop → mobile)
- 🌙 Includes a working **dark mode toggle**
- 📸 Screenshots included in `ss/` folder
- ⚙️ Designed with scalability in mind (modular structure)

---

## 📸 Preview

| Light Mode | Dark Mode |
|------------|-----------|
| ![Light](./ss/home-light.png) | ![Dark](./ss/home-dark.png) |

> 📂 See more in the [`ss`](./ss) folder.

---

## 📂 Folder Structure

healthcare-frontend/
├── public/
├── src/
│ ├── app/
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ ├── login/page.tsx
│ │ └── signup/page.tsx
│ ├── components/
│ │ └── Navbar.tsx
│ ├── styles/
│ │ ├── Layout.module.scss
│ │ ├── Auth.module.scss
│ │ └── Home.module.scss
├── ss/
│ ├── home-light.png
│ └── home-dark.png
└── README.md


---

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/stARS24/healthcare-frontend

# Install dependencies
npm install

# Run locally
npm run dev


🙋‍♂️ Why This Project?
I built this in a few hours to demonstrate:

Fast execution under time constraints

UX/UI attention to detail

Passion for contributing early

Ability to ship functional frontend MVPs fast

While it's just a starting point, I’d love to iterate on it further in a real-world context.

📬 Let's Connect
I'm open to feedback, iterations, and contributions.
Feel free to reach out via GitHub or LinkedIn if you're building in the healthcare space — I’d love to contribute.

Made with intent by Arjeet Singh

Let me know when you’re ready and I’ll help write a follow-up commit message to add this to your repo right away.