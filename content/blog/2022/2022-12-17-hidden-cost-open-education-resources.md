---
title: "The Hidden Cost of Publishing Open Education Resources"
date: 2022-12-17
draft: false
excerpt: "Creating open education resources is the easy part. Keeping them relevant as technology evolves? That's where most efforts fail. Here's what nobody tells you about maintaining technical learning content."
category: "Open Education"
show_author: false
tags:
  - open-science
  - open-education
---

*Originally written in 2022*

Open education resources for data science are exploding. Universities
publish tutorials. Researchers write grant-funded lesson series.
Individuals share blog posts teaching Python or R techniques.

But here's what nobody talks about: **most of these resources will be
obsolete within two years.**

Not because they were poorly written. Not because the science changed.
But because the tools evolved, and nobody maintained the content.

I learned this the hard way over 15+ years of creating and maintaining
online learning resources for earth and environmental data science.
Here's what I wish someone had told me before I started.

## The problem: technology moves faster than content

Data science tools evolve constantly. Package interfaces change. Best
practices shift. New libraries emerge that make old approaches obsolete.

Your carefully crafted tutorial becomes a frustration engine for
learners who can't get the code to run.

### Example 1: when data structures change

At NEON, we published a [comprehensive suite of lessons on the HDF5 file
format](https://www.neonscience.org/resources/learning-hub/tutorials/hdf5-intro-r)
for working with hyperspectral remote sensing data.

Within 1-2 years, NEON reorganized their HDF5 file structure to be more
user-friendly. Better for users, but it meant every single lesson needed
an update.

We had the resources to update them because these lessons supported an
active program. But what happens when resources run out and outdated
lessons stay online?

Users get frustrated. They waste hours fighting with code that doesn't
work. Many conclude they're not cut out for data science.

**Imposter syndrome in science is already real. Broken tutorials make it
worse.**

### Example 2: the spatial data processing rollercoaster

When I started teaching Python for geospatial work around 2018, the
standard approach used core GDAL - powerful but notoriously difficult to
install and learn for beginners.

A few years later, `rasterio` simplified raster processing significantly.

And soon thereafter, `xarray` and `rioxarray` transformed the way spatial data is processed, reducing code complexity
even further and scaled better to cloud computing and maximizing performance.

**In just 4 years, I rewrote spatial data lessons three times.** Each
iteration was simpler, more relevant, and more aligned with industry
practice.

Here's what the progression looked like:

**initial approach (GDAL):**
```python
# Complex, verbose, hard to teach
import os
from osgeo import gdal

in_ds = gdal.Open(band1_fn)
in_band = in_ds.GetRasterBand(1)

gtiff_driver = gdal.GetDriverByName('GTiff')
out_ds = gtiff_driver.Create('nat_color.tif',
    in_band.XSize, in_band.YSize, 3, in_band.DataType)
out_ds.SetProjection(in_ds.GetProjection())
out_ds.SetGeoTransform(in_ds.GetGeoTransform())
```

**a later approach (rioxarray):**
```python
# Simpler, more intuitive, scales to cloud
import rioxarray as rxr
import os
from glob import glob

landsat_path = os.path.join("data", "landsat", "crop")
post_fire_paths = glob(os.path.join(landsat_path, "*band*.tif"))

band_1 = rxr.open_rasterio(post_fire_paths[0], masked=True).squeeze()
```

Same goal. Dramatically different approach. If I hadn't updated the
lessons, students would be learning outdated, unnecessarily complex
methods.

### Example 3: the R tidyverse revolution

In R, the shift from base R to tidyverse changed how an entire
generation learns data manipulation. When I started teaching at CU
Boulder, I migrated all lessons from base R to tidyverse.

That migration took months of work. But it made the content more
relevant and aligned with how data science was actually practiced in
2018-2020.

### Example 4: when package updates break everything (in weeks)

But here's the most insidious problem: **even stable tools break lessons
constantly.**

You write a lesson using `rioxarray` version 0.12. It works perfectly.
You publish it.

Three weeks later, `rioxarray` releases version 0.13 with a small API
change. A student updates their environment and tries your lesson. The
code throws an error.

The student is completely capable. The lesson is well-written. But now
the student is sitting there thinking they're not cut out for data
science because they can't get "basic" code to run.

**This happens constantly. Not over years - over weeks and months.**

This is why automated testing isn't optional. Every time a package
updates, your lessons might break. Without continuous testing, you won't
know until frustrated students tell you (if they bother to report it at
all - most just leave).

## Why online lessons fail: no maintenance plan

The pattern I see repeatedly: Someone gets funding (grant, institutional
support, personal time) and creates excellent content - lessons,
tutorials, full courses. Then funding ends after the typical 2-3 year
grant cycle. Content sits unmaintained, slowly breaking as tools evolve.
Users find it via search (because good content ranks well initially) and
get frustrated when nothing works as written.

Grant-funded efforts are especially vulnerable. You get 2-3 years to
create content, then the money disappears. No line item for "maintain
tutorials as ecosystem evolves."

And remember: the ecosystem evolves weekly, not just yearly.

## The solution: treat lessons like software

At CU Boulder, I built the
[earthdatascience.org](https://www.earthdatascience.org) portal
differently. The breakthrough was realizing that **open education
resources need the same maintenance infrastructure as open source
software.**

### Weekly automated testing of every lesson

I built a continuous integration (CI) system that tested each lesson
from beginning to end, every single week. Every lesson's code ran
automatically on a schedule via cron job. If a package update broke the
code, we knew immediately and fixed it before users ever encountered the
problem.

The critical part: the CI didn't just run when we made changes - it ran
continuously every Sunday. When `rioxarray` or `pandas` or any
dependency released a new version, we'd get an alert if it broke our
lessons. We could fix it before students ever hit the problem. This is
standard practice in software development. It should be standard
practice in technical education too.

### Active teaching keeps content current

But testing alone isn't enough. The lessons also supported an active
teaching program where we caught usability issues while teaching and
fixed them immediately. Students got participation credit for reporting
bugs and typos, which incentivized quality control. Content had to
evolve because people's careers depended on learning current skills.

This created a feedback loop: teach → identify issues → fix → test →
repeat.

### The full infrastructure

What made earthdatascience.org sustainable was combining four elements:

**1. Automated testing (the game-changer):** A CI/CD pipeline running
weekly regardless of whether we made changes. Every code block tested
end-to-end, with immediate notification when dependencies updated and
broke things. We caught breaking changes in days, before students were impacted.

**2. Active teaching program (the feedback loop):** The best way to keep lessons current is to actively teach them. As an instructor, you'll catch the issues during the workshop or class. And when the students are working, they'll catch things too. This wasn't a passive approach, I would provide incentives to students to report lesson bugs. This way the content remained relevant and also were further focused on the actual walls that learners would hit when running through the materials.

**3. Team capacity (the reality check):** In each of the previous programs that I built, the program grew to the point that I had a small team of people that helped me maintain the content. Updates were ongoing work, not a one-time
deliverable. Lesson maintenance was budgeted as a core part of our operations.

**4. Open licensing (the sustainability path):** Creative Commons
license meant anyone could fork and update the content. If we stopped
maintaining it, the community could take over. No lock-in or
institutional ownership.

## The hard truth: publication ≠ education

Before you publish open education resources for technical topics,
understand this: **Creating content is 20% of the work. Maintaining it
is 80%.**

The critical questions to ask yourself: Can you test your lessons
regularly? Do you have CI/CD infrastructure that will catch when code
breaks from package updates? Can you fix issues before users find them?

Can you teach from these materials regularly? Real classroom use catches
problems automated tests miss. Teaching forces you to keep content
relevant - without active use, you won't know what needs updating.

What happens when you move on? Is there institutional commitment to
testing and maintenance? Can the community take over the infrastructure?
Or will it just slowly break?

Sometimes a blog post makes more sense. Blog posts represent a moment in
time. Nobody expects them to stay current forever. That's often more
appropriate than pretending to create "permanent" resources.

## The real models for sustainability

Based on my experience, here's what actually works:

**Model 1: Lessons + testing + active teaching.** Build automated
testing infrastructure from day one. Run tests continuously, not just
when you make changes. Use lessons in actual courses or workshops.
Budget for ongoing maintenance, not just creation. Example:
earthdatascience.org reached 2M+ users annually because the content
actually worked.

**Model 2: Contribute to existing tested platforms.** Don't create alone
- contribute to established projects. Leverage existing CI/CD
infrastructure.

**Model 3: Blog posts for point-in-time solutions.** Share your current
approach openly. Date it clearly. Don't pretend it will stay current.
Let search engines and users understand it's a snapshot.

## The bottom line

Open education resources are incredibly valuable for democratizing
access to technical skills. But here's what I learned after 15+ years:

**Treat your lessons like software.** Test them automatically and
regularly - not just when you edit them. Maintain them as tools evolve
(weekly, not yearly). Use them actively so you catch what breaks. Budget
for the full lifecycle, not just creation.

The earthdatascience.org portal reached over 2 million unique users
annually not because the content was perfect at launch, but because we
built the infrastructure to keep it working over time - even as
dependencies updated every week.

**Publication is not the finish line - it's the starting line.**

If you can't commit to testing and maintenance, you're better off
writing blog posts that honestly represent a moment in time rather than
creating "educational resources" that will frustrate learners when they
break.

Before you write that grant or start that tutorial series, build your
CI/CD pipeline first. Your future users will thank you.

---

*Note: Since writing this in 2022, generative AI has added another
wrinkle to this conversation. AI can help maintain content, but it also
accelerates how quickly "standard" approaches change. The maintenance
challenge isn't going away.*
