---
title: "Setup Python Conda Environments for reproducible science and for teaching Earth and Environmental Data Science"
excerpt: "Teaching earth and environmental data science can be time consuming. Learn about what I learned when I tried to create an consistent Python environment that was easy for students to install. (and how this could help your science as well."
layout: single_law
related: true
permalink: tested-python-environments-for-teaching-data-science/
author_profile: true
comments: true
header:
  overlay_color: "#333"
series: "conda-envt-testing"
category: "open-science"
categories:
  - testing
  - python
  - open-source
  - open-education
---
<!--<original permalikn free-open-source-software-for-science-foss/> -->


## Why should scientists care about environments and testing things?

Environments and testing are critical when you are thinking about both 
teaching earth and environmental data science or just doing research with the 
goal of making your work open and reproducible. When I saw open and reproducible, i'm referring to a workflow that others can use and build upon. Vs having to start over from scratch to recreate your work.  

When I was just starting out in science, if you had suggested the idea of testing and working on environments
as being a part of my workflows I would have laughed. In fact, if you told me 
id be teaching data science 20 years later and running an organization devoted
to the tools that support data science, I'd laugh even harder. 

But testing has become and important part of any infrastructure that I create 
be it:

* documentation
* environments
* or tools

I'll devote another blog to setting up testing. 

This blog is about how to setup a consistent and easier-to-install Python (conda) environment. Setting up consistent environments can help you create better,
easier-to-reproduce workflows. This is particularly important if you are trying
to help students setup their computers and create workflows in Python. But it 
will also support your scientific workflows!

## My Path From Using Matlab to Teaching R & Python

When I was working at NEON building the NEON data skills program, the obvious
choice for a programming language to learn and teach was R. I had used Matlab
throughout my PhD program to process my data. But the ecology and biology 
community which NEON was focused on were heavily using R. And it was 
free and open source (FOSS) so I jumped ship from Matlab to R. I couldn't afford
a Matlab license at the time anyway so it made sense. 

I quickly learned to love R. It was intuitive. 
And once I got over the pirate symbols like `<-`  and `%>%` I really  
enjoyed using R and the `RStudio` interface is so intuitive! 

## R Came With Community 

But what I loved most was the community. There was SO much support and infrastructure. 
I could to do things like - create a new package to process a specific type of data. 
I could write vignettes for packaging. I could easily create reproducible 
reports with citations (`RMarkdown`).

Using R, I could run a workshop and send out setup instructions. People 
installed the packages and came ready to learn. Just like that. Out of the 
imaginary "box". Sure `GDAL` was sometimes problematic in those year working with
R. But I figured it out. 

*(Does anyone actually put software in boxes anymore?)*

## Here Comes Python... and GDAL - Help!!

My move to the Python programming language was much less graceful. I moved because 
my program at CU Boulder was rooted in the Earth sciences. The earth science 
community was using Python more regularly than R. I determined this by surveying 
the community - public and private sector. 

My surveys told me that industry was using `Python` a lot too. It's 
generic design lends it to be used in may different fields and applications. 
I knew that students could benefit professionally across many fields if they knew
how to code in `Python`. 

*By the way, I still think R is great for many things!
I still use R too! No judgement here!*
{: .notice }

### How Does One Install GDAL Anyway?

But, installing Python packages was much less intuitive. Quickly I had to figure 
out whether to use `pip` or `conda` to manage installing package. And once I 
settled on conda, it became what channel do I use? `conda-forge` seemed like 
a good one. I found myself with environment
conflicts. 

oh yes, conflict.

I'd install one thing and it would have a conflict with something else. Id remove that
other thing and something else would break. 

<figure>
	<a href="/images/xkcd-python-environment.png">
    <img src="/images/xkcd-python-environment.png"></a>
	<figcaption>Environment pain when working with Python is real. However, Python
  is an awesome programming language that is broadly used across disciplines. So 
  it's worth figuring this all out. <i>Source xkcd.</i> 
  </figcaption>
</figure> 

I  just wanted to code. And teach others how to code.

I found myself digging around for help and trying to interpret heavily 
technical Stack Overflow posts about how to install things correctly. 

> Why is this so hard?

Why do you hate me, GDAL? Whyyyyy?
 
<figure>
	<a href="/images/gdal-meme-filipe.jpg">
    <img src="/images/gdal-meme-filipe.jpg"></a>
	<figcaption>Meme created by a colleague, Filipe about installing GDAL in a 
  Python environment. It just is never pretty, friends. Now imagine students who 
  are new to python and want to get setup for spatial data trying just to install
  things... ouch!  
  </figcaption>
</figure>


## I just wanted to teach people how to process data in a reproducible way

I didn't want to students to spend weeks trying to get an environment working.
That is how you lose people.

> If I can't install software, how can I code?
> -- Says every student ever who deals with imposter syndrome



So what was my next step?

## I (we) built the Earth Analytics Python Environment (& setup testing)

I knew that having an easier-to-install / almost fail proof Python environment 
would make teaching easier.
And better yet, if I could test that environment on Linux, Mac and Windows 
(students use all sorts of computers and OS' - you can't assume only one) then
a lot of my issues would be solved. 
I would know before they installed the environment where the pain points were. I could troubleshoot before class rather than during class. 

This was huge!

### Enter the Earth Analytics Python Environment

So this is what I built:

<i class="fas fa-hands-helping"></i> Thanks to the help of several people 
including a great colleague 
[Max Joseph](https://www.github.com/mbjoseph/). Max was really the person who
early on introduced me to the concept of testing. At the time I didn't fully
understand just how important it was. But I got there quickly!
{: .notice }

1. [A vetted Python environment - this links to the original repo on EarthLab's organization. Below I link to a fork in case that repo changes over time](https://www.github.com/earthlab/earth-analytics-python-env/): This environment has all of the Python tools needed to complete my earth-analytics-python class. Tools for remote sensing and other spatial data. Tools for natural language processing, etc. And it can be installed quickly and easily using a recipe file (also known as an environment file - more on that below).
2. The environment has a [GitHub Actions workflow that tested it on Windows, Mac and Linux.](https://github.com/lwasser/earth-analytics-python-env/tree/main/.github/workflows). I'll talk about that part more in a second, followup blog. 

*The original workflow was built using Travis CI and Appveyor - yikes!*

<i class="fas fa-hands-helping"></i> Thanks to [Filipe's help](https://www.github.com/ocefpaf), in a separate 
environment that I created for an automated build, we used Conda Lock. We did 
this so we could pin down exactly what versions of all tools and dependencies 
were being installed once we have a working environment. Boy this made 
troubleshooting easier! More on that in another blog.
{: .notice}

## What do all of the pieces in this earth-analytics-python repository do?

Ok so let's break down what is in this [`earth-analytics-python` GitHub repo](https://www.github.com/lwasser/earth-analytics-python-env):

### First you have the conda Python environment file. What's that? 

You can think of a `Python` environment file, as a recipe for
what to install and where. By using this environment file, 
we are making a decision now to use the `conda` package manager 
to install packages vs `pip`. 

<i class="fas fa-info-circle"></i> The package manager just helps
keep track of what you install and helps you decide what toolbox 
to install that package from. It also any dependencies that
the packages you are installing has and addresses potential 
conflicts with different versions of different dependencies.
{: .notice } 

Below you can see a snippet of 
what the `earth-analytics-python` environment looks like. The file is always 
called `environment.yml` by default. 


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

[The file is in a yaml format.](https://github.com/lwasser/earth-analytics-python-env/blob/main/environment.yml) You can think of `.yaml` as a 
 list of things that in this case create a recipe to build something. Here, 
 the file contains a recipe to build a `Python` environment.  

<i class="fab fa-leanpub"></i> [Here's a lesson that I used to teach my students about Python Environments.](https://www.earthdatascience.org/workshops/setup-earth-analytics-python/setup-python-conda-earth-analytics-environment/)
{: .notice}

Notice a few things:

### The file has an environment *name*


```yaml
name: earth-analytics-python
channels:
  - conda-forge
  - defaults
```

At the top you have a `name: earth-analytics-python`: As you might guess this just specifies the name of the environment. 
The name allows you to activate it or tell your computer to use that environments when processing your Python code. 
Yup, this means that you can have multiple environments on your computer if you wish.

### The file specifies *channels*

Next notice the `channels:` element. Channels tell the installer where to get
the installation files from. 

You can think of a channel as a big box of tools. Yup a tool box. In Python,
there are multiple giant toolboxes containing tools (Python packages) that you 
can install. These toolboxes often contains the same tools. 

<figure>
	<a href="/images/blog/conda-channel-geohackweek.jpeg">
    <img src="/images/blog/conda-channel-geohackweek.jpeg" alt="SOURCE INFO HERE"></a>
	<figcaption>Source: geohackweek
  </figcaption>
</figure>


For instance `conda` 
has a default toolbox <i class="fas fa-toolbox"></i> that is uses to install packages. So if you install the 
Anaconda or Miniconda installation it will likely use the `default` toolbox. 

The `conda-forge` channel <i class="fas fa-toolbox"></i> is separate and tends to be great if 
you are using a lot of spatial packages. You can install `matplotlib` from conda 
`defaults`
or `conda-forge`. 

Now, you can install `matplotlib` using the `pip` package manager too. The 
problem here is that each tool within each channel and within each package 
manager can be slightly different in terms of how dependencies are resolved. 
This can cause conflicts in your environment as `matplotlib` installed using 
the pip package manager is likely optimized to run with other tools 
installed using `pip`.  

When installing tools you can get yourself into trouble if you mix channels or
package managers. So if you can avoid installing tools using both `pip` and `conda`
package managers. Pick one for most tools (sometimes a package may not be on 
conda). Similarly if you are using conda, stick with a channel. Use `defaults` 
or `conda-forge`. But try as hard as you can to avoid using both. This is often why people's Python environments "break". 
{: .notice }
 
### Conda-forge and defauls channels in your environment.yml file  

In this file there are two channels:
  * The first is `conda-forge`. 
  * The second is `defaults`. 

When you install this environment, this `environment.yml` recipe file tells the installer 
to use the `conda-forge` toolbox first. If for some reason it can't find a tool 
in the `conda-forge` toolbox, it will move on to look in the `default` toolbox.

This approach works well as generally all of the tools will be installed using 
`conda-forge` creating a happy environment that you will be able to use 
consistently.

### Dependencies in the conda environment.yml file

```yaml
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

Next you have your dependencies. This list contains the packages (and version 
if you want to be specific) that you want to install in that environment. Note, 
that every package has a bunch of dependencies or other packages that it relies 
on to run. So when you install `matplotlib` for example. It's likely going to 
install other things that `matplotlib` needs. 

The `conda` installer will find the best mix of package versions and dependencies 
to install. This ensures (most of the time) that your environment runs correctly. 

*For this reason, avoiding "pinning" or telling the installer exactly what version to install is often a good idea.*
{: .notice }

Note that in the example below, the environment is pinned to Python version 
`3.9`. But everything else will just install the most current, or the best 
version of the package to work in the environment tha tou have specified in the 
file. 

## How to install a conda environment

The best resource for working with conda environments is the 
[conda documentation on managing environments](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#creating-an-environment-from-an-environment-yml-file).

To get started with installing it, you'll want to cd to the directory where your
environment lives and type: 


```bash
conda env create -f environment.yml
```

To see the environments available for you to use. 

```bash
conda env list
```

## Wrapping things up and next steps

So now you  have a basic understanding of why environments are so important.
They are important for both teaching Python and for doing science in a way
that is open and reproducible. 

Having an `environment.yml` file available for either your students or for 
your colleagues / collaborators on your project will in the long term save your
time. 

### Now it's time for testing 

However, the next step towards making your environment easy to install for 
all users is testing. And lucky for you, you can setup testing on GitHub using 
GitHub actions. 

You will want to setup testing if you are creating an environment that:
1. you want to evolve over time (i.e. you want to update package versions over time). And 
2. you want others to be able to use (those other people may use different OS' than you!) 
 
At a minimum you will want to test that the environment can install on:
on Windows, Mac and Linux. These are the common operating systems that most 
people use. 

The earth data science classes that I developed and taught
 were full of students using everything from tablets to custom linux 
setups. And environment issues continually consumed the first few weeks of 
class.
{: .notice }

In the next blog post I will discuss setting up testing in more detail. 
