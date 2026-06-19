# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with professional aesthetics
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Accessible**: Built with accessibility best practices in mind
- **SEO Optimized**: Proper meta tags, semantic HTML, and optimization
- **Performance Focused**: Fast loading times and optimized for Core Web Vitals
- **Interactive Components**: Engaging hover effects and micro-interactions
- **Contact Form**: Working contact form with validation
- **Dark/Light Theme Ready**: Easy to extend with theme switching

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Work.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: Blue (`#007acc`) - Main brand color
- **Secondary**: Red (`#ff6b6b`) - Accent color
- **Neutral**: Grayscale palette from white to dark gray
- **Success/Error**: Standard green and red for feedback

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (700)
- **Body Text**: Regular weight (400)
- **Line Height**: 1.6 for body text, 1.2 for headings

### Spacing
- **System**: 4px base unit with consistent scale
- **Responsive**: Mobile-first approach with breakpoints

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

## ✨ Customization

### Personal Information
Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Name and title
   - Value proposition text

2. **About Section** (`src/components/About.tsx`):
   - Personal story
   - Skills and expertise
   - Work experience

3. **Work Section** (`src/components/Work.tsx`):
   - Project information
   - Categories and filters
   - Project images and links

4. **Contact Section** (`src/components/Contact.tsx`):
   - Contact information
   - Social media links

5. **Metadata** (`src/app/layout.tsx`):
   - SEO information
   - Open Graph tags

### Color Scheme
Modify the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your primary color palette
  },
  secondary: {
    // Your secondary color palette
  }
}
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Update navigation in `src/components/Navigation.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)

### Other Platforms
1. Run `npm run build` to create a production build
2. Deploy the generated files to your hosting platform

## 📊 Performance Optimization

- **Image Optimization**: Use Next.js Image component for automatic optimization
- **Code Splitting**: Automatic with Next.js App Router
- **Font Optimization**: Google Fonts with `font-display: swap`
- **Bundle Analysis**: Run `npm run analyze` to check bundle size

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for beautiful animations
- [Lucide](https://lucide.dev/) for the icon library

## 📞 Support

If you need help or have questions, feel free to:
- Open an issue on GitHub
- Contact me at [your-email@example.com]
- Connect with me on [LinkedIn](https://linkedin.com/in/yourprofile)

---

**Happy coding! 🎉**
