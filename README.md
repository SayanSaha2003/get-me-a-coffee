# Get Me a Coffee

Get Me a Coffee is a full-stack crowdfunding platform that allows creators to create their own profile pages and receive financial support from their fans.

## Features

- Google and GitHub OAuth authentication
- Secure user sessions with Better Auth
- Creator dashboard for managing profile information
- Unique username-based creator pages
- Profile and cover picture support
- Razorpay integration for receiving payments
- Payment records stored in MongoDB
- Responsive UI for desktop and mobile devices

## Tech Stack

- Next.js — Full-stack React framework
- JavaScript — Programming language
- Tailwind CSS — Styling
- Better Auth — Authentication
- MongoDB — Database
- Mongoose — MongoDB ODM
- Razorpay — Payment gateway
- Vercel — Deployment

## Project Structure

- `app/` — Pages, layouts, routes and API endpoints
- `actions/` — Server actions for users and payments
- `components/` — Reusable UI components
- `lib/` — Authentication and database configuration
- `models/` — MongoDB/Mongoose models
- `public/` — Static assets

## Getting Started

Install the dependencies:

npm install

Start the development server:

npm run dev

Open `http://localhost:3000` in your browser.

## Environment Variables

Create a `.env.local` file and configure the required environment variables for:

- MongoDB
- Better Auth
- Google OAuth
- GitHub OAuth
- Razorpay

Keep secret keys and credentials out of the Git repository.

## Authentication

The application uses Better Auth with Google and GitHub OAuth. OAuth callback URLs must be configured separately for local development and the production Vercel domain.

## Deployment

The application is deployed using Vercel.

For production deployment:

1. Add the required environment variables in Vercel.
2. Set `BETTER_AUTH_URL` to the production Vercel domain.
3. Update Google and GitHub OAuth callback URLs to the production domain.
4. Redeploy the application after changing environment variables.

