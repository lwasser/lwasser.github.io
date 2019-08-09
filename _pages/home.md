---
layout: splash
title: "Leah A. Wasser"
permalink: /
excerpt: "Open education, open source, open science and lots of mountains and running."
date: 2016-03-23T11:48:41-04:00
intro:
  - excerpt: 'I am an Ecologist, data scientist and educator. I develop and lead programs that make it easier for scientists to learn data science and for data scientists to use their skills for science.'
feature_row:
  - image_path: images/j-kelly-brito-PeUJyoylfe4-unsplash.jpg
    alt: "customizable"
    title: "Online and In Person Teaching - Blended Classrooms"
    excerpt: "Everything from the menus, sidebars, comments, and more can be configured or set with YAML Front Matter."
    url: "/docs/configuration/"
    btn_label: "Learn More"
feature_row_education:
  - image_path: images/j-kelly-brito-PeUJyoylfe4-unsplash.jpg
    alt: "customizable"
    title: "Open Education"
    excerpt: "Everyone should have access to in-demand data skills. I build learning portals and publish and contribute to lessons that allow anyone to learn environmental data science skills at their own pace and on their own time."
    url: "/open-education/"
    btn_label: "Learn More"
feature_row_open_source:
  - image_path: images/women-coding-unsplash.jpg
    alt: "customizable"
    title: "pyOpenSci: Open Source Python Software for Science"
    excerpt: "Open source Python tools make it easier for scientists to get to their science. pyOpenSci is a community that supports peer reviewed, discoverable and well-documented software. We also support best practices of software development for scientists."
    url:
    btn_label: "Learn More"
feature_row_programs:
  - image_path: images/j-kelly-brito-PeUJyoylfe4-unsplash.jpg
    alt: "customizable"
    title: "Program Development & Leadership Including Earth Data Analytics"
    excerpt: "I build and lead programs. Currently, I am building the earth data analytics program at the University of Colorado - Boulder. I previously developed the NEON Data Skills program."
    url: "/docs/configuration/"
    btn_label: "Learn More"
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
  - image_path: images/autograde-free-open-source-tools-jupyter-python.png
    alt: "customizable"
    title: "Autograding Platform"
    excerpt: "I use github classroom, JupyterHub and nbgrader to support all things data science education. I am leading the development of a set of tools that make it easier to manage github classroom, and grade student assignments."
    url:
    btn_label: "Learn More"
    btn_class: "btn--inverse"
header:
    overlay_image: images/vincent-guth-Sdc35GnHgvI-unsplash.jpg
    overlay_filter: 0.6
    actions:
        - label: "Twitter"
          url: "https://twitter.com/leahawasser"
        - label: "GitHub"
          url: "https://github.com/pyOpenSci"
---

{% include feature_row id="intro" type="center" %}
{% comment %}
{% include feature_row %}
{% endcomment %}
{% include feature_row id="feature_row_education" type="right" %}

<div markdown="1" class="notice--primary">
## Free  Open Source Software Tools For Earth Data Science and Education - FOSS

Open source refers to a (programming) tool or project where the (source) or
the code used to build the tool is available for anyone to see, use and
contribute to. If the tool is free, it will be referred to as FOSS or Free Open
Source Software. To make it easier to teach earth data science I help build
free open source software tools. Below are some of the free-to-use open source
projects that i'm currently leading.

{% include feature_row id="feature_row_tools" %}
</div>

{% include feature_row id="feature_row_open_source" type="right" %}

{% include feature_row id="feature_row_programs" type="left" %}
{% comment %}
{% endcomment %}
