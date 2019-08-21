---
title: "Teaching Earth Data Science: Blended Online and In-Person Learning Empowers More Students to Learn"
layout: single
classes: wide
excerpt: "Empower students to participate in class in the way that works best for them."
permalink: blended-online-inperson-teaching-earth-data-science/
author_profile: true
feature_row_teaching:
  - image_path:
    alt: "customizable"
    title: "Diverse Classrooms"
    excerpt: "Courses contain a mixture of undergraduate, graduate, non-traditional and professional students: This diversity in the classroom leads to unique discussions as students learn from each other."
  - image_path:
    alt: "customizable"
    title: "Interdisciplinary"
    excerpt: "Students represent a range of disciplines: Interdisciplinary classrooms can present challenges but also they force students and instructors to learn a common language."
  - image_path:
    alt: "customizable"
    title: "Students chose how they want to learn"
    excerpt: "Students chose how they wish to participate in the class: Our courses are presented using both online and in person delivery. All materials are published online as open education resources."
category: "blended-online-inperson-classrooms"
header:
    overlay_image: images/vincent-guth-Sdc35GnHgvI-unsplash.jpg
    overlay_filter: 0.6
    actions:
        - label: "Twitter"
          url: "https://twitter.com/leahawasser"
        - label: "GitHub"
          url: "https://github.com/lwasser"
---

Over the course of ~20 years, I have developed a model for teaching technical
data skills that is flexible and scales to support impacting more people. My
inspiration for teaching has come from many places including:

* Teaching Landscape Architecture studios which were highly collaborative, open and include review at all stages.
* The Carpentries model for distributed workshops and open online workshop materials.
* My own experiences learning data skills as a graduate student in ecology.

<div markdown="1" class="notice--primary">

## Teaching in Blended Online and In-Person Classrooms
All of the courses in our Earth Data Analytics Professional Certificate are taught
in a blended classroom setting.

{% include feature_row id="feature_row_teaching" %}

</div>

Blended classrooms can be highly effective as they empower students to participate
in course, in the way that works best for their schedules, learning style and
resources. In many cases online programs allow students who may not otherwise
have access to cutting edge programs to participate - particularly if lessons
associated with the class are published as open education resources.

In our Earth Analytics courses, students can chose how they want to participate:

### Student can chose to participate asynchronously:
  * Students can watch recordings of each class.
  * Students can also work through the course using the online open education resources posted which contain all learning materials presented in class.

### Students can participate synchronously by:

  * Attending class in real time
  * Attending class remotely using Zoom (similar to Skype)

While this type of classroom structure can present teaching challenges, we have
found that diverse, blended classrooms enrich the learning experience and are
well worth the challenge.


<div markdown="1" class="notice--warning">
## Classrooms in the Cloud: Jupyter, JupyterHub and Open Reproducible Science

There are many challenges inherit to teaching data-intensive science. They include:
* Installing tools on individual computers can be complex and thus consume hours of time.
* Some students don't have sufficient compute power to work with the data needed in the course.

We have built a `JupyterHub` and using google cloud, we provide our students with
a cloud based environment where they can work on both in class activities and
their homework. This environment allows students to focus on learning programming
rather than fighting with their computer setup. Some students regardless chose to
work on their own computers while others chose to use the hub.

### Cloud Based JupyterHub Promotes Reproducibility

One of the added benefits of a cloud based classroom is that students are forced
to think about reproducibility. The same notebook that runs on their local machine
should also run on the hub.

</div>

## Autograding
Teaching earth data science is time intensive. To try to save some time, we are
using and have contributed new functionality to `nbgrader` and `github classroom`
to autograde some aspects of student assignments.

We hope to integrate this in the future with Continuous Integration (CI) that will
support real-time feedback for students while also introducing them to CI and
testing.

## Related Blog Posts
