











<h2 align="Notas Criativas</h2>

# 📌 Overview

This project is a simple note CRUD website called Notas Criativas, built using the Create T3 Stack. The purpose is to create a notes app where users can view, edit, and delete notes. Notas Criativas is a project built with Next.js, Prisma and SQLite for local database storage. The project includes various dependencies such as React, Tailwind CSS, and TypeScript. A bonus feature in the app is the option for dark mode.

## Requirements

To run this project, ensure you have the following installed:

<h2 align="Notas Criativas</h2>

# 📌 Overview

This project is a simple note CRUD website called Notas Criativas, built using the Create T3 Stack. The purpose is to create a notes app where users can view, edit, and delete notes. Notas Criativas is a project built with Next.js, Prisma and SQLite for local database storage. The project includes various dependencies such as React, Tailwind CSS, and TypeScript.

## Requirements

- [Node.js](https://nodejs.org/en/) (version 20)
- [SQLite](https://www.sqlite.org/download.html) (for database storage)

## 🔍Technologies

* [T3 Stack](https://create.t3.gg/) as the base technology stack.

* [Next.js](https://nextjs.org) for building the user interface.
  
* [Tailwind CSS](https://tailwindcss.com) for styling.
  
* [Prisma](https://www.prisma.io) with SQLite for database management.
  
* [tRPC](https://trpc.io) for type-safe remote procedure calls.
  
* [TypeScript](https://www.typescriptlang.org) for type safety.


## 📁 Project Structure

```bash
├── .next
├── .vercel
├── node_modules
├── prisma
│   ├── migrations
│   ├── db.sqlite
│   └── schema.prisma
├── public
│   ├── favicon.ico
├── src
│   ├── app
│   │   ├── api
│   │   │   └── trpc
│   │   │       ├── [trpc]
│   │   │       │   └── route.ts
│   │   ├── components
│   │   │   ├── CreateNote.tsx
│   │   │   ├── DarkModeSwitch.tsx
│   │   │   ├── DeleteNote.tsx
│   │   │   ├── EditNote.tsx
│   │   │   ├── NoteCard.tsx
│   │   │   └── NotesCards.tsx
│   │   ├── pages
│   │   │   └── HomePage.tsx
│   │   ├── types
│   │   │   └── Notes.ts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── assets
│   ├── server
│   │   ├── api
│   │   │   ├── routers
│   │   │   │   └── post.ts
│   │   │   ├── root.ts
│   │   │   └── trpc.ts
│   │   └── db.ts
│   ├── styles
│   └── trpc
│       ├── react.tsx
│       └── server.ts
├── .env
├── .env.example
├── .eslintrc.cjs
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── prettier.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json

```

## 📝 Project Summary

- [**.next**]: Contains Next.js build artifacts and configuration.
- [**node_modules**]: Node.js dependencies installed by npm or yarn.
- [**prisma**]: Prisma configuration and database setup.
- [**prisma\schema.prisma**]: Prisma schema definition file.
- [**src**]: Source code directory for the project.
- [**src\app**]: Application-specific code and components.
- [**src\app\api\trpc\[trpc]**]: tRPC API routes and configurations.
- [**src\app\components**]: Reusable React components.
- [**src\app\pages**]: React pages for different views.
- [**src\app\types**]: TypeScript type definitions.
- [**src\app\layout.tsx**]: Main layout component.
- [**src\app\page.tsx**]: Base page component.
- [**src\assets**]: Project assets like images and fonts.
- [**src\server**]: Server-side code for backend logic.
- [**src\server\api**]: API endpoints and routers.
- [**src\server\api\routers**]: Specific API routers.
- [**src\styles**]: Stylesheets and global CSS.
- [**.env** and **.env.example**]: Environment variable configuration.
- [**tailwind.config.ts**]: Tailwind CSS configuration.


## ⚙️ Setting Up

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ThalitaCesar/notes-app.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Migrate the database:**

   Use Prisma to apply migrations and set up the SQLite database.

   ```bash
   npx prisma migrate dev
   ```
4. **Start the development mode:**
```bash
npm run dev
```

## Screenshots
![Captura de Tela (2)](https://github.com/ThalitaCesar/notes-app/assets/83131771/56b51b07-bc32-4413-b162-3b9d933cd809)
![Captura de Tela (3)](https://github.com/ThalitaCesar/notes-app/assets/83131771/9a37d557-59b0-484b-98a2-a6e5ae5ff204)
![Captura de Tela (4)](https://github.com/ThalitaCesar/notes-app/assets/83131771/a5d9ec7b-d5d2-4250-a1b2-266ad825acfe)
![Captura de Tela (5)](https://github.com/ThalitaCesar/notes-app/assets/83131771/9e3a745a-a9fc-4549-b530-4a6df9275b39)
![Captura de Tela (6)](https://github.com/ThalitaCesar/notes-app/assets/83131771/11fbc351-c594-41c1-8905-f4da774329fe)
![Captura de Tela (7)](https://github.com/ThalitaCesar/notes-app/assets/83131771/42d59f08-6203-4b34-8cc3-46e7f8dc1335)
![Captura de Tela (8)](https://github.com/ThalitaCesar/notes-app/assets/83131771/cfe26145-1b26-4301-97bb-f60f012ac58a)



