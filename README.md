# AG Fence Project LLC
## Homepage Screenshot
Here's a look at the homepage of our project:
![Homepage Screenshot](/public/assets/home/homescreenshoot.png)
## Project Description

Tante Project LLC elevates web development for fencing service providers, ensuring an impressive online presence. Utilizing the advanced capabilities of Next.js 14, our platform seamlessly integrates a plethora of modern web technologies to deliver an exceptional user experience. It features a comprehensive service portfolio, straightforward contact forms, authentic customer testimonials, and detailed about sections—all meticulously optimized for superior search engine visibility and user engagement.

## Technology Stack

- **Next.js 14.1.0**: Leverages server-side rendering and static site generation for speedy, scalable applications.
- **React 18**: Used for developing dynamic, stateful user interfaces.
- **MongoDB & Mongoose**: Ensures robust database management and schema flexibility.
- **Nodemailer 6.9.13**: Facilitates reliable email communication.
- **Tailwind CSS 3.3.0**: Provides a utility-first CSS framework for rapid UI development.
- **TypeScript 5**: Enhances code quality with static type definitions.

## Project Structure

```
ag-fence-llc/
├── agfence/                        # Service sections: about, contact, portfolio, reviews, services
│   ├── about/                      # About us page
│   │   └── page.tsx
│   ├── contact/                    # Contact form page
│   │   └── page.tsx
│   ├── portfolio/                  # Portfolio of projects
│   │   └── page.tsx
│   ├── reviews/                    # Customer reviews page
│   │   └── page.tsx
│   └── services/                   # Service detail pages
│       ├── deck/                   # Deck services
│       │   └── page.tsx
│       ├── fence/                  # Fence services
│       │   └── page.tsx
│       ├── remodelation-exterior/  # Exterior remodelations
│       │   └── page.tsx
│       └── remodelation-interior/  # Interior remodelations
│           └── page.tsx
├── api/                            # API routes for dynamic data handling
│   ├── aboutservice/               # About service API
│   │   └── route.ts
│   ├── agfencehome/[id]/           # Home API with dynamic ID support
│   │   └── route.ts
│   ├── email/                      # Email API for contact form submissions
│   │   └── route.ts
│   ├── footerapi/                  # Footer API for site-wide content
│   │   └── route.ts
│   └── navs/                       # Navigation API
│       └── route.js
├── components/                     # Reusable UI components
│   ├── AGFenceFooter.tsx           # Footer component
│   ├── Navbar.tsx                  # Navbar component
│   ├── aboutsection/               # Components for the about section
│   ├── contact/                    # Contact form component
│   └── home/                       # Home page components
│       ├── navbar/                 # Navbar for the home section
│       └── shared/                 # Shared components
├── libs/                           # Libraries and utilities
│   ├── models/                     # Data models
│   ├── mongodb.js                  # MongoDB integration
│   ├── send-email.ts               # Email sending utility
│   └── types.ts                    # TypeScript types and interfaces
├── globals.css                     # Global stylesheet
├── layout.tsx                      # Main layout component
├── favicon.ico                     # Website favicon
└── page.tsx                        # Example page
```

## Getting Started

To run this project locally:

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn`.
3. Set up your `.env.local` with necessary environment variables as per the `.env.example`.
4. Start the development server with `npm run dev` or `yarn dev`.
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Contributing

Contributions are welcome! Please see our contributing guide for more details.

## License

This project is licensed under the MIT License. See the LICENSE.md file for details.
