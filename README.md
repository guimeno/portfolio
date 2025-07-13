# My Modern Development Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. This project serves as both a showcase of development capabilities and a template for client projects.

## 🚀 Features

- ⚡️ Blazing fast performance with Next.js
- 🎨 Styled with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 🌓 Dark mode support
- 📱 Fully responsive design
- 📈 SEO optimized
- 📝 Blog-ready with MDX
- 📧 Contact form with EmailJS integration

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide Icons](https://lucide.dev/) - Beautiful icons
- [EmailJS](https://www.emailjs.com/) - Contact form functionality

## 🚀 Getting Started

### Prerequisites

- Node.js 14.6.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dev-portfolio.git
   cd dev-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Customization

1. Update the site metadata in `src/app/layout.tsx`
2. Modify the color scheme in `tailwind.config.js`
3. Update the content in the respective component files
4. Replace the placeholder images in the `public` directory

## 📄 Pages

- `/` - Homepage with featured work and about section
- `/work` - Portfolio projects showcase
- `/blog` - Blog posts (if enabled)
- `/contact` - Contact form
- `/how-its-made` - Technical case study of this site

## 🚀 Deployment

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-docs) from the creators of Next.js.

### Netlify

You can also deploy to Netlify using the [Netlify CLI](https://docs.netlify.com/cli/get-started/):

```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
