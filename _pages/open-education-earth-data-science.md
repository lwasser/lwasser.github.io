---
title: "Open Education"
layout: single
classes: wide
permalink: /open-education-earth-data-science/
author_profile: true
excerpt: "Universal, Open Education."
category: "open-education"
header:
    overlay_image: images/vincent-guth-Sdc35GnHgvI-unsplash.jpg
    overlay_filter: 0.6
feature_row_courses:
  - image_path: images/j-kelly-brito-PeUJyoylfe4-unsplash.jpg
    alt: "Intermediate Earth Data Science Textbook"
    title: "Intermediate Earth Data Science Textbook"
    excerpt: "This textbook is used alongside the Earth Analytics Python course. It contains over 100 lessons that teach `Python` lessons on topics including remote sensing imagery, using APIs to get data, working with social media data and using lidar to understand vegetation health."
    url: "https://www.earthdatascience.org/courses/use-data-open-source-python/"
    btn_label: "<i class='fas fa-external-link-alt'></i> View Online Textbook (EarthDataScience.org)"
    btn_class: "btn--inverse btn--large"
  - image_path: images/python-open-education-earth-data-science-course-unsplash.png
    alt: "customizable"
    title: "Earth Analytics Python Course"
    excerpt: "There is a large workforce demand for `Python` programming skills given it is one of the most commonly used programming languages. In the course you will find the readings and assignments associated with the course which covers `Python` lessons on earth and environmental data science topics. The course is the second of 3 in the Earth Analytics Professional Graduate Certificate."
    url: "https://www.earthdatascience.org/courses/earth-analytics-python/"
    btn_label: "<i class='fas fa-external-link-alt'></i> View Course (EarthDataScience.org)"
    btn_class: "btn--inverse btn--large"
  - image_path: images/r-open-education-earth-data-science-course-unsplash.png
    alt: "customizable"
    title: "Earth Analytics R Open Education Coding Course"
    excerpt: "I developed Earth Analytics using the `R` scientific programming language course during my first year at CU-Boulder. It was a test to see what happened when I placed an entire course online. After optimizing the course for search engine visibility (SEO) the course was discovered and people began working through it."
    url: "https://www.earthdatascience.org/courses/earth-analytics/"
    btn_label: "<i class='fas fa-external-link-alt'></i> View Course (EarthDataScience.org)"
    btn_class: "btn--inverse btn--large"
feature_row_carpentries:
  - image_path: images/carpentries-geospatial-workshops.png
    alt: "customizable"
    title: "Data Carpentry Geospatial Lessons"
    excerpt: "I secured funding through NSF to run a hackathon kickoff to develop a new Carpentries (Data Carpentry) open geospatial data in `R` 2-day workshop. These lessons utilized data from the National Ecological Observatory Network (NEON) sites. After several years of development at NEON, the lessons are now in the hands of an active and engaged Carpentry community to be taught by instructors across the globe and have been formally published by the Carpentries. "
    url: "https://datacarpentry.org/geospatial-workshop/"
    btn_label: "<i class='fas fa-external-link-alt'></i> View Workshop (datacarpentry.org)"
    btn_class: "btn--primary"
feature_row_nds:
  - image_path: images/neon-data-skills-analytics-website.png
    alt: "customizable"
    title: "NEON Data Skills"
    excerpt: "At the National Ecological Observatory Network (NEON) I built the NEON Data Skills program. NEON data skills scaled training that helps the community work with and use NEON data using an online, open education learning portal. When I left NEON, the data skills portal had 12-16,000 unique global users a month and was quickly growing. The portal has since been merged with larger neonscience website."
feature_row_eds:
  - image_path:
    alt: "customizable"
    title: "> 140,000 Global Monthly Users"
    excerpt: "Targeted search engine optimization combined with providing tutorials on in-demand skills has lead global website reach."
  - image_path:
    alt: "customizable"
    title: "Science + Data Science At Your Fingertips"
    excerpt: "There is a booming workforce demand for people that have both science and data science knowledge and skills. This intersection is what defines the earthdatascience.org portal."
  - image_path:
    alt: "customizable"
    title: "> 300 Lessons (and Growing!)"
    excerpt: "The earth analytics education team is always adding content to the portal! Check back often."
intro:
  - excerpt: 'I publish lessons online and teach using a blended in person and online approach to open doors for non traditional students who may not otherwise have access to learning earth data science.'
---

## Commitment to Open Education and Teaching Earth Data Science at Scale

{% include feature_row id="intro" type="center" %}


<div markdown="1" class="notice--primary">

## EarthDataScience.org Learning Portal

I designed, branded and built the earthdatascience.org learning portal to allow
anyone to have access to our Earth Data Analytics program course materials. The
growing portal contains over 250 lessons and has over 50,000 unique global users
visit a month. Many lessons on the portal have been developed collaboratively.

<a href="https://www.earthdatascience.org" target="_blank" class="btn btn--large btn--inverse"><i class="fas fa-external-link-alt"></i> Visit earthdatascience.org</a>
{: .text-center}

{% include feature_row id="feature_row_eds" %}

</div>


### Online Open Education - Self Paced Earth Data Science Courses

I publish earth data science course and workshop materials on the
earthdatascience.org portal to support open education. Many of the materials are
developed collaboratively with colleagues, my staff and sometimes even students.
The Earth Analytics courses below were ones that I designed and built
at the onset of creating the Earth Analytics Education Initiative at Earth Lab,
University of Colorado - Boulder.


{% include feature_row id="feature_row_courses" type="left" class="notice--primary" %}{: .notice--primary}

### Community Collaboration: Data Carpentry

{% include feature_row id="feature_row_carpentries" type="right" %}




{% include feature_row id="feature_row_nds" type="left" %}


## Related Blog Posts

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


<!--
<div markdown="1" class="notice--primary">
### Carpentries geospatial lessons

{% include figure image_path="/images/carpentries-geospatial-workshops.png" caption="caption here" alt="alt here" class="align-left" %}


</div> -->
