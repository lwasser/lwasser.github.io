---
title: "About Me - Leah A. Wasser"
layout: single
permalink: /about-leah-wasser/
author_profile: true
excerpt: "Universal, Open Education."
category: "open-education"
header:
    overlay_image: images/vincent-guth-Sdc35GnHgvI-unsplash.jpg
    overlay_filter: 0.6

intro:
  - excerpt: 'I publish lessons online and teach using a blended in person and online approach to open doors for non traditional students who may not otherwise have access to learning earth data science.'
---

## About Leah

I am an educator, ecologist and data scientists. I started my career pursuing
Landscape Architecture but found myself drawn strongly to science. After spending
some time as an AmeriCorps volunteer, I found a job at Penn State working in the
Land Analysis Lab and among other things, teaching GIS. I decided to pursue a
Ph.D. in ecology with a focus on using LiDAR remote sensing data to understand
vegetation health and structure at a landscape level.

During my Ph.D. I learned to code - the hard way on my own. After that experience,
I was inspired to help others work with data to support their science. I moved
on to work at the National Ecological Observatory Network in Boulder, Colorado.
Here I build the NEON Data Skills program which was an online open education
portal that helped people use NEON and related types of data.

A few tidbits about me:

* I've never had any formal classes or training in GIS, remote sensing, data science or programming. But I love them all and love to learn and read even more.
* I'm inspired by doing things that have high, positive impact on others. This is why I love teaching.
* I find coding to be relaxing. It's kind of like working on a puzzle but more mentally engaging and infinitely rewarding.
* In my free time you can find me running long distances in the mountains.  

I'm currently the director of Earth Analytics Education at Earth Lab, University
of Colorado Boulder. Here I get to work with a pretty great team of educators, students,
scientists and data scientists.

## Related Articles
<div class="list__item">
{% for post in site.categories[page.category] %}
<!-- List all posts in the page category  -->
<!-- Somehow loop through each class lesson and count - right now i'm not including category on series pages -->
<div class="list__item">
<article class="archive__item">
  <h2 class="archive__item-title"><a href="{{ site.baseurl }}{{ post.url}}">{{ post.title }}</a></h2>
  <p class="archive__item-excerpt">{{ post.excerpt }}</p>
</article>
</div>
{% endfor %}
</div>
