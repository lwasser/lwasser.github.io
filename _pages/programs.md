---
title: "Programs that I've Developed and Run"
excerpt: "I've developed and lead a suite of programs over the past 2 decades and learned a lot from each one. Here I share some intel on lessons learned."
layout: single
permalink: /open-science-program-development/
author_profile: true
header:
  overlay_color: "#333"
---

## Open Science Program Development Is What I Do!

Building programs is incredibly fun and rewarding! Below you can learn a bit 
about what I've been working on related to open Science.

## Current Employment: Executive Director, pyOpenSci

text here...
* link to blog on how it has evolved it? 

pyOpenSci (Current)


## Previous Programs
* so rather than two sections i can just have a little authors section and write
* NEON, Earth Lab, etc

IDEA - what if i just have topical programs

So something on open education portals and group earth data science and neon data skills

### Earth Analytics Education Program, Earth Lab (CU Boulder)

<div class="notice" markdown="1">

<div class="feature__wrapper">
   {% for post in site.categories['earth-lab'] %}
    <div class="feature__item">
        <div class="archive__item">
            <div class="archive__item-body">
                <h3 class="archive__item-title">
                    <a href="{{ site.baseurl }}{{ post.url}}" rel="permalink">{{ post.title }}</a>
                </h3>
                <div class="archive__item-excerpt">
                <p>{{ post.excerpt | markdownify }}</p>
                </div>
            </div>
        </div>
   </div>
   {% endfor %}
</div>
</div>


### NEON Data Skills, (National Ecological Observatory Network (NEON)

<div class="notice" markdown="1">

<div class="feature__wrapper">
   {% for post in site.categories['neon-data-skills'] %}
    <div class="feature__item">
        <div class="archive__item">
            <div class="archive__item-body">
                <h3 class="archive__item-title">
                    <a href="{{ site.baseurl }}{{ post.url}}" rel="permalink">{{ post.title }}</a>
                </h3>
                <div class="archive__item-excerpt">
                <p>{{ post.excerpt | markdownify }}</p>
                </div>
            </div>
        </div>
   </div>
   {% endfor %}
</div>
</div>
