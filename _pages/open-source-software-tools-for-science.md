---
title: "Open Source Software and Tool Development"
layout: splash
permalink: /open-source/
author_profile: true
header:
  overlay_color: "#333"
feature_tools:
  - image_path: /images/earthpy-free-open-source-tools-spatial-python.png
    alt: "placeholder image 1"
    title: "Making spatial data easier to work with in Python: EarthPy"
    people: "2017:2022 Collaborators: Max Joseph, Jenny Palomino, Joe McGlinchy, Nathan Korinek"
    excerpt: "EarthPy was developed to address the amount of complex code that students needed to write to open and plot raster and vector spatial data. The goal of developing this tool was always to create functions that perhaps in the future might be found in some of the bigger packages 
                that had longer term maintenance and that were more broadly used. 
                One of the biggest wins for EarthPy was contributing the entire clip module over to Geopandas! See below:
                
                * [Issue about clip module in GeoPandas repo](https://github.com/geopandas/geopandas/issues/821)

                * [Pull request in GeoPandas repo](https://github.com/geopandas/geopandas/pull/1128)

                * [Twitter power about upstreaming clip from EarthPy](https://twitter.com/geopandas/status/1225794664478990336)
                "
    url: "https://earthpy.readthedocs.io"
    btn_label: "View Docs"
    btn_class: "btn"
  - image_path: /images/autograde-free-open-source-tools-jupyter-python.png
    alt: "placeholder image 1"
    title: "Making teaching with GitHub classroom easier: abc-classroom"
    people: "2018-2022: Collaborators: Karen Cranston, Tim Head, Nathan Korinek "
    excerpt: "abc-classroom is an Python open source project that makes it easier 
                to work with GitHub classroom. [GitHub classroom](https://classroom.github.com/) 
                is a classroom interface for GitHub that allows you to create assignments as 
                GitHub repositories. Students can submit their assignments on 
                GitHub as well using pull requests. Having students use GitHub 
                every week for assignments engrains git and GitHub skills that 
                are some of the most complex to learn for many students. "
    url: "https://abc-classroom.readthedocs.io"
    btn_label: "View Docs"
    btn_class: "btn"
  - image_path: /images/matplotcheck-free-open-source-tools-plots-python.png
    alt: "Image that says matplotcheck"
    title: "Testing code in student assignments to support autograding"
    people: "Collaborators: Kristen Curry, Nathan Korinek, Jess Hamrick"
    excerpt: "Matplotcheck is a tool built on top of Jess Hamrick's 
              plotchecker tool. The idea behind this tool was that we'd setup
              tests in student assignments submitted as Jupyter Notebook.
              The long term vision was that these tests could in part run
              on a Continuous Integration system to support them checking
              their homework before submission. Further it would support
              autograding using nbgrader of assignments reducing grading 
              time. This project unfortunately took a back seat given all
              of the other development work happening in my team at that time. "
    url: "https://matplotcheck.readthedocs.io"
    btn_label: "View Docs"
    btn_class: "btn"
feature_old_tools:
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
related: true
category: "open-source"
author_profile: false
---

{% include intro-block id="intro" type="center" %}
<div class="body__content-block" markdown="1">

<div class="feature__wrapper left-text">
  <h2>pyOpenSci: Building diverse community around scientific Python tools through open peer review, training and mentorship </h2> 
  <div class="feature__item--right">
    <div class="archive__item">
      <div class="archive__item-teaser">
        <figure>
            <a href="/images/xkcd-open-source-dependency.png">
            <img src="/images/xkcd-open-source-dependency.png" alt="Image of a xkcd comic showing a large maching with a very small leg holding the entire thing up. An arrow points to it and says A project some random person in nebraska has been thanklessly maintaining since 2008."></a>
            <figcaption>Critical scientific workflows and projects often have dependencies
            that are maintained by volunteers. source: xkcd </figcaption>
        </figure>
      </div>
      <div class="archive__item-body">
        <div class="archive__item-excerpt">
          pyOpenSci builds diverse community around
          scientific Python open source tools. PyOpenSci has several core programs including:
          <ol>
            <li>Peer review of Python free open source software</li>
            <li>Community building that supports both new and existing open source maintainers</li>
            <li>Training and mentorship that will support a diverse set of new contributors supporting open source</li>
          </ol>
          <div class="notice">
          <i class="fas fa-info-circle"></i> <strong>Open Source Software (OSS)</strong> refers to tools that are created in a way
          that allows all of the code to be openly available for anyone to see (and
          contribute too). FOSS adds the word "FREE" to the acronym (Free Open Source Software).
          And simply refers to the fact that the software is free to use.
          </div>

          <h3> Open peer review of Python scientific software: </h3>

          Academics are often "valued" based on their peer review publication record. 
          However software is critical driving the workflows that are driving that research.

          Peer review:
          <ul>
            <li>Supports credit in the form of a citable identifier (DOI) that maintainers can use to get credit for their work</li>
            <li>Supports improved package infrastructure. Consistency can make it easier for more people to contribute / support maintaining the tool.</li>
           <li>Supports improved documentation making it easier for scientists to use the tools.</li>
          </ul> 
        </div>
      </div>
    </div>
  </div>
</div>

<a href="https://www.pyopensci.org/" target="_blank" class="btn btn--info"><i class="fas fa-external-link-alt"></i> Learn more at pyOpenSci.org.</a>
</div>

<div class="notice-white">
<div class="body__content-block" markdown="1">

## Open source software tools that i've lead development of

{% include feature_block_law id="feature_tools" type="left" %}


<div markdown="1" class="notice--primary">
Below are several tools that I worked on when I was the Education director
at Earth Lab. 

The goal of these tools was to make teaching earth data science. 

*   is used  as a part of the `earth-analytics-python` open education course.
`Matplotcheck` was designed to support unit testing of plots for autograding
student assignment. It also is useful for developing unit tests in
Python packages that have plots.

{% include feature_row id="feature_old_tools" %}
</div>

</div>
</div>

