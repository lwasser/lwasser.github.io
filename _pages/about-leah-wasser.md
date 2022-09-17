---
title: "About Me - Leah A. Wasser"
layout: single
permalink: /about-leah-wasser/
author_profile: true
excerpt: "I build programs that support a diverse open science community."
category: "open-education"
header:
    overlay_image: images/vincent-guth-Sdc35GnHgvI-unsplash.jpg
    overlay_filter: 0.6
intro:
  - excerpt: "I learned to code the hard way, on my own. That experience drives me to support community around skills and tools needed to propel data intensive science forward. We don't all have to learn the hard way."
---
{% include feature_row id="intro" type="center" %}

## About Me 
I am formerly trained as a remote sensing ecologist. However, early on I 
discovered that I enjoyed supporting others doing their science more than doing 
the science myself. 

## A Bit About Me

* I've never had any training in GIS, remote sensing, data science or programming. But I love them all. Learn more efficiently on my own.
* I'm inspired by projects with high impact on others.
* I find coding to be relaxing. It's like working on a puzzle - it frees my mind.
* In my free time I run long distances in the mountains. Trails feed my soul.  


<div class=notice markdown="1">

## I am passionate about building programs that: 

* Build diverse communities and networks in support of Open Science. 
* Support communities that are underrepresented in STEM.
* Democratize open data science education through online learning. 
</div>

## Career Timeline
My career path haven't exactly been linear but i'm psyched about where I am now! 

<section class="timeline">
  <div class="container">
    {% for anEvent in site.data.professional-timeline %}
      {% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
        {% if thecycle == 'odd' %}
          <div class="timeline-item">
            <div class="timeline-img"></div>
            <div class="timeline-content js--fadeInLeft">
              <h2>{{ anEvent.title }}</h2>
              <div class="date">{{ anEvent.month-year }}</div>
              {% if anEvent.description %}
                <p>{{ anEvent.description }}</p>
              {% endif %}
              {% if anEvent.quote %}
                <blockquote>{{ anEvent.quote }}</blockquote>
              {% endif %}
              {% if anEvent.url %}
                <a class="bnt-more" href="{{ anEvent.url }}">More</a>
              {% endif %}
            </div>
          </div>
        {% else %}
          <div class="timeline-item">
            <div class="timeline-img"></div>
            <div class="timeline-content  js--fadeInRight">
              <!--<div class="timeline-img-header"> removing image  timeline-card timeline-card makes space for the background image-->
                <h2>{{ anEvent.title }}</h2>
              <!--</div>-->
              <div class="date">{{ anEvent.month-year }}</div>
              {% if anEvent.description %}
                <p>{{ anEvent.description }}</p>
              {% endif %}
              {% if anEvent.quote %}
                <blockquote>{{ anEvent.quote }}</blockquote>
              {% endif %}
              {% if anEvent.url %}
                <a class="bnt-more" href="{{ anEvent.url }}">More</a>
              {% endif %}
            </div>
          </div>
          {% endif %}
        {% endfor %}
  </div>
</section>





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
