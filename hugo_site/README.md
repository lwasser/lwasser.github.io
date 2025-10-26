# Hugo + Tailwind CSS Site

This is a minimal Hugo site with Tailwind CSS v3 for styling.

## Prerequisites

- Hugo Extended (v0.118.2 or later)
- Node.js (v22 or later)

## Getting Started

### First Time Setup

```bash
# Install dependencies
npm install

# Install postcss-cli globally (required for Hugo)
npm install -g postcss-cli
```

### Development

```bash
# Make sure conda is deactivated!!!!
conda deactivate

# Start the development server
npm run dev
```

Site will be available at `http://localhost:1313`

### Build for Production

```bash
npm run build
```

Output will be in the `public/` directory.

## Project Structure
```
.
├── assets/css/main.scss       # Main stylesheet (Tailwind)
├── content/                    # All content (markdown)
│   ├── _index.md              # Home page
│   └── blog/                  # Blog posts
├── layouts/
│   ├── _default/
│   │   ├── baseof.html        # Base template
│   │   └── single.html        # Blog post template
│   └── index.html             # Home page template
├── hugo.toml                  # Hugo config
├── tailwind.config.js         # Tailwind config
└── postcss.config.js          # PostCSS config
```

## Creating Content

### New Blog Post
```bash
hugo new blog/my-post.md
```

Edit the file in `content/blog/my-post.md` with frontmatter:
```yaml
---
title: "My Post Title"
date: 2025-10-26
---

Your content here...
```

## Customizing Styles

Edit `assets/css/main.scss` to add custom SCSS or Tailwind utilities.

## Troubleshooting

- **"npx not found" error**: Make sure you deactivated conda and installed postcss-cli globally
- **Styles not loading**: Check that `assets/css/main.scss` exists
- **Hugo not finding templates**: Verify files are in correct `layouts/` subdirectories
