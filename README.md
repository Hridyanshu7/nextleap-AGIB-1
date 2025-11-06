# TheCubeFactory Login Page

A modern, responsive login page with Google Authentication integration.

## Features

- Beautiful two-column layout with login form and illustration
- Email/password authentication
- Google OAuth integration
- Remember me functionality
- Forgot password link
- Sign up link
- Responsive design

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up Google OAuth credentials:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable Google+ API
   - Go to "Credentials" and create OAuth 2.0 Client ID
   - Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

3. Create a `.env.local` file in the root directory:
```env
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret_here
```

   You can generate a random secret using:
   ```bash
   openssl rand -base64 32
   ```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts      # NextAuth configuration
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Login page
│   └── providers.tsx             # Session provider
├── components/
│   ├── LoginForm.tsx             # Login form component
│   └── IllustrationSection.tsx   # Right column illustration
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- NextAuth.js for authentication
- Google OAuth 2.0

## Customization

You can customize colors, fonts, and other styling by modifying:
- `tailwind.config.js` for theme colors
- `app/globals.css` for global styles
- Component files for specific styling

