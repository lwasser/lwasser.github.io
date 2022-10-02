---
title: "Using Tested Python Environments to Teach Earth and Environmental Data Science"
excerpt: "Teaching earth and environmental data science can be time consuming. Learn about my explorations with various open source tools to support teaching."
layout: single_law
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
conflicts. I found myself digging around for help and trying to interpret heavily 
technical Stack Overflow posts about how to install things correctly. 

> It was rough. All I wanted to do was code and teach others how to process 
> their data. Why is this so hard?


Why do you hate me, GDAL? Whyyyyy
 
<figure>
	<a href="/images/gdal-meme-filipe.jpg">
    <img src="/images/gdal-meme-filipe.jpg"></a>
	<figcaption>Meme created by a colleague, Filipe about installing GDAL in a 
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


<figure>
	<a href="/images/xkcd-python-environment.png">
    <img src="/images/xkcd-python-environment.png"></a>
	<figcaption>Environment pain when working with Python is real. However, Python
  is an awesome programming language that is broadly used across disciplines. So 
  it's worth figuring this all out. <i>Source xkcd.</i> 
  </figcaption>
</figure> 

So what was my next step?

## I Built a Tested Python Environment: Earth Analytics Python Environment 

I knew that having an easier-to-install / almost fail proof Python environment 
would make teaching easier.
And better yet, if I could test that environment on Linux, Mac and Windows 
(students use all sorts of computers and OS' - you can't assume only one) then
a lot of my issues would be solved. I would know before they installed the environment
hand where the pain points were. I could troubleshoot before class. 

Doesn't that sound nice?


### The Earth Analytics Python Environment

So this is what I built - with the help of several people of course:

1. [A vetted Python environment - this links to the original repo on earthlab's organization, below I use a fork in case that repo changes over time](https://www.github.com/earthlab/earth-analytics-python-env/): It has all of the Python tools needed to complete my class. Tools for remote sensing and other spatial data. Tools for natural language processing, etc.
2. The environment has a [GitHub Actions workflow that tested it on Windows, Mac and Linux.](https://github.com/lwasser/earth-analytics-python-env/tree/main/.github/workflows) 

Thanks to [Filipe's help](https://www.github.com/ocefpaf), in a separate environment that I created for an automated build, we used Conda Lock. We did this so we could pin down exactly what versions of all tools and dependencies were being installed once we have a working environment. Boy this made troubleshooting easier! More on that in another blog.
{: .notice}

## What do all of the pieces in this earth-analytics-python repository do?

Ok so let's break down what is in this GitHub repo:

### First we have the conda Python environment file. What's that? 

You can think of a `Python` environment file, as a recipe for
what to install and where. Below you can see a snippet of 
what the `earth-analytics-python` environment looks like.

[The file is in a yaml format.](https://github.com/earthlab/earth-analytics-python-env/blob/main/environment.yml) you can think of that as a big 
list of things in this case Python packages that need to be installed. 

[Here's a lesson that I used to teach my students about Python Environments.](https://www.earthdatascience.org/workshops/setup-earth-analytics-python/setup-python-conda-earth-analytics-environment/)
{: .notice}

Notice a few things:

### The file has an environment *name*

At the top you have a `name: earth-analytics-python`: As you might guess this just specifies the name of the environment. The name allows you to activate it or tell your computer to use that environments when processing your Python code. Yup, this means that you can have multiple environments on Your computer if you wish.

### The file specifies *channels*

Next notice the `channels:` element. Channels tell the installer where to get
the installation files from. 

You can think of a channel as a big box of tools. Yup a tool box. In Python, the several 
buckets that are filled with tools - often the same tools. For instance `conda` has a default
bucket. The `conda-forge` bucket is separate and tends to be great if 
you are using a lot of spatial packages. You can install `matplotlib` from conda defaults
or conda-forge. You can install it from pip the toolbox too. The problem here is 
that each tool within each channel  is slightly different. This can cause conflicts in your environment as `matplotlib` in the pip channel is likely optimized to run 
with other tools installed using pip.  

When installing tools you can get yourself into trouble if you mix channels. This means installing tools using the `pip` package manager and `conda`. Or using `Conda defults` and `conda-forge`. This is often why people's Python environments "break". 
{: .notice }
 
In this file there are two channels:
  * The first is `conda-forge`. 
  * The second is `defaults`. 

When you install this environment, this environment.yml recipe file tells the installer 
to use the `conda-forge` toolbox first. If for some reason it can't find a tool 
in the conda-forge toolbox, it will move on to look in the default toolbox.

This approach works well as generally all of the tools will be installed using 
`conda-forge` creating a happy environment that you want to use. 

### Dependencies

Next you have your dependencies. This list contains the packages (and version 
if you want to be specific) that you want to install in that environment. Note, 
that every package has a bunch of dependencies or other packages that it relies 
on to run. So when you install `matplotlib` for example. It's likely going to 
install other things that `matplotlib` needs. 

```yaml
name: earth-analytics-python
channels:
  - conda-forge
  - defaults

dependencies:
  - python=3.9
  - pip
  # Core scientific python
  - numpy
  
  # Plotting
  - matplotlib
  - plotly
  - seaborn
```

The `conda` installer will find the best mix of package versions and dependencies 
to install. This ensures (most of the time) that your environment runs correctly. 

*For this reason, avoiding "pinning" or telling the installer exactly what version to install is often a good idea.*
{: .notice }

Note that in the example below, the environment is pinned to Python version 
`3.9`. But everything else will just install the most current, or the best 
version of the package to work in the environment tha tou have specified in the 
file. 

## What does testing mean? I'm a scientist, why are we talking about testing environments. 

Ok so you may be thinking... hey, i'm a scientist. I test everything. It's 
kind of my job. Do I really have to test environments too?

Well, the answer is yes and no. Ha! *It depends.* Kinda but I suggest you do it :)

Here's why.

If you are creating an environment that:
1. you want to evolve over time (i.e. you want to update package versions over time). And 
2. you want others to be able to use (those other people may use different OS' than you!) 
 
At a minimum you will want to test that the environment can install on:
on Windows, Mac and Linux. These are the common operating systems that most 
people use. 

The earth data science classes that I developed and taught
 were full of students using everything from tablets to custom linux 
setups. And environment issues continually consumed the first few weeks of 
class.

Note: I soon built a JupyterHub to deal with that situation and played with 
Google colab. I'll save that for another blog.
{: .notice }

Thus, to ensure that students could install the environment easily, and to identify
potential environment issues before students encountered them we created a 
build that tested the environment on all three operating systems. 

If you are not a teacher, but a scientist, and you have a group of people
who want to install the same environment, testing could be helpful for you too.
{: .notice }

> But how do you do test across operating systems each time you update your environment?

That, my friend is next.

## How to test an environment? Introducing your new best friend: Continuous Integration

So let's talk about how to test a `Python` environment. Your new best friend will
be GitHub and Continuous Integration (lovingly referred to here as your friend, `CI`). 

CI is your new super power enabled BFF (best friends forever). You can setup a 
workflow in the cloud (on GitHub)
that runs your environment on all 3 different operating systems. You could 
even test it on different versions of `Python` if you wanted to. 

And it's all FREE. 

Am I blowing your mind yet?

<figure>
	<a href="/images/ci-al-pacino-scarface.jpg">
    <img src="/images/ci-al-pacino-scarface.jpg"></a>
	<figcaption>Say hello to your new little friend -- continuous integration! :). <i>Thanks Filipe for the meme inspiration!</i>
  </figcaption>
</figure> 

When we first setup testing for this environment, we were using other CI platforms
such as Travis CI and Appveyor for windows. However now we use GitHub actions 
as this is a free platform (for now as of October 2022) and it nicely integrates
into all pull requests and changes that you make to the repository.  
{: notice}

https://github.com/lwasser/earth-analytics-python-env/blob/main/.github/workflows/build-test-envt.yml

So chat about how GitHub Actions work. GitHub actions can be customized to run
whenever you want them to run:

* When you make a change to your repository on any branch
* When you make a change to specific branches
* When someone submits a pull request
* Or even as a "Cron" job which means they might run once a week, or once a month

And you can chose what operating system the job is built on.

In short, you can tell GitHub actions to test / install your environment on 
Windows, Mac OS and Linux. And from each build you can see if the environment 
hangs, or doesn't install as you want it to. 

In our case, we even test that the envionment can be activated and you can 
import core tools such as `rasterio` or `xarray`.

### Testing the Earth Analytics Python NEnvironment with GitHub Actions

While I won't explain [every aspect of this environment](https://github.com/earthlab/earth-analytics-python-env/blob/main/.github/workflows/build-test-envt.yml) let's look at a few
important parts. First notice that the environment itself is a YAML file! Yup, the 
same type of file that we talked about above which defined the environment. 
Remember that Yaml can be thought of a list that provides a computer with instructions
to do something. 



### When do you want the action to run?
The top part of the environment gives it a `name:` and also otells it when to 
run the action. In this case we want it to run when there is 

1. a change on any branch and
2. on any pull request that someone makes to the repository

```yaml
on:
  push:
    branches:
      - '*'
  pull_request:
    branches:
      - '*'
```

Lower down we tell it to run the job on Ubuntu (Linux), Macos and windows). We
specify the latest versions of each operating system in this example. 

```yaml
  runtests:
    name: conda (${{ matrix.os }})
    runs-on: ${{ matrix.os }}
    strategy:
      fail-fast: false
      matrix:
        os: ["ubuntu-latest", "macos-latest", "windows-latest"]
```

Lower down we install `miniconda` and tell it to install the `earth-analytics-python`
environment

```yaml
    steps:
      - uses: actions/checkout@v2
      - uses: conda-incubator/setup-miniconda@v2
        with:
          miniconda-version: 'latest'
          channels: conda-forge
          channel-priority: true
          auto-update-conda: false
          auto-activate-base: false
          environment-file: environment.yml
          activate-environment: earth-analytics-python
```

And finally, once the environment is run, we check the environment using 
`conda list` and then import two packages: `earthpy` and `rasterio`

```yaml
    - run: conda list
    - run: python -c "import earthpy"
    - run: python -c "import rasterio"
```

If the build runs successfully, your commit will have a little green check next 
to it. 

<figure>
	<a href="/images/blog/ci-green-passing.png">
    <img src="/images/blog/ci-green-passing.png"></a>
	<figcaption> If the build runs successfully, your commit will have a little green check next 
to it. And if it fails, it will have a dreaded red x. 

  </figcaption>
</figure>

And if it fails, it will have a dreaded red x. 

If the build fails, it will give you some output telling you more about why 
it failed. This will allow you to trouble shoot the build. 

## Why test an environment?

Now that we've gotten the basics out of the way, let's talk about 
why testing is important.




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

