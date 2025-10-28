# Welcome to My Website!  

[![DOI](https://zenodo.org/badge/87748882.svg)](https://zenodo.org/badge/latestdoi/87748882)

This is my personal site built with Hugo, styled with Tailwind CSS v3, and using Google Fonts for typography. I deploy it via GitHub Pages.

## Tech Stack

- Hugo Extended (v0.118.2+) - Static site generator
- Tailwind CSS v3 - Utility-first CSS framework
- Google Fonts - Web typography
- Node.js (v22+) - For build tooling
- GitHub Pages - Hosting and deployment

## Prerequisites

You'll need:
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
# If you use conda, make sure to deactivate it first
conda deactivate

# Start the development server
npm run dev
```

Your site will be available at `http://localhost:1313`

### Build for Production

```bash
npm run build
```

The site's output will be in the `public/` directory.

## Project Structure

```console
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

### Writing a Blog Post

Create a new post in `content/blog/my-post.md` with frontmatter like this:

```yaml
---
---
title: "My Post Title"
date: 2025-10-26
excerpt: "A brief description of your post."
image: /images/my-post/featured-image.png
categories:
  - category-name
tags:
  - tag-one
  - tag-two
---

Your content here...
```

## Images

I created a custom shortcode for adding images with captions. Use it like this:

```markdown
{{< figure src="/images/my-image.jpg" 
    alt="Description of image" 
    caption="This is my image caption." >}}
```

The shortcode will render the image with the specified alt text and caption below it. If there's a WebP format of the image available, it'll use that for better performance and automatically fall back to the original format if needed.

### Converting Images

#### JPG/JPEG to PNG

I use `sips` (built-in on Mac) to convert images:

```bash
# Single file
sips -s format png image.jpg --out image.png

# Batch convert a directory
for f in *.jpg(N) *.jpeg(N); do
  [ -f "$f" ] || continue
  sips -s format png "$f" --out "${f%.*}.png"
done
```

#### Converting to WebP

First, install `cwebp`:

```bash
brew install webp
```

Then convert your images:

```bash
# Single file
cwebp -q 85 image.jpg -o image.webp
cwebp -q 85 image.png -o image.webp

# Batch convert all images in a directory
for file in *.jpg *.png; do
  [ -f "$file" ] && cwebp -q 85 "$file" -o "${file%.*}.webp"
done
```

## Customizing Styles

To update the CSS, edit the `assets/css/main.scss` file. You can add custom SCSS or additional Tailwind utilities there.

### Brand Colors

Here are the brand colors I use:

- **#EDB88B** - Buff (warm peachy/tan)
- **#71B3B5** - Verdigris (teal/cyan)
- **#42213D** - Dark purple
- **#AC87A0** - Mountbatten pink
- **#395E66** - Dark slate gray

## Troubleshooting

- **"npx not found" error**: Make sure you've deactivated conda and installed postcss-cli globally
- **Styles not loading**: Check that `assets/css/main.scss` exists
- **Hugo not finding templates**: Verify your files are in the correct `layouts/` subdirectories
