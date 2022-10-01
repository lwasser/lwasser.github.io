---
title: "Open Source Software and Tool Development"
layout: single
#classes: wide
permalink: /open-source/
author_profile: true
header:
  overlay_color: "#333"
feature_row_tools:
  - image_path: images/earthpy-free-open-source-tools-spatial-python.png
    alt: "customizable"
    title: "EarthPy"
    excerpt: "A Python package that makes it easier to plot, manipulate and use spatial data. It also includes tools to manage data downloads and home directories."
    url: https://earthpy.readthedocs.io
    btn_label: "<i class='fas fa-external-link-alt'></i> View Docs"
    btn_class: "btn--inverse"
  - image_path: images/matplotcheck-free-open-source-tools-plots-python.png
    alt: "customizable"
    title: "Matplotcheck"
    excerpt: "A Python package that makes it easier to test and validate matplotlib plots. This tool supports autograding student assignments and can be used in Jupyter Noteboks."
    url: https://matplotcheck.readthedocs.io/
    btn_label: "<i class='fas fa-external-link-alt'></i> View Docs"
    btn_class: "btn--inverse"
  - image_path: images/autograde-free-open-source-tools-jupyter-python.png
    alt: "customizable"
    title: "abc-classroom Platform"
    excerpt: "A tool that makes managing github classroom repository management and grading easier."
    url: https://abc-classroom.readthedocs.io/
    btn_label: "<i class='fas fa-external-link-alt'></i> View Docs"
    btn_class: "btn--inverse"
  - image_path:
    alt: "customizable"
    title: "Earth Analytics Python Conda Environment"
    excerpt: "A curated conda environment and docker container that has a suite of spatial tools that support teaching and learning spatial open source python.."
    url: https://www.github.com/earthlab/earth-analytics-python-env/
    btn_label: "<i class='fas fa-external-link-alt'></i> View GitHub Repo"
    btn_class: "btn--inverse"
  - image_path:
    alt: "customizable"
    title: "JupyterHub for Earth Analytics Teaching"
    excerpt: "A JupyterHub deployment system that supports multiple hubs with different configurations including custom environments, compute settings and more setup through Google Cloud."
    url: https://earthlab-hub-ops.readthedocs.io/
    btn_label: "<i class='fas fa-external-link-alt'></i> View Docs"
    btn_class: "btn--inverse"
intro:
  - excerpt: "I am committed to supporting open source. If we can, we should all contribute. Open science depends on open tools. And maintaining open tools takes work."
classes: wide
---

{% include intro-block id="intro" type="center" %}

<!-- 
Open source refers to a (programming) tool or project where the (source) or
the code used to build the tool is available for anyone to see, use and
contribute to. If the tool is free, it will be referred to as FOSS or Free Open
Source Software. To make it easier to teach earth data science I help build
free open source software tools. Below are some of the free-to-use open source
projects that I am currently leading development of. -->


## pyOpenSci: Building diverse community around scientific Python tools through open peer review, training and mentorship  

pyOpenSci is a community modeled after rOpenSci that promotes open science
through supporting development and peer review of scientific software written in
the `Python` programming language.

I currently am organizing and leading the pyOpenSci effort with several colleagues.
In the past 2 years we have:

* Developed a robust peer review process
* Created and published a contributing guide that provides guidelines and standards for Python packages
* Created a partnership with JOSS (Journal of Open Source Software) to ensure they are citable.
* Gathered extensive community support.
* Reviewed a suite of open source python packages harnessing the power of volunteer reviewers and editors.

I am currently serving as the editor in chief but am also actively
seeking funding for this project to support hiring someone to work on this project
full time.

<!-- ** Might be cool to gather a list of collaborators here?? -->

<a href="https://www.pyopensci.org/" target="_blank" class="btn btn--info"><i class="fas fa-external-link-alt"></i> Learn more at pyOpenSci.org.</a>

<!-- TODO: make this an include so i don't have to repeat so much code -->
<div class="feature__wrapper left-text">
    <h2>Open Source Software Tools That I Lead Development Of</h2>
    <div class="feature__item--right">
        <h3 class="archive__item-subsection">Making spatial data easier to work with in Python: EarthPy</h3>
        <p class="page__meta">
            <span class="page__meta-readtime">
            <i class="fas fa-rocket" aria-hidden="true"></i>
            2017:2022 Collaborators: Max Joseph, Jenny Palomino, Joe McGlinchy, Nathan Korinek
            </span>
        </p>
        <div class="archive__item">
            <div class="archive__item-teaser">
            <img src="/images/earthpy-free-open-source-tools-spatial-python.png" alt="customizable">
            </div>
            <div class="archive__item-body">
                <div class="archive__item-excerpt">
                <p>EarthPy was developed to address the amount of complex code that students needed to write to open and plot raster and vector spatial data. The goal of developing this tool was always to create functions that perhaps in the future might be found in some of the bigger packages 
                that had longer term maintenance and that were more broadly used. 
                One of the biggest wins for EarthPy was contributing the entire clip module over to Geopandas! See below:
                </p>
                <ul>
                  <li><a href="https://github.com/geopandas/geopandas/issues/821">Issue about clip module in GeoPandas repo</a></li>
                  <li><a href="https://github.com/geopandas/geopandas/pull/1128">Pull request in GeoPandas repo</a></li>
                  <li><a href="https://twitter.com/geopandas/status/1225794664478990336">Twitter power about upstreaming clip from EarthPy</a></li>
                </ul>
                </div>
                <p><a href="https://earthpy.readthedocs.io" class="btn ">View Docs <i class="fas fa-arrow-circle-right" aria-hidden="true"></i></a></p>
            </div>
      </div>
    </div>
    <div class="feature__item--right left-text">
        <h3 class="archive__item-subsection">Facilitating teaching with GitHub classroom: abc-classroom</h3>
        <p class="page__meta">
            <span class="page__meta-readtime">
            <i class="fas fa-rocket" aria-hidden="true"></i>
            2018-2022: Collaborators: Karen Cranston, Tim Head, Nathan Korinek 
            </span>
        </p>
        <div class="archive__item">
            <div class="archive__item-teaser">
            <img src="/images/autograde-free-open-source-tools-jupyter-python.png" alt="ABC-classroom tool badge.">
            </div>
            <div class="archive__item-body ">
                <div class="archive__item-excerpt">
                <p>More here...
                </p>
                </div>
            </div>
      </div>
    </div>
    <div class="feature__item--right">
    <h3 class="archive__item-subsection">matplotcheck</h3>
        <p class="page__meta">
            <span class="page__meta-readtime">
            <i class="fas fa-rocket" aria-hidden="true"></i>
            Collaborators: Kristen Curry, Nathan Korinek, Jess Hamrick
            </span>
        </p>
        <div class="archive__item">
            <div class="archive__item-teaser">
            <img src="/images/matplotcheck-free-open-source-tools-plots-python.png" alt="customizable">
            </div>
            <div class="archive__item-body">
                <div class="archive__item-excerpt">
                    <p>sdfasdfasdf
                    </p>
                </div>
                <p><a href="https://datacarpentry.org/geospatial-workshop/" class="btn ">View Lessons <i class="fas fa-arrow-circle-right" aria-hidden="true"></i></a></p>
            </div>
      </div>
    </div>
</div>



<div markdown="1" class="notice--primary">
## 

Below are several tools that I worked on when I was the Education director
at Earth Lab. 

The goal of these tools was to make teaching earth data science. 




*   is used  as a part of the `earth-analytics-python` open education course.
`Matplotcheck` was designed to support unit testing of plots for autograding
student assignment. It also is useful for developing unit tests in
Python packages that have plots.

{% include feature_row id="feature_row_tools" %}
</div>


## Related Blog Posts
