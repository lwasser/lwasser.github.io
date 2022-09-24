---
title: "Using Tested Python Environments to Teach Earth and Environmental Data Science"
excerpt: "Teaching earth and environmental data science can be time consuming. Learn about my explorations with various open source tools to support teaching."
layout: single
#classes: wide
permalink: tested-python-environments-for-teaching-data-science/
author_profile: true
comments: true
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
    title: "JupyterHub for Earth Analytics Teaching"
    excerpt: "A JupyterHub deployment system that supports multiple hubs with different configurations including custom environments, compute settings and more setup through Google Cloud."
    url: https://earthlab-hub-ops.readthedocs.io/
    btn_label: "<i class='fas fa-external-link-alt'></i> View Docs"
    btn_class: "btn--inverse"
categories:
  - python
  - open-source
  - open-education
---

## My Path From Using Matlab to Teaching R & Python

<!--<original permalikn free-open-source-software-for-science-foss/> -->

When I was working at NEON building the NEON data skills program, the obvious
choice for a programming language to learn and teach was R. I had used Matlab
throughout my PhD program to process my data. But the ecology and biology 
community which NEON was supposed to support were heavily using R. And it was 
free and open source (FOSS) so I jumped ship. 

I quickly learned to love R. It was intuitive. 
And once I got over the pirate symbols like `<-`  and `%>%` I really  
enjoyed using R and the RStudio interface is so intuitive! 

## R Came With Community 

But what I loved most was the community. There was SO much support and infrastructure. 
I could to do things like - create a new package  to process a specific type of data. 
I could write vignettes for packaging. I could easily create reproducible 
reports with citations (`RMarkdown`).

Using R, I could run a workshop and send out setup instructions. People 
installed the packages and came ready to learn. Just like that. Out of the 
imaginary "box". 

*(Does anyone actually put software in boxes anymore?)*

## Here Comes Python... and GDAL - Help!!

My move to the Python programming language was much less graceful. I moved because 
my program at CU Boulder was rooted in the Earth sciences. The earth science 
community was using Python more regularly than R (at the time - based upon
discussions with people but also data collected via surveys). 

Industry was using Python a lot too. A lot (also data from surveys). It's 
generic design lends it to be used in may different fields and applications. 
I knew that students could benefit professionally from knowing python in a 
diverse set of fields. 


### How Does One Install GDAL Anyway?

But, installing Python packages was much less intuitive. Quickly I had to figure 
out whether to use `pip` or `conda` or `conda-forge`. I found myself with environment
conflicts. I found myself digging around for help and trying to intret heavily 
technical Stack Overflow posts about how to install things correctly. 

> It was rough. All I wanted to do was code and teach others how to process 
> their data. Why is this so hard?


Why do you hate me, GDAL? Whyyyyy
 
<figure>
	<a href="/images/gdal-meme-filipe.jpg">
    <img src="/images/gdal-meme-filipe.jpg"></a>
	<figcaption>Meme created by a colleague, Filipe about installing GDA in a 
  Python environment. It just is never pretty, friends. Now imagine students who 
  are new to python and want to get setup for spatial data trying just to install
  things... ouch!  
  </figcaption>
</figure>


## I Just Wanted to Teach People How To Process Data in a Reproducible Way
I just wanted to teach students how to process data like I did in `R` for so many 
years. I didn't want to them spend weeks helping them install tools as that is 
how you lose people. That is how you lose those who aren't sure that they can 
do it - 

> If i can't install software, how can I code?
> -- Says every student ever who deals with imposter syndrome

So what was my next step?

## I Built a Tested Python Environment: Earth Analytics Python Environment 

I knew that having an easier-to-install environment would make teaching better.
And better yet, if I could test that environment on Linux, Mac and Windows 
(students use all sorts of computers and OS' - you can't assume only one) then
a lot of my issues would be solved. I would know before hand where the pain points 
were and could try to fix them. 

### The Earth Analytics Python Environment

So this is what I built - with the help of several people of course

1. [A vetted Python environment](https://www.github.com/earthlab/earth-analytics-python-env/): It has all of the Python tools needed to complete my class. Tools for remote sensing and other spatial data. Tools for natural language processing, etc.
2. The environment has a [GitHub Actions workflow that tested it on Windows, Mac and Linux.](https://github.com/lwasser/earth-analytics-python-env/tree/main/.github/workflows) 
3. And thanks to [Filipe's help](Link to his github), in later years we used Conda Lock so we could pin down exactly what versions of all tools and dependencies were being installed. Boy this made troubleshooting easier! 

A few other things about this environment made it great
1. We also setup a docker container that allowed us to use it elsewhere such as to
support testing builds of our online lessons on [earthdatascience.org](https://www.earthdatascience.org) - stay tuned for a blog post on building that site and other open education portals!
2. We could also use the Docker container it if we wanted to spin up quick myBinder sessions for a workshop
3. Finally it allowed us to use it in a JupyterHub which I will talk about in another blog.

So all in all it was a win-win for the program. 

*At the time GitHub actions wasn't available so we other platforms for CI such as 
Travis.*

SO that is how we solved the mighty Python environment problem.

I'm curious if others have run into this issue with Python environments. Please
leave a comment below if you have any thoughts.

<!--

Open source refers to a (programming) tool or project where the (source) or
the code used to build the tool is available for anyone to see, use and
contribute to. If the tool is free, it will be referred to as FOSS or Free Open
Source Software. To make it easier to teach earth data science I help build
free open source software tools. Below are some of the free-to-use open source
projects that I am currently leading development of.


## pyOpenSci: Peer Reviewed, Documented, Tested and Discoverable Open Source Software for Science

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
-->
<!-- ** Might be cool to gather a list of collaborators here?? -->
<!--

<a href="https://www.pyopensci.org/" target="_blank" class="btn btn--info"><i class="fas fa-external-link-alt"></i> Learn more at pyOpenSci.org.</a>


<div markdown="1" class="notice--primary">
## Open Source Software Tools That I Am Currently Working On

I am leading the development of several free open source software tools for
`Python`. These tools have been developed collaboratively with colleagues at
Earth Lab, undergraduate interns and graduate students. `EarthPy` is used
extensively as a part of the `earth-analytics-python` open education course.
`Matplotcheck` was designed to support unit testing of plots for autograding
student assignment. It also is useful for developing unit tests in
Python packages that have plots.

{% include feature_row id="feature_row_tools" %}
</div>
-->

