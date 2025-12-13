# Clean Hugo Theme

A clean, modern Hugo theme with configurable colors and optional gallery feature. Built with Tailwind CSS v3 for a responsive, mobile-first design that's easy to customize.

## Features

The theme includes full blog functionality with pagination, an optional gallery feature for showcasing collections, and a modern UI with smooth transitions. All colors are configurable via `hugo.toml`, and you can use Google Fonts or system fonts. Built-in shortcodes for figures and YouTube videos make content creation straightforward.

## Installation

Add the theme to your Hugo site as a submodule:

```bash
git submodule add https://github.com/yourusername/clean-hugo themes/clean-hugo
```

Or clone it directly:

```bash
git clone https://github.com/yourusername/clean-hugo themes/clean-hugo
```

## Configuration

### Basic Setup

Configure your `hugo.toml` to use the theme:

```toml
theme = 'clean-hugo'

[params.theme]
  enableGallery = true
  enableFontAwesome = true
  
  [params.theme.fonts]
    heading = "Sora"
    body = "Inter"
  
  [params.theme.colors]
    primary = "#71B3B5"
    primaryDark = "#2E6060"
    primaryLight = "#D6E3E3"
    secondary = "#EDB88B"
    accent = "#42213D"
    accentLight = "#AC87A0"
    neutral = "#395E66"
    blogHighlight = "#111827"
    link = "#2DD4BF"
    footerBg = "#115E59"
    resumeCard = "#EBC1D3"
```

### Theme Parameters

* `enableGallery` (boolean) - Enable or disable the gallery feature
* `enableFontAwesome` (boolean) - Enable or disable Font Awesome icons

### Fonts

Configure Google Fonts via `params.theme.fonts`:
* `heading` - Font for headings (default: "Sora")
* `body` - Font for body text (default: "Inter")

### Colors

All colors are configurable via `params.theme.colors`:
* `primary` - Primary brand color (used for links, buttons)
* `primaryDark` - Darker primary (used for hero/footer backgrounds)
* `primaryLight` - Light primary (used for card backgrounds)
* `secondary` - Secondary accent color
* `accent` - Accent color
* `accentLight` - Light accent (used for feature cards)
* `neutral` - Neutral gray
* `blogHighlight` - Blog highlight section background
* `link` - Link color
* `footerBg` - Footer background color
* `resumeCard` - Resume card background color

### Social Links

Configure social links in `params.social`:

```toml
[params.social]
  github = "https://github.com/username"
  linkedin = "https://linkedin.com/in/username"
  mastodon = "https://fosstodon.org/@username"
  bluesky = "https://bsky.app/profile/username"
  orcid = "https://orcid.org/0000-0000-0000-0000"
  rss = "/index.xml"
  email = "mailto:email@example.com"
```

### Analytics

Optional analytics support:

```toml
[params.analytics]
  google = "G-XXXXXXXXXX"  # Google Analytics ID
  plausible = "yourdomain.com"  # Plausible domain
```

## Content Types

### Blog Posts

Create blog posts in `content/blog/`:

```markdown
---
title: "My Blog Post"
date: 2025-01-01
categories: ["tech"]
tags: ["hugo", "web"]
image: "/images/post.jpg"
---
```

### Gallery Items

If gallery is enabled, create items in `content/gallery/`:

```markdown
---
title: "Item Name"
groups: ["category1", "category2"]
hero:
  title: "Item Title"
  subtitle: "Description"
  image: "image.jpg"
---
```

Use the archetype to create new gallery items:

```bash
hugo new gallery/item-name/index.md
```

## Layouts

The theme includes several layout options:

* `splash` - Homepage layout with hero, highlight cards, feature cards, and blog list
* `blog/list` - Blog listing page
* `blog/single` - Individual blog post
* `gallery/list` - Gallery listing with filters
* `gallery/single` - Individual gallery item

## Shortcodes

### Figure

Add images with captions:

```markdown
{{< figure src="/images/image.jpg" alt="Description" caption="Caption text" >}}
```

### YouTube

Embed YouTube videos:

```markdown
{{< youtube id="VIDEO_ID" >}}
```

## Development

This theme uses Tailwind CSS. To develop locally:

1. Install dependencies:
```bash
npm install
```

2. Watch CSS and serve site:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## License

This theme is licensed under the BSD 3-Clause License. See the [LICENSE](LICENSE) file for details.
