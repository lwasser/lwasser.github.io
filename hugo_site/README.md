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
# Make sure conda is deactivated if you use conda
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


## Images 

I created a custom shortcode for adding images with captions. Use it like this:

```markdown
{{< figure src="/images/my-image.jpg" 
    alt="Description of image" 
    caption="This is my image caption." >}}
```

The shortcode will render the image with the specified alt text and caption below it. And if there is a webp format of the image available, it will use that for better performance.


## Converting JPG to PNG (if needed)

To convert a jpg to png and webp formats, you can use the following commands:

Use `sips` (built-in on Mac):
```bash
sips -s format png image.jpg --out image.png
```

or to run on a dir
```bash
for f in *.jpg(N) *.jpeg(N); do
  [ -f "$f" ] || continue
  sips -s format png "$f" --out "${f%.*}.png"
done
```

Install `cwebp`:

```bash
brew install webp
```

Convert individual files:
```bash
cwebp -q 85 image.jpg -o image.webp
cwebp -q 85 image.png -o image.webp
```

Batch convert all images in a directory:
```bash
for file in *.jpg *.png; do
  [ -f "$file" ] && cwebp -q 85 "$file" -o "${file%.*}.webp"
done
```

**Note:** The figure shortcode automatically tries to load the `.webp` version first and falls back to the original format if WebP doesn't exist.



## Brand colors
EDB88B - Buff (warm peachy/tan)
71B3B5 - Verdigris (teal/cyan)
42213D - Dark purple
AC87A0 - Mountbatten pink (you considered dropping this)
395E66 - Dark slate gray (you considered dropping this)
