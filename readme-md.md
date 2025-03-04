# Personal Portfolio Website

A simple, responsive personal portfolio website template that you can customize and host on GitHub Pages.

## Features

- Clean, modern design
- Fully responsive layout
- Mobile-friendly navigation
- Smooth scrolling
- Contact form (frontend only)
- Skills visualization
- Project showcase section
- Social media links

## File Structure

```
personal-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── README.md
└── .gitignore
```

## How to Use

### 1. Clone or Download this Repository

```bash
git clone https://github.com/yourusername/personal-website.git
```

### 2. Customize the Content

Edit the `index.html` file to update:
- Your name and title
- About section content
- Project details
- Contact information
- Social media links

### 3. Customize the Styling

Modify the `css/style.css` file to change:
- Color scheme (update the root variables)
- Font sizes
- Spacing
- Other visual elements

### 4. Add Your Own Images

Replace the icon placeholders with your own images:
- Profile picture in the About section
- Project thumbnails
- Favicon

### 5. Deploy to GitHub Pages

1. Create a GitHub repository
2. Push your code to the repository
3. Go to repository Settings > Pages
4. Select the main branch as the source
5. Save and wait for GitHub to build your site

Your site will be available at `https://yourusername.github.io/repository-name/`

## Hosting on GitHub Pages

GitHub Pages is a free hosting service provided by GitHub. To host your personal website:

1. Create a repository named `yourusername.github.io` (replace "yourusername" with your actual GitHub username)
2. Push your website files to this repository
3. Your website will be live at `https://yourusername.github.io`

For project-specific websites, you can create a repository with any name and enable GitHub Pages in the repository settings. The website will be available at `https://yourusername.github.io/repository-name/`.

## Customization Tips

### Changing Colors

The color scheme is defined using CSS variables at the top of the style.css file:

```css
:root {
    --primary-color: #4a6cf7;
    --secondary-color: #6c757d;
    --dark-color: #333;
    --light-color: #f4f4f4;
    --danger-color: #dc3545;
    --success-color: #28a745;
}
```

Edit these values to change the color scheme throughout the site.

### Adding Custom Fonts

The site uses Google Fonts (Roboto). You can change this by:

1. Choose a new font from [Google Fonts](https://fonts.google.com/)
2. Update the link in the `<head>` section of index.html
3. Update the font-family property in the CSS

### Adding a Blog

To add a blog section:

1. Create a new directory called `blog`
2. Add blog post HTML files inside
3. Create