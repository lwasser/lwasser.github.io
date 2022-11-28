---
title: "Three Tips for Building A Discoverable Open Education Website for Scientists"
excerpt: "Open Education Resources (OER) referred to lessons and materials that are published online for anyone to use. Here I present a few lessons learned from my experiences."
layout: single_law
author_profile: true
related: true
comments: true
header:
  overlay_color: "#333"
categories:
  - open education
tags:
  - open science
gallery:
  - url: /images/blog/nds-stats.png
    image_path: /images/blog/nds-stats.png
    alt: "placeholder image 1"
    title: "Image 1 title caption"
  - url: /images/blog/nds-map.png
    image_path: /images/blog/nds-map.png
    alt: "placeholder image 2"
    title: "Image 2 title caption"
---

## How a Scientist Got Hooked on Open Education for Earth Data Science

Back in 2013, I was working at the National Ecology Observatory Network with the
task of building an education program that could support a National Observatory.
At the time we were hosting workshops at conferences however, that model was
hardly scalable. Oh and there was one *minor* important-to-emphasize catch to
this task. My team included exactly three staff:

me, myself and I.

As I became more familiar with the Carpentries (Software
Carpentry at the time with Data Carpentry just a well-supported concept underway)
I saw the power of publishing education focused content online as a way to scale
a national or international program. I was also shown the power of GitHub and
GitHub pages as a way to quickly build and host a website - for free!

Free fit well into my budget at the time. So I dove into the task of building
a simple portal, using a stock, but insanely awesome and flexible github pages
theme (`minimal-mistakes`) portal website. It looks something like this:

<figure>
  <img src="/images/blog/neon-data-skills.png" alt="Image of the NEON Data
  Skills Portal">
  <figcaption>The NEON Data Skills Portal in it's early stages was a simple GitHub
  gh-pages website supported by a modified Minimal Mistakes theme. I was
  about to create this site in just a few days thanks to an easy-to-use theme
  and free hosting.</figcaption>
</figure>


## Education at the Intersection of Science and Data Science  - Environmental Data Science
The lessons that I began to post on the portal were teaching two things:

1. Science concepts associated with why you would want to use NEON data  
1. Data science techniques for opening, processing and plotting NEON data (but that also were general enough to use on any other data in a similar format!)
1. Data structure concepts such as what is a raster? or What are important things to know about spatial data?

Lessons contained a mixture of code and images. The website took advantage of workshops that we had given at conferences like
ESA (Ecological Society of America) and created content that could be used and
reused not only during a workshop but by anyone, at any time and in any location
around the world.

<figure>
  <img src="/images/blog/nds-code-example.png" alt="Image showing a lesson on the portal that uses code and graphics.">
  <figcaption>This is what a lesson on the portal looked like. It taught both
  data science and coding and also science associated with working with the data.</figcaption>
</figure>

I started by posting a few lessons. Over time a few turned into a dozen. A dozen
turned into a hundred with the goal of staff all across NEON contributing content
to our learning portal.

## I was an Open Educator and Didn't Even Know It

At the time, I was publishing lessons online because:

1. I felt strongly that a federally funded observatory should be sharing everything that they produce with everyone and
2. It was a way to scale our program.

What I didn't know is that there was a movement underway surrounding Open Education.
You see:

* Higher education can be expensive. Open education resources lower the
barrier of entry for many people who can not afford to enroll in courses.
* It also is useful in classroom settings to keep textbook costs down.
* Even if people have funds to attend school, sometimes the schools in the preferred geographic region do not teach the content that they want to learn. Particularly if it is new or cutting edge.

Open education also known as Universal education seeks to lower the barriers to learning.
It further democratizes access to content.

From a practical standpoint, technology changes. Online content supports a more
dynamically adaptable presentation of lessons than a printed textbook.

I could go on but hopefully you get the point.

Open education is cool and is the way to go if you can do so.

So back to the portal...

## If You Build It, They May Not Come - How You Can Help People Find Your Website

I had some experience working on website development over the years but really
I was flying by the seat of my pants when it came to helping people find our
content. One thing I had been told in the past was that websites that have
lots of content around a particular area of interest (for example remote sensing
or `R` often get ranked higher in search engines). With that tidbit of information
I decided to build pages that grouped content by categories to see if it would
get Google's attention.

It worked.

<figure>
  <img src="/images/blog/nds-stats.png" alt="Image showing a lesson on the portal that uses code and graphics.">
  <figcaption>The NEON Data Skills website grew over a year and a half to over 2,000
  unique users a month. It was awesome for a data geek like myself to watch! </figcaption>
</figure>

Within a year and a half of publishing the NEON Data Skills portal, we had
over 2,000 unique users a week visiting our site from all across the globe. As
someone who is most motivated by activities that impact others in useful
and supportive ways, this made me psyched!

The NEON data skills portal has now migrated over to the NEON website so and
I have since moved on to build an even bigger portal:

https://www.earthdatascience.org at the University of Colorado Boulder. More on that experience in another blog! 

But I learned a lot from everything that I did at NEON, and have 
a few tips to share from it.

## Three Tips for Building A Discoverable Open Education Website for Scientists

### 1. Make Sure Your Content Has a Theme:

It's ok if you don't have a fancy graphic design
or even a photoshop license. Consider the types of materials that you want to
publish and group them to demonstrate to search engines that you are good at
writing about that topic. The main theme of the NEON site was lessons that were
about using NEON data and learning data science in the context of the science.
Some subthemes from the NEON website that were used to spark Google's attention
included:
  * spatial data in `R`
  * remote sensing
  * raster data in `R`

The above topics happened to be ones that were used frequently by people in Google
searches. And so over time the NEON data skills website gained more visibility
and a higher "rank" - particular in areas related to using the `R` scientific
programming language.

### 2. If you are writing about code and/or data, provide useful, reproducible examples

When I say reproducible, I mean that someone can copy the code from your lesson and
download, get or easily create the data needed to run the code.

### 3. Carefully Consider Your Audience

 Consider who you want to use the lessons
on your site and make sure the content accommodates their needs. For instance
when I think about data science, I immediately think about how much I expect a
user on the website to know before reading my lesson. Avoid too much jargon and
if you do use jargon, define the terms carefully. 

## Last but not least, plan on maintaining the content, or don't publish it at all!

I'll devote another blog to this topic but the idea behind open education 
is that the resources bring value to the community. We know that software and technology changes over time. And as those changes happen, the way we process data changes too.

Open education materials require maintenance in the same way that software or any other technology does. So if you have a budget, plan to maintain your lessons over time rather than writing more new stuff! 

Stay tuned as i'll write another post about this very topic and 
how I developed a testing (continuous integration) system for the 
next portal that I build at CU Boulder. 