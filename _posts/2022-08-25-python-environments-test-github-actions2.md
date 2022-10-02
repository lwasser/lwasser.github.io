---
title: "How to setup testing for a Python environment using GitHub Actions "
excerpt: "How to... more"
layout: single_law
related: true
#classes: wide
permalink: how-to-setup-testing-python-environments-github-actions/
author_profile: true
comments: true
header:
  overlay_color: "#333"
category: "open-science"
categories:
  - python
  - open-source
  - open-education
  - testing
  - open-science
---


## How to test an environment? Introducing your new best friend: Continuous Integration

In the previous post, we talked about how Python environment files can help
you make a more reproducible environment that other people can install.
However, what we didn't get to in that post is the next level:

testing your environment in multiple operating systems (Windows, Mac and Linux). 

While testing may sound complex, it's actually not too bad to set it up 
if you are using GitHub. Here i'll break that all down for you!

## Get started with testing a Python conda environment using GitHub Actions

When it comes to testing, your new BFF (best friend forever) will
be GitHub and GitHub actions. 

### What is GitHub actions and continuous integration (CI)?

Continuous integration (CI) is a way of automating testing of changes made to a code 
base. It can also be used to perform tasks such as - push code to another location
or send to Docker, etc. GitHub actions is a free-to-use continuous integration
platform that works seamlessly with GitHub. 

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
{: .notice }

## How do GitHub actions work? s

Next I'll talk about how GitHub Actions work.
At the most basic level, we are going to use GitHub actions to do the same thing
that you did in the previous post, to build a conda environment. But we want to 
build that environment on multiple operating systems:

* Windows, Mac and Linux

We also want this build to happen any time we update the environment on GitHub. 
This will test whether the environment still builds or not. 

## 

GitHub actions can be customized 
to run whenever you want them to run:

* When you make a change to your repository on any branch
* When you make a change to specific branches
* When someone submits a pull request
* Or even as a "Cron" job which means they might run once a week, or once a month regardless of whether a change has been made to the repository. 

### GitHub actions allows you to chose which operating system(s) you want to run on

And you can chose what operating system the job is built on.

You can easily, with just a few links of code tell GitHub actions to test / install your environment on 
Windows, Mac OS and Linux. And from each build you can see if the environment 
hangs, or doesn't install as you want it to. 

Next i'll break this all down. 

### Testing the Earth Analytics Python environment with GitHub Actions

To begin, to start using GitHub actions you need to create a `.yaml` file that lives
in a directory like this in your git repo (and on GitHub):

```bash
.github/
   workflows/
      envt-file.yml
```


While I won't explain [every aspect of this environment](https://github.com/lwasser/earth-analytics-python-env/blob/main/.github/workflows/build-test-envt.yml) let's look at a few
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

