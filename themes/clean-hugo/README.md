# Clean Hugo Theme

A clean, modern Hugo theme built with Tailwind CSS v3 that gives you a responsive, mobile-first website that's easy to customize. Whether you're building a personal blog, portfolio, or gallery site, this theme provides a solid foundation that looks great out of the box while letting you personalize every detail.

The theme includes everything you need: a fully functional blog with pagination, an optional gallery system for showcasing your collections, and a modern user interface with smooth transitions. Best of all, every color can be customized through a simple configuration file, and you can use Google Fonts or stick with system fonts for faster loading.

## Getting Started

Before you can use this theme, you need to add it to your Hugo site. Think of this as telling Hugo "hey, use these templates and styles for my website." The easiest way is to add it as a git submodule, which keeps everything organized and makes it easy to update the theme later.

If you're using git submodules (recommended):

```bash
git submodule add https://github.com/yourusername/clean-hugo themes/clean-hugo
```

If you prefer to clone it directly into your themes folder:

```bash
git clone https://github.com/yourusername/clean-hugo themes/clean-hugo
```

Once the theme is in place, you'll need to tell Hugo to use it by updating your configuration file.

## Configuration

The theme is controlled through your `hugo.toml` configuration file. This is where you enable features, customize colors, set up fonts, and configure all the details that make your site unique. The configuration is organized into sections, making it easy to find what you're looking for.

The most important thing is telling Hugo to use this theme. You do that by setting the `theme` parameter at the top level of your config file. Then you can configure various theme options under `[params.theme]`.

Here's a complete example that shows all the main configuration options:

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
    featureCard = "#EBC1D3"
```

### Theme Features

The theme has a couple of optional features you can turn on or off. When `enableGallery` is set to `true`, you'll be able to create gallery pages and showcase collections with filtering. Set `enableFontAwesome` to `true` if you want to use Font Awesome icons throughout your site. Both default to `true` if you don't specify them.

### Customizing Fonts

If you want your site to have a distinctive look, you can choose custom fonts from Google Fonts. The theme uses two font families: one for headings and one for body text. This separation helps create visual hierarchy and makes your content more readable.

Under `[params.theme.fonts]`, you can specify `heading` for all your h1-h6 elements and `body` for paragraph text and other content. The default heading font is "Sora" and the default body font is "Inter", both excellent choices that work well together. If you don't specify fonts, the theme will use system fonts which load instantly and work everywhere.

### Customizing Colors

One of the most powerful features of this theme is how easy it is to change the color scheme. Instead of diving into CSS files, you can customize your entire color palette right in the configuration file. All colors are specified using standard hex codes (like `#71B3B5`), and you can find these codes using any color picker tool.

Here's what each color controls:

The `primary` color is your main brand color - it's used for links, buttons, and other interactive elements. `primaryDark` is a darker version used for hero sections and footer backgrounds, while `primaryLight` is a lighter tint perfect for card backgrounds. The `secondary` color provides a warm accent, and `accent` and `accentLight` give you additional options for highlighting specific elements.

For text and backgrounds, you have `neutral` for gray tones, and specific colors like `blogHighlight` for the blog section background, `link` for hyperlink color, `footerBg` for the footer, and `featureCard` for feature section card backgrounds. Don't worry if you don't customize all of them - the theme has sensible defaults for everything.

### Social Media Links

Want to connect your website visitors to your social media profiles? You can add links to all your accounts in the footer. Simply add a `[params.social]` section to your config file with URLs for any platforms you use.

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

Only include the platforms you actually use - any missing ones simply won't appear in the footer. The theme supports GitHub, LinkedIn, Mastodon, Bluesky, ORCID, RSS feeds, and email links.

### Analytics

If you want to track how many people visit your site, you can add analytics support. The theme supports both Google Analytics and Plausible Analytics (a privacy-friendly alternative). Just add an `[params.analytics]` section to your config:

```toml
[params.analytics]
  google = "G-XXXXXXXXXX"  # Your Google Analytics tracking ID
  plausible = "yourdomain.com"  # Your Plausible domain
```

You can use one or both - just include the ones you want. The tracking code will be automatically added to all pages of your site.

## Creating Content

Hugo uses a concept called "content types" - different kinds of pages that get displayed differently. This theme supports blog posts and gallery items (if you've enabled the gallery feature). Each type of content has its own folder and follows specific patterns.

### Writing Blog Posts

Blog posts are the most common type of content. You create them by adding Markdown files to the `content/blog/` directory. Each post starts with "front matter" - that's the YAML or TOML section at the top that describes your post. This includes things like the title, publication date, categories, tags, and an optional featured image.

Here's what a typical blog post looks like:

```markdown
---
title: "My Blog Post"
date: 2025-01-01
categories: ["tech"]
tags: ["hugo", "web"]
image: "/images/post.jpg"
---

Your post content goes here, written in Markdown...
```

The front matter tells Hugo everything it needs to know about your post. The `title` appears as the page heading and in lists. The `date` controls when the post was published and how it's sorted. `categories` and `tags` help organize your content, and the `image` can be used as a thumbnail in blog listings.

After the front matter, you write your actual post content using standard Markdown. You can use headings, lists, links, images, code blocks, and all the usual Markdown features.

### Creating Gallery Items

If you've enabled the gallery feature, you can create gallery pages that showcase collections of items - perfect for portfolios, photo galleries, or any kind of categorized collection. Gallery items work similarly to blog posts but have some extra front matter fields for organizing your collection.

Create gallery items in the `content/gallery/` directory with this structure:

```markdown
---
title: "Item Name"
groups: ["category1", "category2"]
hero:
  title: "Item Title"
  subtitle: "Description"
  image: "image.jpg"
---

Additional details about this item...
```

The `groups` field lets you categorize items so visitors can filter by category. The `hero` section controls what appears at the top of the gallery item page - you can set a custom title, subtitle, and image. If you don't provide hero fields, it will use the main `title` and look for images in the page's resources.

You can use Hugo's built-in archetypes to quickly create new gallery items with all the right front matter already filled in. Just run:

```bash
hugo new gallery/item-name/index.md
```

This creates a new gallery item with a template you can fill in, saving you from typing all the front matter structure manually.

## Using Data Files

Sometimes you have content that you want to reuse in multiple places or that's more structured than a regular page. That's where Hugo's data files come in handy. They let you store content in YAML, TOML, or JSON files and reference it from anywhere in your site.

### Feature Section

The feature section is a flexible component that displays structured content in a card format. You can define the content directly in your page's front matter, making it easy to customize for each page while maintaining consistent styling.

To use the feature section, add a `feature_section` parameter to your page's front matter:

```yaml
feature_section:
  title: "What I've Built"
  subtitle: "Your subtitle text here"
  sections:
    - title: "Section Title"
      lead: "Optional lead paragraph"
      items:
        - bold: "Bold Text:"
          text: " Rest of the text"
        - text: "Plain text item"
        - text: "Linked Item"
          url: "https://example.com"
      subsections:
        - title: "Subsection Title"
          content: "Subsection content"
```

The structure is straightforward: you have a title and subtitle at the top, then sections that contain items. Items can be plain text, have bold prefixes, or be links with URLs. You can also nest subsections within sections for more complex layouts.

Once you have your front matter set up, you can display the feature section anywhere using the shortcode:

```markdown
{{< feature-section >}}
```

You can also include it in layout templates using:

```hugo
{{ partial "feature-section.html" . }}
```

The component automatically handles all the formatting - plain text items, items with bold prefixes, items with URLs (which become clickable links), and subsections within sections.

## Page Layouts

Hugo uses layouts to control how different types of pages are displayed. This theme comes with several pre-built layouts that handle the most common use cases. You don't need to understand how they work to use them - just know that different content types automatically use the right layout.

The `splash` layout is designed for homepages. It includes a hero section at the top, and renders your page content (which can include cards, feature sections, and other shortcodes), followed by a section showing recent blog posts. It's perfect for creating an engaging landing page.

Blog posts use the `blog/single` layout, which provides a clean reading experience with proper typography and spacing. The `blog/list` layout shows all your blog posts in an organized, paginated list.

If you're using the gallery feature, `gallery/single` displays individual gallery items with their images and descriptions, while `gallery/list` shows all items with filtering capabilities.

You can specify which layout to use by setting the `layout` parameter in your content's front matter, though Hugo is usually smart enough to pick the right one automatically based on where your content is located.

## Shortcodes

Shortcodes are Hugo's way of letting you add special content types directly in your Markdown. Instead of writing HTML, you use simple shortcode syntax and Hugo handles the rest. The theme includes several useful shortcodes that make content creation easier.

### Adding Images with Captions

When you want to include an image with a caption, use the figure shortcode. It handles all the proper HTML structure and even includes responsive image features:

```markdown
{{< figure src="/images/image.jpg" alt="Description" caption="Caption text" >}}
```

Just provide the image path, an alt description for accessibility, and an optional caption. The theme takes care of styling it nicely and making sure it looks good on all screen sizes.

### Embedding YouTube Videos

Instead of copying and pasting embed code from YouTube, you can use the youtube shortcode. Just grab the video ID from the YouTube URL and use it like this:

```markdown
{{< youtube id="VIDEO_ID" >}}
```

The shortcode automatically creates a responsive embed that works on all devices. The video ID is the string of characters that appears in the YouTube URL after `v=`. For example, if your YouTube URL is `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the video ID is `dQw4w9WgXcQ`.

### Displaying Feature Sections

If you've set up a feature section in your page's front matter (described above), you can display it anywhere in your content using:

```markdown
{{< feature-section >}}
```

This is especially useful if you want to include your achievements or accomplishments section in a blog post or on a dedicated about page. Each page can have its own customized feature section content.

## Development

If you want to modify the theme or develop your site locally, you'll need to work with the CSS. This theme uses Tailwind CSS, which is a utility-first CSS framework that makes it easy to build custom designs.

To get started with development, first install the Node.js dependencies. This gives you access to the build tools needed to process the CSS:

```bash
npm install
```

Once dependencies are installed, you can run the development server. This starts Hugo with hot-reloading, so any changes you make to content or templates will automatically refresh in your browser:

```bash
npm run dev
```

When you're ready to create the final version of your site, build it for production. This generates optimized, minified CSS and creates your static site in the `public/` directory:

```bash
npm run build
```

The theme's CSS is organized into modular SCSS files that are compiled together. Each component (navigation, hero, cards, gallery, etc.) has its own file, making it easy to find and modify styles. If you want to customize beyond what's available in the config file, you can edit these SCSS files directly.

## License

This theme is licensed under the BSD 3-Clause License, which means you're free to use it, modify it, and distribute it, even for commercial purposes. The only requirements are that you include the original license notice and don't use the author's name to promote your modified version. See the [LICENSE](LICENSE) file for the complete terms.
