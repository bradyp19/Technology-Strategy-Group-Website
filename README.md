# Technology Strategy Group Website

A production-ready static website for Technology Strategy Group (TSG) at the University of Virginia, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Static Export**: Optimized for GitHub Pages deployment
- **Responsive Design**: Mobile-first approach with responsive navigation
- **Accessibility**: WCAG compliant with skip links and semantic HTML
- **Performance**: Optimized images and Lighthouse-ready
- **SEO**: Open Graph, Twitter cards, and structured metadata

## 📱 Pages

- **Home**: Hero section, member outcomes marquee, upcoming events, member spotlight
- **About**: Mission, values, operations, and FAQ
- **Team**: Leadership team with photos and LinkedIn links
- **Projects**: Filterable project showcase with tags
- **Events**: List and calendar views with event management
- **Join Us**: Application form and community links
- **Contact**: Contact information and social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages (static export)
- **Build Tool**: Next.js build system
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Technology-Strategy-Group-Website.git
   cd Technology-Strategy-Group-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files

### Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── team/              # Team page
│   ├── projects/          # Projects page
│   ├── events/            # Events page
│   ├── join/              # Join page
│   └── contact/           # Contact page
├── components/             # Reusable React components
│   ├── Logo.tsx           # TSG logo component
│   ├── LogoMarquee.tsx    # Scrolling company logos
│   ├── Navigation.tsx     # Main navigation
│   ├── MobileNav.tsx      # Mobile navigation drawer
│   ├── Footer.tsx         # Site footer
│   ├── Section.tsx        # Section layout components
│   ├── EventCard.tsx      # Event display card
│   ├── ProjectCard.tsx    # Project display card
│   ├── MemberSpotlight.tsx # Member spotlight component
│   ├── SponsorGrid.tsx    # Sponsor logo grid
│   └── Calendar.tsx       # Interactive event calendar
├── data/                  # JSON data files
│   ├── events.json        # Event information
│   ├── projects.json      # Project showcase data
│   ├── members.json       # Member spotlight data
│   ├── team.json          # Team member data
│   └── sponsors.json      # Sponsor information
├── types/                 # TypeScript type definitions
│   └── index.ts           # Shared types
├── public/                # Static assets
│   ├── logo.svg           # TSG logo
│   ├── logos/companies/   # Company logos for marquee
│   ├── sponsors/          # Sponsor logos
│   ├── team/              # Team member photos
│   └── members/           # Member spotlight photos
├── .github/workflows/     # GitHub Actions
│   └── deploy.yml         # Deployment workflow
└── tailwind.config.ts     # Tailwind CSS configuration
```

## 🚀 Deployment

### GitHub Pages Setup

1. **Enable GitHub Pages**
   - Go to your repository Settings > Pages
   - Set source to "GitHub Actions"

2. **Set Base Path** (if needed)
   - For repository name `Technology-Strategy-Group-Website`:
   ```bash
   export NEXT_PUBLIC_BASE_PATH=/Technology-Strategy-Group-Website
   ```

3. **Deploy**
   - Push to `main` branch
   - GitHub Actions will automatically build and deploy
   - Site will be available at `https://your-username.github.io/Technology-Strategy-Group-Website`

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Export static files**
   ```bash
   npm run export
   ```

3. **Deploy the `out/` folder** to your hosting provider

## 🎨 Customization

### Colors and Branding

The site uses a custom Tailwind color palette based on TSG's navy branding:

```typescript
// tailwind.config.ts
colors: {
  'tsg-navy': '#1e3a8a',
  'tsg-navy-light': '#3b82f6',
  'tsg-navy-dark': '#1e40af',
  'tsg-gray': { /* gray scale */ }
}
```

### Content Management

All content is stored in JSON files under `/data/`:

- **Events**: Add/edit events in `data/events.json`
- **Projects**: Update project showcase in `data/projects.json`
- **Team**: Modify team information in `data/team.json`
- **Members**: Update member spotlights in `data/members.json`
- **Sponsors**: Manage sponsor logos in `data/sponsors.json`

### Adding New Pages

1. Create a new folder in `app/` with `page.tsx`
2. Add navigation link in `components/Navigation.tsx`
3. Update footer links in `components/Footer.tsx`

## 📊 Performance

The site is optimized for:

- **Lighthouse Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Performance Features

- Static export for fast loading
- Optimized images with Next.js Image component
- Reduced motion support for accessibility
- Efficient CSS with Tailwind's purge
- Minimal JavaScript bundle

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Skip to content links
- High contrast ratios
- Screen reader friendly

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or support:

- **Email**: tsg@virginia.edu
- **GitHub Issues**: Create an issue in this repository
- **Documentation**: Check the code comments and component documentation

## 🙏 Acknowledgments

- Built for Technology Strategy Group at UVA
- Powered by Next.js and Tailwind CSS
- Deployed on GitHub Pages
- Icons from Heroicons and custom SVG assets

---

**Technology Strategy Group** - Bridging technology and strategy at the University of Virginia.
