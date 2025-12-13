# Clean Hugo Theme

A clean, modern Hugo theme with configurable colors and optional gallery feature. Built with Tailwind CSS v3.

## Features

- **Blog** - Full blog functionality with pagination
- **Gallery** - Optional gallery feature for showcasing collections (generalized from plant gallery)
- **Responsive** - Mobile-first design
- **Customizable Colors** - Configure theme colors via `hugo.toml`
- **Configurable Fonts** - Use Google Fonts or system fonts
- **Shortcodes** - Built-in figure and YouTube shortcodes
- **Modern UI** - Clean, minimal design with smooth transitions

## Installation

1. Add the theme to your Hugo site:

```bash
git submodule add https://github.com/yourusername/clean-hugo themes/clean-hugo
```

Or clone directly:

```bash
git clone https://github.com/yourusername/clean-hugo themes/clean-hugo
```

2. Configure your `hugo.toml`:

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
```

## Configuration

### Theme Parameters

- `enableGallery` (boolean) - Enable/disable gallery feature
- `enableFontAwesome` (boolean) - Enable/disable Font Awesome icons

### Fonts

Configure Google Fonts via `params.theme.fonts`:
- `heading` - Font for headings (default: "Sora")
- `body` - Font for body text (default: "Inter")

### Colors

All colors are configurable via `params.theme.colors`:
- `primary` - Primary brand color (used for links, buttons)
- `primaryDark` - Darker primary (used for hero/footer backgrounds)
- `primaryLight` - Light primary (used for card backgrounds)
- `secondary` - Secondary accent color
- `accent` - Accent color
- `accentLight` - Light accent (used for feature cards)
- `neutral` - Neutral gray

### Social Links

Configure social links in `params.social`:

```toml
[params.social]
  github = "https://github.com/username"
  linkedin = "https://linkedin.com/in/username"
  # ... etc
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

Use the archetype:

```bash
hugo new gallery/item-name/index.md
```

## Layouts

- `splash` - Homepage layout with hero, highlight cards, feature cards, and blog list
- `blog/list` - Blog listing page
- `blog/single` - Individual blog post
- `gallery/list` - Gallery listing with filters
- `gallery/single` - Individual gallery item

## Shortcodes

### Figure

```markdown
{{< figure src="/images/image.jpg" alt="Description" caption="Caption text" >}}
```

### YouTube

```markdown
{{< youtube id="VIDEO_ID" >}}
```

## Development

This theme uses Tailwind CSS. To develop:

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

MIT

