---
title: "Why You Shouldn't Publish Open Education Resources (Or Should You?): Learning Earth and Environmental Data Science"
excerpt: "There is a huge number of open education / online tutorials that teach earth and environmental data science skills. However, these lessons will quickly become obsolete as tools evolve. This blog is about why simply publishing a lesson online is not enough."
permalink: /open-education-data-science-posting-online-is-not-enough
layout: single_law
author_profile: true
related: true
comments: true
header:
  overlay_color: "#333"
categories:
  - open education
tags:
  - open science
---

## Open education resources for earth and environmental data science 
Open education resources, as discussed here refer to lessons that are published
online with the intent that other people can learn, or use them to teach, free
of charge. 


### What license should open education resources for earth and environmental data science avoid and why?

Ideally, online open education resources have an open license such as [Creative Commons Share Alike](https://creativecommons.org/licenses/by-sa/4.0/). The Creative 
Commons SHare Alike license is a great license because
it's [copyleft](https://snyk.io/learn/what-is-copyleft-license/) like in nature. This 
means that the content is open, but it must continue to be open if it's reused
in any way.

#### No commercial licenses are not ideal even if they are creative commons 
Ideally the license on open education resources does not have a 
[no commercial clause](https://creativecommons.org/licenses/by-nc/2.0/) 
attached to it.

No commercial, allows the lessons to be used by individuals. However, it's limitations
may surprise you. It 
technically prevents anyone who teaches with that license, in an 
environment where there is monetary exchange involved.

Examples of such environments include:

* paid workshops 
* college level courses where tuition is involved
* or even training events where funding supports a non profit cause

This type of restriction can potentially hurt those who may need the resources
the most. Institutions that are smaller, and serve students who have been 
traditionally under-served and underrepresented in STEM are examples of schools 
that may lose more if our open education materials have a no commercial creative 
commons license.

### Open education resources for earth and environmental data science (and tech in general)
Open education resources for earth and environmental data science can be profoundly useful and 
impactful. At the most basic level, open education resources democratize access 
to learning. These resources open the door to learning to anyone who has a computer 
and internet access.

**<i class="far fa-lightbulb"></i> Using Open Source Tools is Also Ideal:** Ideally 
if your online lessons deal with data science, they also have no fees to access them. And no license, or paywalls 
required to get started with the tools. 
{: .notice }

### But think fast and hard before you decide to publish data science content as open education learning resources 

It's worth considering the end goal of any resources that you publish. 
If you are publishing earth and environmental data science content, or, any tech 
content, a one time effort
will be short lived in its relevance and usefulness. 

Perhaps tech content that is not intended to be maintained over time is better 
served as a short blog post rather than an open education 
resource. 

Before you publish the content, or even write a grant to create the content, 
it's  worth considering how long you are able to maintain these resources.

What is your true end goal?

Below, I explain why you should think twice before publishing open education 
resources or extended online tutorials related to earth and environmental data 
science. 

## Just as tech is rapidly evolving so is data science
The field of data science is rapidly evolving and with it the tools that support 
data processing evolve. In the scientific open source world, versions of `Python` 
change. Ways to process data efficiently change. 

All of the open source R and Python tools that make data processing easier in 
turn require ongoing maintenance. 

> Open education
> resources require the same type of maintenance that open source tools do to keep 
> up as the ecosystem evolves.

Some 
specific examples of how the changing landscape has impacted resources that 
I have created are discussed next.

### Data structures can change over time - an example from NEON hyperspectral remote sensing data  

Even in the 5 years that I was at NEON developing data lessons, data structures
changed. 

Our published suite of [lessons on using the `hdf5` file format](https://www.neonscience.org/resources/learning-hub/tutorials/hdf5-intro-r) needed to change
because NEON created a new and better organizational structure for the H5 files 
that it was sharing with the public during that time. 

The `hdf5` file format is a hierarchical file format that can store complex data sets 
with varying structures. It is the format that NEON delivers it's raw 
hyperspectral remote sensing data in. 

This change in data structure meant that all of the 
online lessons that taught people how to use teh data needed to change too.

### Trends in data science tools used to process data change too

Trends in what tools we should use to process data change too. 

### Example 1: base R vs tidyverse
  
As I was starting to move away from `R`, discussion of the raster package being 
replaced by stars was emerging. And `tidyverse` was replacing `base R` as the new 
“sexy” and efficient way to do data science. 

When I made the leap of faith to teach `Python` instead of `R` at CU Boulder, a lot 
had changed there too.

### Example 2: Spatial data processing in open source Python

In the spatial realm at hte time there was one solid book on geospatial processing 
in `Python`. I bought it at the time. As thorough of a book as it was, it's 
definitely the last book I'd buy on technical approaches to working with data. 

<figure>
  <img src="/images/blog/geoprocessing-python-chris-garrard.png"  
     style="width: 80%;" alt="Image showing the book cover of chris garrard's book geoprocessing with python.">
  <figcaption>Cover of Chris Garrard's book - Geoprocessing with Python.  
  </figcaption>
</figure>

Why would I not buy another book like this? Because this book used core GDAL (which 
is profoundly hard to install and use). And this approach at the time was probably
the best option. 

The value of online resources, vs. a published book is that online resources 
can be changed at any time. The downside of a printed book is that it’s pretty darn difficult to modify the contents on the fly. 
{: .notice }

When this book was published, tools like `rasterio` and `xarray`, which carefully wraps around 
GDAL removing levels of complexity from data processing, were still in early stages
of development. Or perhaps the author didn't want to go "all in" on these tools?

Thus the code used in the book was much more complex than it 
needed to be. 

```python
# Script to stack three 1-band rasters into a a single 3-band image.

import os
from osgeo import gdal

# Be sure to change your directory.
os.chdir(r'D:\osgeopy-data\Landsat\Washington')
band1_fn = 'p047r027_7t20000730_z10_nn10.tif'
band2_fn = 'p047r027_7t20000730_z10_nn20.tif'
band3_fn = 'p047r027_7t20000730_z10_nn30.tif'

# Open band 1.
in_ds = gdal.Open(band1_fn)
in_band = in_ds.GetRasterBand(1)

# Create a 3-band GeoTIFF with the same dimensions, data type, projection,
# and georeferencing info as band 1. This will be overwritten if it exists.
gtiff_driver = gdal.GetDriverByName('GTiff')
out_ds = gtiff_driver.Create('nat_color.tif',
    in_band.XSize, in_band.YSize, 3, in_band.DataType)
out_ds.SetProjection(in_ds.GetProjection())
out_ds.SetGeoTransform(in_ds.GetGeoTransform())
```
[Source: github, last updated Feb 2016](https://github.com/cgarrard/osgeopy-code/blob/master/Chapter9/listing9_1.py)

Further, the example code did not follow efficient open reproducible approaches 
using both:

* hard coded paths and 
* repeated code 

Here is a similar snipped from the textbook that I developed:

```python
# Create the path to your data
landsat_post_fire_path = os.path.join("cold-springs-fire",
                                      "landsat_collect",
                                      "LC080340322016072301T1-SC20180214145802",
                                      "crop")

# Generate a list of tif files using glob
post_fire_paths = glob(os.path.join(landsat_post_fire_path,
                                        "*band*.tif"))

band_1 = rxr.open_rasterio(post_fire_paths[0], masked=True).squeeze()
```


In fact geospatial data processing in `Python` in general was dominated by ArcGIS 
based `Python` command line tools just 5 years ago. This requires a proprietary 
license. Unfortunately, licenses were not helpful to scientists trying to build
open reproducible workflows (workflows that other scientists can
use and reuse to build on each others work). This is because proprietary licenses 
can't be openly shared in the way that a Python based workflow can. 
{: .notice .notice-success}

### A conventional textbook was already dated, so I built my own online textbook to use in my courses

I had hoped to use that published book as my bible for what to teach. Instead I 
found myself creating [my own geospatial lessons in Python bible](https://www.earthdatascience.org/courses/use-data-open-source-python/intro-vector-data-python/spatial-data-vector-shapefiles/). 
This online textbook could openly licensed to allow anyone to use the lesson. 

Anyone could use the lessons:

* In teaching. 
* In learning.
* Online. 

### A complementary Python package to make writing code even easier

Supported by my team and the amazing folks in our analytics hub, we also created 
a learning helper package called `earthpy` that made some spatial operations easier
and simpler. Some of the tools that we added to earthpy including:

* plotting helpers 
* and a clip function to clip vector vector data in Python

[Our lessons were even accompanied by a tested Python environment to avoid any 
installation issues.](/why-tested-python-environments-matter-for-science).
 
I'll go into that topic of producing this textbook in more detail in another blog! 

### Example 3: from rasterio to xarray and rioxarray 

But alas, my original geospatial data in Python lessons were soon also dated

Ironically, just 2 years after I wrote my first iteration of spatial lessons in 
`Python`, I realized that there were now an even easier set of tools for 
students to use. This meant, less code. Less complexity to teach and learn. 

And they all centered around `xarray`, and `rioxarray`.  

The clip functionality in earthpy was moved to geopandas (yay! upstreaming open source!)

* I moved all of the lessons to `xarray` and `rioxarray` for raster data.
* And the beloved `geopandas` for vector data.

This change in our textbooks: 

* Reduced the complexity of code needed to process geospatial data significantly! 
* Supported students in using tools that would scale as they got into larger data processing (and cloud compute supported processing)
* Made the lessons more relevant and current

## In the span of just 3 years, I found 3 different "most efficient approaches" to processing spatial data 

What allowed me to keep my lessons current in a way that was different from 
Garrard's book (which again was great - I am not critiquing it), was that my 
lessons were online. Making them easily updatable as the spatial data ecosystem 
evolved. 

My lessons were also published with an open creative commons license which means 
anyone could use and re-use them. This means that if they become unmaintained,
someone else could step in and start to maintain them. 

<i class="far fa-lightbulb"></i> These lessons are unmaintained currently as i've moved on to a new position.
But perhaps i'll consider picking up maintenance again in the future (if no one
else does). There are many really great spatial libraries out there now to 
simplify and improve the lessons even more!
{: .notice}

Finally, because I was actively teaching these approaches in my courses, ever year, 
it was my job to keep the content current. People need to get jobs with these 
skills. Skills, similar to online content, are always more useful when they are 
current and relevant. 

## Current and relevant content will score higher in google
It is important to note that current and relevant content will always get a 
higher rating by google. Because people will spend more time working through it.
And because the content answers questions that all of those *Googlers* out there 
have. This in turn makes the content easier to find in a search. 

## What business model sustains maintained online earth and environmental data science lessons?

After a few years I had a small team to help me with this effort - which actually is a lot of work. And use of our online lessons grew to thousands of (global) users each week. 

> Skills, similar to online content, are always more useful when they are 
> current and relevant. 

### The benefits of creating lessons that supplement an existing, funded program
The benefit of creating lessons that I (and my team) also taught was that:

* Our team would catch issues while teaching; we could then quickly update the lessons. 
* Students working through the online lessons in their homework, would also catch and report issues that we could fix (we gave them participation points for identifying bugs or typos in the lessons!) 
* Finally, as the tools changed and updated we updated the lessons.

These lessons were more than just a one-time publication of open education resources, they were living resources that like software or any other technology needed to evolve and be updated as the data ecosystem evolved. Online lessons, open education resources are living documents.

## Weekly testing of lessons as the environment updated

THe final element that we setup for our lessons is an automated build. This build, 
uses a docker image with R and python packages to test the lessons before
they are published. THis ensures that every lesson runs from beginning to end. 

Lessons were also tested weekly.

The environment image could be updated to represent current versions of python 
and associated tools. Then the lessons would be tested again on the newer tools. 

While all of this takes a lot of effort. It's important to consider. If you don't, 
you're just creating another resource that will be obsolete fairly quickly. 

At the end of the day this frustrates users.

## The problems that I see today in the online data science / open education space

There are numerous challenges today in the online earth and environmental data science open education space 

* Single use blog posts are great but they represent a moment in technology time.
It is most likely that these posts will never be updated as that is the nature 
of a blog post

* Online lessons are being created, through grants and other efforts that are funded
for a few years. However there is no long term plan to update them as the technology changes. Thus years are spent developing books and other online resources and in just a few months they can become dated. 

* Lessons are being published with no testing to ensure that they work (in the similar way that you would test software). Thus a user might find a userful resources that simply doesn’t run on their computer.  

## Make a plan for updating and maintaining your resources 

We know that technology changes and as such if you plan on publishing online lessons. Be prepared to update them as those changes happen. This might mean 
that you publish less content that is higher quality that can be maintained over time.

Or you partner with other groups that have an interest in maintaining high quality 
content. 

If you can, try to think about these resources as a part of a funded program
that you are already working on. Getting funding for maintenance is hard, so write in updates to your content, in any grants or funding that you seek.  

## What's next? How to create a tested online open education portal (and attract millions of global users a year)

### And how to keep those users...

In a future blog, I will write about 
1.  Why online open education resources should be viewed as software that needs consistent maintenance and testing
2. I will discuss this in the context of the earthdatascience.org portal that I designed and built at CU Boulder. 

Earthdatascience.org was built upon everything that I leared while creating the 
NEON data skills. It addressed the issues discussed above by:

*  Creating a testing infrastructure baked into the publication of lessons that ensured lessons ran end to end prior to going online
* Utilized a program that was self funded through tuition to support updating lesson content. 
    * And incentivized students to identify bugs and issues in the online lessons to enhance lesson quality. 
* Was carefully seo optimized to ensure discoverability of content. 

Ultimately that site before I left had over 2 million unique global annual users 
and consistently was returned in google searches. (NOTE that as i write this the 
site is not currently being actively maintained but lessons learned can still be 
drawn from this program)


## Data science is quickly evolving, a one-time publication of learning materials is not enough
Data science is quickly evolving. And as such online education resources need to evolve with the times as data and tools change. 

Open education resources for earth and environmental data science need to be maintained and updated (and tested) in the same way that we update our operating systems and our suites of data science tools.
 
Stay tuned for more...