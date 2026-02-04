# Saskatoon Water Ski Club - Website Redesign

A fresh, modern redesign concept for the SWSC website.

## 📁 File Structure

```
swsc-site/
├── index.html        # Homepage
├── about.html        # About Us, Coaches, Board Members
├── programs.html     # All programs (lessons, competitive, wakeboard, etc.)
├── gallery.html      # Photo/video gallery
├── membership.html   # Membership options and pricing
├── contact.html      # Contact form and info
├── style.css         # All styles
├── images/           # Image folder (you need to add these)
│   ├── logo.jpg
│   ├── hero-fallback.jpg
│   └── (other images)
└── videos/           # Video folder (you need to add these)
    └── hero-video.mp4
```

## 🚀 Getting Started

1. **Add your images** to the `images/` folder:
   - `logo.jpg` - Your SWSC logo
   - `hero-fallback.jpg` - A great action shot for the hero background
   - Photos for gallery, coaches, etc.

2. **Add your video** to the `videos/` folder:
   - `hero-video.mp4` - A short (10-15 second) loop of action footage
   - Keep it under 10MB for fast loading

3. **Update content** in each HTML file:
   - Replace placeholder text with real info
   - Update coach/board member names and bios
   - Add real pricing to membership page
   - Update contact info if needed

4. **Test locally** by opening `index.html` in your browser

## 🎨 Color Palette

The design uses these colors (defined in style.css):

- **Cream**: `#f6f1f1` - Light backgrounds
- **Warm Cream**: `#fcf8dd` - Accent backgrounds  
- **Teal Bright**: `#19a7ce` - Highlights
- **Teal Dark**: `#146c94` - Primary brand color
- **Teal Deep**: `#00809d` - Dark accents
- **Gold**: `#d3af37` - Buttons, CTAs
- **Yellow**: `#ffd700` - Hover states
- **Black**: `#0a0a0a` - Text, dark sections

## 📝 Notes

- **Fonts**: Using Google Fonts (Bebas Neue for headlines, DM Sans for body)
- **Video background**: Falls back to static image if video doesn't load
- **Responsive**: Works on mobile, tablet, and desktop
- **Contact form**: Needs a backend to work (e.g., Formspree, Netlify Forms)

## 🔗 Hosting Options

- **GitHub Pages** (free) - Push to a repo, enable Pages
- **Netlify** (free tier) - Drag and drop deployment
- **Their current Wix** - Would need to rebuild using Wix's tools

## ✨ To Do

- [ ] Add real images
- [ ] Add hero video
- [ ] Update all placeholder text
- [ ] Add real pricing
- [ ] Set up contact form backend
- [ ] Add Google Analytics (optional)
