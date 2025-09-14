# Kansas City Doors - Professional Garage Door Services Website

A comprehensive website for a garage door business built with Next.js 14, Material-UI, MongoDB, and EmailJS. Features include service pages, contact forms, past work gallery, and an innovative door visualizer tool.

## Features

- **Modern Design**: Beautiful, responsive design with Material-UI components
- **Homepage**: Hero section with service highlights and company information
- **Services Page**: Detailed service offerings with pricing and features
- **About Page**: Company information, team members, and certifications
- **Contact Page**: Contact form with EmailJS integration for direct email sending
- **Past Work Gallery**: Filterable gallery of completed projects
- **Door Visualizer**: Interactive tool for customers to visualize garage door styles on their homes
- **Mobile Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Proper meta tags and structured content for search engines

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Material-UI (MUI) v5 + Custom Theme
- **Database**: MongoDB with Mongoose ODM
- **Email Service**: EmailJS for contact form submissions
- **Image Handling**: Next.js Image component with Sharp optimization
- **Deployment Ready**: Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB database (local or cloud)
- EmailJS account for contact form functionality

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd kansas-city-doors
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   # MongoDB Configuration
   MONGODB_URI=mongodb://localhost:27017/kansas-city-doors
   # OR for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kansas-city-doors

   # EmailJS Configuration
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id_here
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here

   # Other Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **EmailJS Setup**:
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create a service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your public key, service ID, and template ID
   - Update the `.env.local` file with your credentials

5. **MongoDB Setup**:
   - Install MongoDB locally or use MongoDB Atlas
   - Update the `MONGODB_URI` in `.env.local`
   - The app will automatically create the necessary collections

6. **Run the development server**:
   ```bash
   npm run dev
   ```

7. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form API
│   │   └── placeholder/   # Image placeholder API
│   ├── contact/           # Contact page
│   ├── door-visualizer/   # Door visualizer tool
│   ├── past-work/         # Past work gallery
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Footer.tsx         # Site footer
│   ├── Navigation.tsx     # Main navigation
│   └── ThemeProvider.tsx  # Material-UI theme provider
├── lib/                   # Utility libraries
│   ├── emailjs.ts         # EmailJS configuration
│   ├── mongodb.ts         # MongoDB connection
│   └── theme.ts           # Material-UI theme
└── models/                # MongoDB models
    ├── Contact.ts         # Contact form model
    └── PastWork.ts        # Past work model
```

## Key Features Explained

### Door Visualizer
The door visualizer allows customers to:
1. Upload a photo of their home
2. Select from various garage door styles
3. Preview how the selected door would look on their home
4. Download or share the preview image

*Note: The current implementation shows a mockup interface. For production, you would integrate with an AI service like OpenAI's DALL-E or a custom computer vision solution for actual image composition.*

### Contact Form Integration
- Forms are handled with both EmailJS (for immediate email notifications) and MongoDB (for record keeping)
- Includes form validation and error handling
- Responsive design with proper accessibility

### Past Work Gallery
- Filterable by service category
- Modal view for detailed project information
- Before/after image support
- Mobile-optimized gallery layout

## Customization

### Branding
- Update colors in `src/lib/theme.ts`
- Replace placeholder content with actual business information
- Add real images to replace placeholder images

### Content
- Update business information in all pages
- Modify service offerings in the services page
- Add actual past work projects to the gallery

### Features
- Add user authentication for admin features
- Implement actual image processing for the door visualizer
- Add online booking/scheduling functionality
- Integrate with CRM systems

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Environment Variables

Make sure to set these environment variables in your deployment platform:

- `MONGODB_URI`: Your MongoDB connection string
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: EmailJS public key
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: EmailJS service ID
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: EmailJS template ID
- `NEXT_PUBLIC_SITE_URL`: Your site URL (for production)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For support or questions about this project, please create an issue in the repository or contact the development team.

## License

This project is licensed under the MIT License - see the LICENSE file for details.