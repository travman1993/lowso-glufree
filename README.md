# lowso-glufree
recipe for low sodiium and glutan free updated 3 times a week
# Saltwise Kitchen — Low Sodium & Gluten Free Recipe Website

A complete, responsive, mobile-first recipe website focused on low-sodium and gluten-free meals.

## 📁 Files Included

### HTML Files
- **index.html** — Home page with 5 sample recipes (Breakfast, Lunch, Dinner, Snacks, Dessert)
- **about.html** — About page with mission statement and benefits
- **contact.html** — Contact page with a functional contact form
- **privacy.html** — Privacy Policy (legal placeholder content)
- **terms.html** — Terms of Service (legal placeholder content)
- **cookies.html** — Cookie Policy (legal placeholder content)

### CSS & JavaScript
- **styles.css** — Complete responsive stylesheet (mobile-first design)
- **script.js** — Vanilla JavaScript for interactivity

## 🚀 Quick Start

1. **Extract all files** into a single folder
2. **Open index.html** in a web browser (or run a local server)
3. All internal links will work correctly
4. Navigation is fully functional on all pages

### Using a Local Server (Recommended)

For best experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server
```

Then visit: `http://localhost:8000`

## ✨ Features

### Responsive Design
- ✅ Mobile-first design (optimized for phones)
- ✅ Tablet layouts (768px and above)
- ✅ Desktop layouts (1024px and above)
- ✅ Flexible grid system
- ✅ Touch-friendly navigation

### Navigation & Menus
- ✅ Sticky header on all pages
- ✅ Mobile hamburger menu (click ☰ icon)
- ✅ Recipe dropdown menu with smooth scrolling
- ✅ Responsive footer with links to all pages
- ✅ Back-to-top button (appears after scrolling)

### Home Page (index.html)
- 5 complete low-sodium, gluten-free recipes:
  1. **Breakfast:** Green Smoothie Bowl
  2. **Lunch:** Quinoa Power Salad
  3. **Dinner:** Herb-Roasted Salmon with Roasted Vegetables
  4. **Snacks:** Almond Energy Balls
  5. **Dessert:** Gluten-Free Strawberry Cheesecake Bites

Each recipe includes:
- Recipe image placeholder
- Title and description
- Prep/cook times and servings
- Complete ingredients list
- Step-by-step instructions
- Optional notes section
- Recipe tags (Low Sodium, Gluten Free, etc.)
- Ad space placeholder (300x250)

### Accessibility Features
- ✅ Semantic HTML5 elements
- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Color contrast compliance
- ✅ Reduced motion preferences
- ✅ Dark mode support

### Contact Form
- Name, Email, Subject, Message fields
- Client-side validation
- Success message display
- Form reset on submission
- No backend required (logs to console)

## 🎨 Customization Guide

### Adding New Recipes

1. Open `index.html`
2. Find a recipe section (e.g., `id="breakfast"`)
3. Copy the entire `<article class="recipe-card">` block
4. Paste below the existing recipe
5. Update:
   - Image source (SVG placeholders can be replaced with real images)
   - Title, description
   - Ingredients list
   - Instructions
   - Tags and metadata

Example:
```html
<article class="recipe-card">
    <div class="recipe-header">
        <img src="your-image.jpg" alt="Recipe Name" class="recipe-image">
    </div>
    <div class="recipe-content">
        <!-- Update recipe details here -->
    </div>
</article>
```

### Changing Colors

Edit `:root` variables in `styles.css`:

```css
:root {
    --primary-color: #2e8b57;        /* Green */
    --primary-dark: #1e5a3f;         /* Dark green */
    --primary-light: #4cb876;        /* Light green */
    --accent-color: #ff6b6b;         /* Red accents */
    /* ... more colors ... */
}
```

### Adding Real Images

Replace placeholder images in recipe cards:

```html
<!-- Before (placeholder) -->
<img src="data:image/svg+xml,..." alt="Recipe Name" class="recipe-image">

<!-- After (real image) -->
<img src="path/to/your-image.jpg" alt="Recipe Name" class="recipe-image">
```

### Updating Site Title & Branding

1. **Site title:** Change "Saltwise Kitchen" text in all files
2. **Logo:** Update `.logo` in `styles.css`
3. **Colors:** Modify CSS variables in `styles.css`
4. **Footer:** Update copyright and links

## 📱 Responsive Breakpoints

The website uses these breakpoints:

| Breakpoint | Size | Device |
|-----------|------|--------|
| Mobile | < 768px | Phones |
| Tablet | 768px - 1023px | Tablets |
| Desktop | 1024px+ | Desktop computers |

## 🔧 JavaScript Features

### Dropdown Menu
- Smooth scroll to recipe sections
- Mobile-friendly dropdown toggle
- Auto-close when link clicked

### Back-to-Top Button
- Appears after scrolling 300px
- Smooth scroll animation
- Fixed position on right side

### Contact Form
- Form validation
- Success message display
- Auto-hide success message after 5 seconds
- Console logging for development

### Keyboard Navigation
- Press `Esc` to close menus
- Tab through focusable elements
- Enter/Space to activate buttons

## 📝 Customizing Content Pages

### About Page (about.html)
- Update mission statement
- Customize benefits section
- Modify promise list items

### Contact Page (contact.html)
- Form fields are customizable
- Update email address
- Change business hours
- Add social media links

### Legal Pages (privacy.html, terms.html, cookies.html)
- Replace placeholder text with real legal content
- Update company contact information
- Customize policy details

## 🖼️ Recipe Image Placeholders

The website includes SVG placeholders for recipe images. To replace them:

1. Prepare your recipe images (JPG, PNG format recommended)
2. Place images in the same folder as HTML files
3. Update `src` attribute in `<img>` tags

Example file structure:
```
saltwise-kitchen/
├── index.html
├── styles.css
├── script.js
├── images/
│   ├── smoothie-bowl.jpg
│   ├── quinoa-salad.jpg
│   ├── salmon-dinner.jpg
│   ├── energy-balls.jpg
│   └── cheesecake-bites.jpg
```

## 📊 Ad Integration

Each recipe section includes an ad space placeholder:

```html
<div class="ad-slot">
    Ad Space – 300x250<br>
    <!-- AD CODE GOES HERE -->
</div>
```

To add real ads, replace the comment with:
- Google AdSense code
- Custom HTML/JavaScript ads
- Banner ad images
- Any third-party ad script

## 🔍 SEO Optimization

The website includes:
- ✅ Semantic HTML5 structure
- ✅ Meta descriptions
- ✅ Proper heading hierarchy
- ✅ Alt text on images
- ✅ Mobile viewport settings
- ✅ Clean, descriptive URLs

To improve SEO further:
1. Add real recipe images
2. Expand content on pages
3. Add more recipes
4. Create internal links between related recipes
5. Add structured data (schema.org markup)

## 🌙 Dark Mode

The website automatically detects user's dark mode preference:

```css
@media (prefers-color-scheme: dark) {
    /* Dark mode styles applied automatically */
}
```

Users can enable dark mode in their browser/OS settings.

## ♿ Accessibility Testing

The website has been built with accessibility in mind. To test:

1. Use keyboard navigation (Tab, Enter, Escape)
2. Test with screen readers (NVDA, JAWS, VoiceOver)
3. Check color contrast (use WebAIM Contrast Checker)
4. Test on mobile devices
5. Disable JavaScript and verify content is accessible

## 🚀 Performance Tips

1. **Compress images** — Reduce file sizes for faster loading
2. **Minimize CSS/JS** — Use minified versions for production
3. **Enable caching** — Set up browser caching on server
4. **Use CDN** — Serve assets from content delivery network
5. **Lazy load images** — Load images only when visible

## 🐛 Browser Compatibility

The website works on:
- ✅ Chrome/Edge (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact Form Backend

The contact form currently **logs data to browser console**. To make it functional:

### Option 1: Using Formspree
1. Go to [formspree.io](https://formspree.io)
2. Create free account and new form
3. Get form ID
4. Update form action in `contact.html`:

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Using a Backend Service
- Node.js/Express
- Python/Flask
- PHP
- Firebase
- Your own server

### Option 3: Email Services
- SendGrid
- Mailgun
- AWS SES

## 📄 License

This website is provided as-is for educational and commercial use. Customize as needed for your own purposes.

## 💡 Tips for Success

1. **Start with mobile** — The design is mobile-first, so test on phones first
2. **Add real images** — Replace placeholders with actual recipe photos
3. **Expand content** — Add more recipes and information
4. **Test thoroughly** — Check on real devices and browsers
5. **Keep it updated** — Add new recipes regularly
6. **Engage your audience** — Respond to contact form submissions
7. **Monitor analytics** — Track which recipes are most popular

## 🔗 Quick Links

- Home: `index.html`
- About: `about.html`
- Contact: `contact.html`
- Privacy: `privacy.html`
- Terms: `terms.html`
- Cookies: `cookies.html`

## ❓ Common Issues & Solutions

**Issue:** Images not showing
- **Solution:** Check image paths and file names

**Issue:** Dropdown menu not working
- **Solution:** Ensure `script.js` is loaded (check browser console for errors)

**Issue:** Styles not applying
- **Solution:** Make sure `styles.css` is in same folder as HTML files

**Issue:** Mobile menu not appearing
- **Solution:** Check window width — hamburger menu only shows on screens < 768px

**Issue:** Scrolling to recipes doesn't work
- **Solution:** Ensure `script.js` is loaded and no JavaScript errors in console

## 📞 Support

For issues or questions:
1. Check browser console for error messages (F12)
2. Verify all files are in the same directory
3. Try opening with a local server instead of file:// protocol
4. Clear browser cache and reload

---

**Enjoy building your Saltwise Kitchen website!** 🥗🍽️