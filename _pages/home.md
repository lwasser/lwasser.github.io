---
layout: splash
title: "Leah A. Wasser"
permalink: /
excerpt: "Open education, open source, open science and lots of mountains and running."
date: 2016-03-23T11:48:41-04:00
intro:
  - excerpt: 'I am an Ecologist, data scientist and educator. I develop and lead programs that support open science through community building, outreach and education.
  I am the Executive Director of pyOpenSci - a diverse, global community that supports the Python tools that drive open science through open peer review, training and mentorship.'
feature_row_open_education:
  - image_path: images/open-education-landing.png
    alt: "customizable"
    title: "Open Education Resources & Data Science Learning Portals"
    excerpt: "Everyone should have access to in-demand data skills. I build learning portals and publish and contribute to lessons and open education resources (OER) that allow anyone to learn environmental data science skills at their own pace and on their own time. Open education materials provides universal access to education to people who may not otherwise be able to access these skills."
    url: "/open-education-earth-data-science/"
feature_row_education_teaching:
  - image_path:
    alt: "Blended Online and In-Person Classrooms Graphic"
    title: "Blended Online and In-Person Classrooms"
    excerpt: "Blended online & in-person classrooms **empower students to chose the learning approach that best suits their needs**. All of our Earth Analytics courses give students the option to participant in class either asynchronously or synchronously online or in person. Materials are also published as open education resources."
    url: "/blended-online-inperson-teaching-earth-data-science#teaching-in-blended-online-and-in-person-classrooms"
    btn_label: "<i class='fas fa-angle-right'></i> Learn More: Online and In Person Learning"
    btn_class: "btn--inverse"
  - image_path:
    alt: "customizable"
    title: "Teaching with Jupyter & GitHub Classroom"
    excerpt: "In our program, I use Github classroom to enforce student skills associated with command line, `git`, sharing code and version control. JupyterHub running on Google Cloud is used to reduce the struggles associated with both setting up software and having sufficient computing resources on local student machines."
    url: "/blended-online-inperson-teaching-earth-data-science#jupyter-jupyterhub-and-open-reproducible-science"
    btn_label: "<i class='fas fa-angle-right'></i> Learn More: Teaching with GitHub & Jupyter"
    btn_class: "btn--inverse"
  - image_path:
    alt: "customizable"
    title: "Autograding & Scaling Teaching & Learning"
    excerpt: "Teaching earth data science is time intensive. I am leading development of workflows that reduce the time required to grade student assignments and also provide intermediate feedback to students. This effort involves contributing to existing community tools where possible in support of existing open source efforts."
    url: "/blended-online-inperson-teaching-earth-data-science#autograding"
    btn_label: "<i class='fas fa-angle-right'></i> Learn More: Autograding"
    btn_class: "btn--inverse"
feature_row_open_source:
  - image_path: images/women-coding-unsplash.jpg
    alt: "customizable"
    title: "pyOpenSci: Open Source Python Software for Science"
    excerpt: "Open source Python tools make it easier for scientists to get to their science. pyOpenSci is a community that supports peer reviewed, discoverable and well-documented software. We also support best practices of software development for scientists."
    url: free-open-source-software-for-science-foss#pyopensci/
    btn_label: "Learn More"
feature_row_programs:
  - image_path: images/j-kelly-brito-PeUJyoylfe4-unsplash.jpg
    alt: "customizable"
    title: "Program Development & Leadership Including Earth Data Analytics"
    excerpt: "I build and lead programs. In my previous position as Director of Earth Analytics Education, I built the earth data analytics program at the University of Colorado - Boulder. Before that I developed the NEON Data Skills program."
    url:
    btn_label: "Learn More"
feature_row_foss:
  - image_path: images/earthpy-free-open-source-tools-spatial-python.png
    alt: "customizable"
    title: "Free Open Source Software (FOSS) - Tools for Open Science"
    excerpt: "Free Open Source Software (FOSS) is freely available software where the code is publicly available for use and contributions. I lead development of and contribute to free tools to support teaching of earth data science skills in our Earth Analytics program."
    url: free-open-source-software-for-science-foss/
    btn_label: "Learn More"
    btn_class: "btn--inverse"
feature_row_tools:
  - image_path: images/earthpy-free-open-source-tools-spatial-python.png
    alt: "customizable"
    title: "EarthPy"
    excerpt: "A free and open Python package that makes it easier to plot, manipulate and use spatial data using open source tools like rasterio, geopandas, matplotlib and numpy."
    url: https://earthpy.readthedocs.io
    btn_label: "View docs (external link)"
    btn_class: "btn--inverse"
  - image_path: images/matplotcheck-free-open-source-tools-plots-python.png
    alt: "customizable"
    title: "Matplotcheck"
    excerpt: "A free and open Python package that makes it easier to test and validate matplotlib plots. This was built to support autograding student assignments but also is useful for writing unit tests for software."
    url: https://matplotcheck.readthedocs.io
    btn_label: "View docs (external link)"
    btn_class: "btn--inverse"
header:
    overlay_image: images/vincent-guth-Sdc35GnHgvI-unsplash.jpg
    overlay_filter: 0.6
    actions:
        - label: "Twitter"
          url: "https://twitter.com/leahawasser"
        - label: "GitHub"
          url: "https://github.com/lwasser"
        - label: "LinkedIn"
          url: "https://www.linkedin.com/in/leah-wasser-0138883"
---

{% include feature_row id="intro" type="center" %}

{% include feature_row id="feature_row_open_source" type="left" %}

{% include feature_row id="feature_row_open_education" type="right" %}

<div markdown="1" class="notice--primary">
## Blended Online and In-Person Classrooms, Active Learning and Teaching

Through time, I have developed a teaching framework that combines active
learning, blended online and in-person student participation and cloud based
tools that support both teaching earth data science and scaling courses to
support more students.

{% include feature_row id="feature_row_education_teaching" %}

</div>

{% include feature_row id="feature_row_foss" type="left" %}
{% include feature_row id="feature_row_programs" type="left" %}

{% comment %}
<div markdown="1" class="notice--primary">
## Free  Open Source Software Tools For Earth Data Science and Education - FOSS

Open source refers to a (programming) tool or project where the (source) or
the code used to build the tool is available for anyone to see, use and
contribute to. If the tool is free, it will be referred to as FOSS or Free Open
Source Software. To make it easier to teach earth data science I help build
free open source software tools. Below are some of the free-to-use open source
projects that i'm currently leading.

{% include feature_row id="feature_row_tools" %}
Probably should reconsider this blog and make it a highlights block w 3 things
[Learn More FOSS](/free-open-source-software-tools-for-science-foss/)
</div>
{% endcomment %}
