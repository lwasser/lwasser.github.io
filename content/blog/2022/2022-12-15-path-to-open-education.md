---
title: "How I Became an Open Education Advocate for Earth and Environmental Data Science"
date: 2022-12-15
excerpt: "Open education resources aren't new - I've been building them for 20 years. Here's what I learned about creating sustainable, community-owned learning materials before it became a buzzword."
category: "Open Education"
show_author: false
tags:
  - open-science
  - open-education
  - data-science
---

If you're building open education programs in data science, you'll face three core challenges: reaching scale, maintaining relevance, and building community. I learned this the hard way over two decades of creating online learning resources. Here's what worked, what didn't, and what I'd do differently.

## How I started: Penn State and the pre-buzzword era

I started working on online education resources almost 20 years ago (circa 2003) as part of the Land Analysis Lab at Penn State. There was no buzzword for it then. We were just trying to help people use GPS and GIS tools, and understand complex soil databases like SSURGO and STATSGO.

### Publishing lessons before it was cool

We published lessons online to support our training programs. This meant annual updates as ESRI released new versions that completely changed the interface. I maintained the site using Dreamweaver, totally self-taught.

Early tech imposter syndrome? Absolutely.

But those early experiences taught me something crucial: online lessons could reach more people than workshops alone, and they needed to evolve as technology evolved.

## NEON Data Skills: scaling on a shoestring budget (2012-2014)

Years later, those experiences inspired me to build the NEON Data Skills program. A colleague gave me the best advice: skip the fancy learning portal NSF wanted. Use GitHub Pages instead. Build a proof of concept and see what people actually need.

My gut told me he was right. It hasn't failed me yet.

### The challenge: teaching data science to ecologists

At NEON, I had a limited budget and a national audience. Most ecologists weren't data-savvy yet. I had personally fought through my PhD convincing traditional field ecologists that using remote sensing to study landscape-level ecology was "real science."

The head of Penn State's Ecology program - a career mycorrhizal fungi researcher - genuinely didn't believe that working with remotely-sensed data qualified as ecology. This was 2010. We were on the precipice of the data revolution, but many scientists didn't see it coming.

There was work to do.

### Building for scale: online + in-person

In-person workshops alone couldn't reach the entire country. The Carpentries had a great model, but our content was specific: teaching scientists to work with HDF5 spectral data, large lidar point clouds, spatial time series.

The solution: publish lessons online that complemented workshops. This created something I didn't fully appreciate at the time - **student-directed learning**. Students could:

* Listen to the instructor
* Read through lessons at their own pace  
* Take materials home to work through independently

Let the student choose how they learn best.

### What made the lessons work

We added key elements to each lesson:

* Learning goals at the top
* Links to download the data needed to complete each lesson
* Credit for all contributing authors
* Quality graphics explaining core concepts

[Example: Working with lidar CHM raster data in R](https://www.neonscience.org/resources/learning-hub/tutorials/create-chm-rasters-r)

The program vision included:

1. Workshops at major conferences to teach NEON data skills in R
2. Online lessons that scaled workshop availability  
3. Community contribution and ownership of resources

### We succeeded at 2 out of 3

**The wins:**
- The site grew to ~16,000 unique global users monthly in the first year
- Workshop evaluations were consistently positive
- Scientists were learning

**The failure: Community**

We didn't build real community around NEON Data Skills. The lessons lived on GitHub Pages where anyone *could* contribute, but:

* We couldn't keep up with questions and comments on lessons
* We didn't get community-driven ideas for new content
* Small team (just me initially) + no community infrastructure = no community

After I left, neondataskills.org was merged into neonscience.org and branded by NEON's management company, Battelle. The lessons are now owned by NEON and Battelle, not the community.

**Community ownership of content will never grow that way.**

### What I'd do differently

The community piece needed dedicated attention from day one:

* Clear contribution pathways and recognition systems
* Responsive infrastructure for questions/feedback  
* Regular community calls or async forums
* Separation between content hosting and institutional ownership

You can't bolt community on later. It needs to be part of the foundation.

## Why this still matters

Online lessons democratize access to technical skills. But they're only valuable if they're:

1. **Maintained** - Content gets stale as tools change. Search engines notice. Early traffic dwindles.
2. **Discoverable** - Most people find answers via search. SEO matters.
3. **Community-owned** - Institutional ownership limits growth and sustainability.

Open education resources should be treated as **living documents** requiring ongoing maintenance - just like open source software.

NEON Data Skills was a success in many ways. It reached thousands of scientists globally and helped build data literacy in ecology. But it could have been more.

The model inspired my next program at University of Colorado Boulder, where I took these lessons forward. More on that in a future post.

---

*Note: Since writing this in 2022, generative AI has emerged as another force reshaping how we create and maintain educational content. That's a story for another time.*
