# Welcome to My Website!

[![DOI](https://zenodo.org/badge/87748882.svg)](https://zenodo.org/badge/latestdoi/87748882)

This is my personal site built with Hugo, styled with Tailwind CSS v3, and using Google Fonts for typography. I deploy it via GitHub Pages.

## Tech Stack

The site is built with Hugo Extended (v0.118.2+), styled with Tailwind CSS v3, and uses Google Fonts for typography. Node.js (v22+) handles the build tooling, and everything is deployed to GitHub Pages.

## Getting Started

### Prerequisites

You'll need Hugo Extended (v0.118.2 or later) and Node.js (v22 or later) installed on your system.

### First Time Setup

Install the project dependencies and postcss-cli globally:

```bash
npm install
npm install -g postcss-cli
```

### Development

Start the development server with:

```bash
# If you use conda, make sure to deactivate it first
conda deactivate

# Start the development server
npm run dev
```

Your site will be available at `http://localhost:1313`

### Building for Production

Build the site for production:

```bash
npm run build
```

The site's output will be in the `public/` directory.

## Project Structure

The site follows a standard Hugo structure. Content lives in `content/`, layouts in `layouts/`, and styles in `assets/css/main.scss`. The main configuration is in `hugo.toml`, with Tailwind and PostCSS configs in their respective files.

## Creating Content

### Writing a Blog Post

Create a new post in `content/blog/my-post.md` with frontmatter like this:

```yaml
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

## Working with Images

I created a custom shortcode for adding images with captions. Use it like this:

```markdown
{{< figure src="/images/my-image.jpg" 
    alt="Description of image" 
    caption="This is my image caption." >}}
```

The shortcode automatically uses WebP format when available for better performance, falling back to the original format if needed.

### Image Formats

Photos should generally use JPG and WebP formats to optimize performance and quality. Other graphics and illustrations can be PNG.

### Image Compression

Install ImageMagick first:

```bash
brew install imagemagick
```

Then compress images:

```bash
find content/plants -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -exec mogrify -quality 85 -resize '1400x1400>' {} \;
```

### Converting Images

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

### Converting to WebP

First, install the WebP tools:

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

The site uses these brand colors:

* **#EDB88B** - Buff (warm peachy/tan)
* **#71B3B5** - Verdigris (teal/cyan)
* **#42213D** - Dark purple
* **#AC87A0** - Mountbatten pink
* **#395E66** - Dark slate gray

## Plant Gallery

The plant gallery section showcases a collection of plant profiles. Each plant group has its own markdown file under `content/plants/` with details like name, species, difficulty, and images.

To create a new plant page, use the Hugo archetype:

```bash
hugo new plants/plant-name/index.md
```

For example, to add a Hoya Lacunosa plant profile:

```bash
hugo new plants/hoya-lacunosa/index.md
```

The plant gallery layout uses a responsive grid to display plant cards with filter buttons managed by front-end JavaScript. Individual plant pages use a Tailwind-driven masonry layout. The popup image viewer is powered by [GLightbox](https://glightbox.mcstudios.com.mx/), which is essentially plug and play for easy maintenance.

### Styling and Partials

The plant page layout and styling can be found in `layouts/plants/list.html` with individual pages in `layouts/plants/single.html`.

### Image Workflow

Backup all images in a directory to another location using rsync:

```bash
rsync -av --include='*/' --include='*.jpg' --exclude='*' . ../../../_law_tests/plant-photos
```

Then compress the images using ImageMagick:

```bash
mogrify -auto-orient -strip -resize '1600x1600>' -quality 82 *.jpg
```

Note: Images when shot are saved with EXIF metadata tags that indicate orientation. Use `-auto-orient` to fix this:

```bash
mogrify -auto-orient *.jpg
```

## Troubleshooting

If you encounter a "npx not found" error, make sure you've deactivated conda and installed postcss-cli globally. If styles aren't loading, check that `assets/css/main.scss` exists. If Hugo isn't finding templates, verify your files are in the correct `layouts/` subdirectories.

## License

This project is licensed under the BSD 3-Clause License. See the [LICENSE](LICENSE) file for details.
