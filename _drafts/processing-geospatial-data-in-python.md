




In fact geospatial data processing in `Python` in general was dominated by ArcGIS 
based `Python` command line tools just 5 years ago. This requires a proprietary 
license. Unfortunately, licenses were not helpful to scientists trying to build
open reproducible workflows (workflows that other scientists can
use and reuse to build on each others work). This is because proprietary licenses 
can't be openly shared in the way that a Python based workflow can. 
{: .notice .notice-success}


### A complementary Python package to make writing code even easier

Supported by my team and the amazing folks in our analytics hub, we also created 
a learning helper package called `earthpy` that made some spatial operations easier
and simpler. Some of the tools that we added to earthpy including:

* plotting helpers 
* and a clip function to clip vector vector data in Python

[Our lessons were even accompanied by a tested Python environment to avoid any 
installation issues.](/why-tested-python-environments-matter-for-science).
 
I'll go into that topic of producing this textbook in more detail in another blog! 


The clip functionality in earthpy was moved to geopandas (yay! upstreaming open source!)

* I moved all of the lessons to `xarray` and `rioxarray` for raster data.
* And the beloved `geopandas` for vector data.



## Current and relevant content will score higher in google
It is important to note that current and relevant content will always get a 
higher rating by google. Because people will spend more time working through it.
And because the content answers questions that all of those *Googlers* out there 
have. This in turn makes the content easier to find in a search. 




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