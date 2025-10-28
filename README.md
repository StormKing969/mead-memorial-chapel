# Mead Memorial Chapel Website

A full-stack React Router application for the Mead Memorial Chapel website. The app uses server-side rendering (SSR) with Vite, TypeScript, and Tailwind CSS. It includes public pages (Home, About), a News powered by Firebase, and a Lawsuit section for posting content and document previews.

## Overview

- Framework: React 19 + React Router v7 (SSR)
- Build tool: Vite 6 (with HMR in development)
- Language: TypeScript 5
- Styling: Tailwind CSS v4
- Data: Firebase (Auth + Firestore)
- Deployment options: Node server (react-router-serve) and Docker image

Key app areas:
- News: List, details, and creation of posts using Firebase.
- Lawsuit: Overview and documents section, with file preview support.

## Requirements

- Node.js 20.x (Dockerfile base image uses node:20-alpine)
- npm 10+
- A Firebase project and credentials (see Environment Variables)
- Optional: Docker 24+

## Setup

1) Install dependencies:

```bash
npm ci
# or: npm install
```

2) Configure environment variables (see Environment Variables below). Create a .env file in the project root with your Firebase values, for example:

```env
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_project.appspot.com
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
VITE_MEASUREMENT_ID=G-XXXXXXXXXX
```

Note: Vite exposes variables prefixed with VITE_. Do not commit secrets. TODO: add a .env.example file.

## Running

- Development (SSR + HMR):

```bash
npm run dev
```

Open http://localhost:5173

- Type checks and route type generation:

```bash
npm run typecheck
```

- Production build:

```bash
npm run build
```

- Start production server (after build):

```bash
npm run start
```

By default, the server listens on port 3000 (react-router-serve). Open http://localhost:3000

## Scripts

Defined in package.json:

- dev: react-router dev
- build: react-router build
- start: react-router-serve ./build/server/index.js
- typecheck: react-router typegen && tsc

## Environment Variables

Used in app/lib/firebase.ts (Vite format):

- VITE_API_KEY
- VITE_AUTH_DOMAIN
- VITE_PROJECT_ID
- VITE_STORAGE_BUCKET
- VITE_MESSAGING_SENDER_ID
- VITE_APP_ID
- VITE_MEASUREMENT_ID

These are the standard Firebase Web SDK config values. Refer to your Firebase console. Ensure these are present in your .env for local dev, and configured in your hosting environment for production.

## Project Structure

Top-level:
- app/ – application code
  - routes.ts – central route config (file-based routes)
  - routes/ – route modules, including:
    - routes/home.tsx (index)
    - routes/about.tsx
    - routes/auth.tsx
    - routes/news.tsx
    - routes/news-post.tsx (dynamic route: /blog/:id)
    - routes/create-news-post.tsx
    - routes/lawsuit.tsx
    - routes/documents.tsx
  - components/ – shared UI components (e.g., Navbar, FilePreview, PreviewPost)
  - sections/ – page sections, including lawsuit content and documents
  - lib/firebase.ts – Firebase initialization and helpers (Auth/Firestore)
- constants/ – static data, including lawsuit documents and content
- public/ – static assets
- types/ – TypeScript types (e.g., Post)
- react-router.config.ts – SSR configuration (ssr: true)
- vite.config.ts – Vite and plugin configuration
- tsconfig.json – TypeScript configuration
- Dockerfile – multi-stage build and runtime image
- package.json – scripts and dependencies

## Entry Points

- Development server: launched by npm run dev using React Router’s dev server (with Vite under the hood).
- Production server: build outputs to build/server/index.js and build/client. Start with npm run start (react-router-serve ./build/server/index.js).

## Docker

Build and run the containerized app:

```bash
docker build -t mead-memorial-chapel .
docker run --env-file .env -p 3000:3000 mead-memorial-chapel
```

Notes:
- Ensure required env vars are provided at runtime (use --env-file or -e flags).
- Image is based on node:20-alpine. Multi-stage Dockerfile installs prod deps and copies the build output.

## Tests

No test framework or scripts are currently configured in package.json.
- TODO: add unit/integration tests (e.g., Vitest, Jest) and document how to run them.

## Deployment

- DIY Node hosting: Build with npm run build and start with npm run start. Serve behind a reverse proxy as needed.
- Netlify: The project includes @netlify/vite-plugin-react-router. TODO: document Netlify deployment steps if Netlify is used.
- Docker-friendly platforms: Works on services like AWS ECS, Cloud Run, Azure Container Apps, Fly.io, Railway, etc.

## License

No license file detected in the repository.
- TODO: add a LICENSE file (e.g., MIT) and update the package.json "license" field.

## References

- React Router Docs: https://reactrouter.com/
- Vite Docs: https://vitejs.dev/
- Tailwind CSS: https://tailwindcss.com/
- Firebase Web SDK: https://firebase.google.com/docs/web