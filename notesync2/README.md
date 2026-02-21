# NoteSync

This is a collaborative workspace application built with [Next.js](https://nextjs.org), [Clerk](https://clerk.com), and [Liveblocks](https://liveblocks.io/).

## Prerequisites & Environment Variables

Since the original Firebase project has now expired and the main project scope is finished, you do not need Firebase credentials to run this version. However, you will need to configure the following services to get things working fully:

1. **Authentication**: Sign up at [Clerk](https://clerk.com) and create an application to get your API keys.
2. **Collaboration/WebSockets**: Sign up at [Liveblocks](https://liveblocks.io/) and create an application to get your API keys.

Create a `.env.local` file in the root directory and add the following keys. 

```env
# --- Clerk Authentication ---
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# --- Liveblocks Collaboration ---
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_public_key
LIVEBLOCKS_PRIVATE_KEY=your_liveblocks_private_key

# --- Backend Configuration ---
NEXT_PUBLIC_BASE_URL=https://your-production-backend-url
NEXT_PUBLIC_BACKEND_URL=http://127.0.0.1:8787 # Local backend URL
```

## Getting Started

First, install the dependencies if you haven't already:

```bash
npm install
```

Then, run the development server:

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
