# Writing Excellence - Professional Tutoring Platform

A modern, responsive tutoring website built with Next.js and integrated with Stripe for seamless payment processing. This project was developed as a freelance solution for a professional writing tutor, showcasing both technical proficiency and real-world application development.

## Project Overview

This platform serves as a comprehensive solution for a professional writing tutor, featuring:

- **Modern Tech Stack**: Built with Next.js 14, React, and TypeScript
- **Secure Payment Processing**: Full integration with Stripe API for handling multiple tutoring packages
- **Automated Communications**: Email notification system using Resend API
- **Responsive Design**: Tailwind CSS implementation with mobile-first approach
- **Performance Optimized**: Leveraging Next.js features for optimal loading and SEO
- **Interactive UI**: Smooth animations and transitions using Framer Motion

## Technical Highlights

### Stripe and Resend Integration
- Implemented secure payment processing with Stripe Checkout
- Created custom session handling and verification
- Managed multiple product tiers with different pricing structures
- Integrated webhook handling for payment confirmations
- Automated email notifications using Resend API for:
  - Purchase confirmations
  - Session booking details
  - Customer communication

### Frontend Architecture
- Built with TypeScript for enhanced type safety and maintainability
- Utilized React hooks for state management
- Implemented responsive design patterns using Tailwind CSS
- Added smooth animations with Framer Motion

### Backend Features
- Serverless API routes with Next.js
- Secure environment variable handling
- Error handling and logging system
- Session verification and management
- Automated email system with customizable templates

## Local Development

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
# Add your Stripe API keys, Resend API key, and other required variables
```

4. Run the development server
```bash
npm run dev
```

## Deployment

The site is deployed on Vercel, taking advantage of:
- Automatic HTTPS
- Edge Functions
- CI/CD pipeline
- Environment variable management

## About the Developer

I'm a recent Computer Science graduate passionate about creating practical, user-friendly web applications. This project demonstrates my ability to:
- Work with modern web technologies
- Implement secure payment processing
- Create responsive, accessible user interfaces
- Deliver professional-grade solutions for real clients
- Integrate multiple third-party APIs (Stripe, Resend)

Feel free to connect with me on [LinkedIn](http://linkedin.com/in/taylor-mckendrick) or check out my other projects on [GitHub](https://github.com/mcdendrick).

## License

This project is licensed under the MIT License - see the LICENSE file for details.
