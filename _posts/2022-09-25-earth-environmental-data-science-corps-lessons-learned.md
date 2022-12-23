---
title: "Lessons Learning from Working With Tribal And Hispanic Serving schools to Build Earth and Environmental Data Science Skills"
excerpt: ""
layout: single_law
permalink: /lessons-learned-working-with-tribal-hispanic-serving-schools-earth-data-science-corps
author_profile: true
header:
  overlay_color: "#333"
categories:
  - deia
tags:
  - teaching
  - deia
  - open-education
  - data science
  - earth and environmental data science
comments: true
---

## Building earth and environmental data science capacity at tribal and hispanic serving schools - post 2

In a previous blog, I introduced a program that I developed in 2019 
called the Earth and Environmental Data Science Corps. This program
targeted students and faculty at tribal and hispanic serving 
institutions. It's goal was to build capacity to teach (and learn)
earth and environmental data science at these institutions (and beyond).

In that blog I talked about:

*  what earth and environmental data science is (and why it's important), 
* the various program components that drove the earth and environmental data science corps
* I broadly discussed what elements worked and which ones 
could be improved
* the importance of evaluation and adaptive program development and design. 

## Here i'll discuss infrastructure that we used in the program and lessons learned
Here i'll talk about a few more things

1. Some of the infrastructure that supported that program. 
2. Some key lessons learned from designing and running that program

I hope that these posts are useful to others building programs in 
this space. I'm definitely using what I learned here as I 
develop the diversity components of [pyOpenSci (my current Python open source software project that also supports open science!](https://www.pyopensci.org/)

## Democratizing access to earth and environmental data science skills through open education 


### Publishing lesson content as open education resources

All of the content used in the program was either already published on on the earthdatascience.org website. I had I spent a few years designing and building this website to support our professional
graduate program.

This portal had hundreds of lessons focused on earth and environmental 
data science skills. I had hoped that if we published all of the EDSC program materials online, that others could benefit from them. 

That the program could then, at some levels, scale to hundreds and thousands of people.

## An online environment where students and faculty could code

One of the biggest challenges when teaching beginners to code is 
environment setup. This challenge is particularly large if you are using 
Python as your choice programming language. [Python environments are notoriously tricky to setup.](/why-tested-python-environments-matter-for-science). Further, we couldn't 
expect every student to have a computer that they could use to program on! 

I had already built a JupyterHub to [support the professional 
graduate program that I designed and was teaching at the time](https://www.colorado.edu/geography/earth-data-analytics-foundations-professional-certificate). So, I thought we could use that 
same hub to support our students and faculty. 

<div class="notice--success" markdown="1">
### What is a JupyterHub?
 A [JupyterHub](https://jupyter.org/hub) is an online
cloud based environment that provides Jupyter notebooks and memory and processing
resources that you allocate for students to use. The benefit of this was that 
it removed the barrier of a student needing to have a particular type of computer,
and needing to install software on that computer. In fact the Jupyter hub works 
on a tablet or any laptop with internet access.
</div>

I quickly realized that the JupyterHub was not a good long term solution for this EDSC program that served small schools with less resources. 

Why? 

We were maintaining it. And it wasn't easy or cheap to maintain outside of a funded program. 

Simply put, students and faculty couldn't take the JupyterHub home with them. 

This meant that faculty couldn't easily add this curriculum to their courses without first knowing how to 

1. setup python environments and 
2. support environment issues that students would inevitably have. 

They were dependent on us. Our JupyterHub was no a solution for 
empowering. Nor could it be used to build capacity to teach at other 
schools! Not being able to take the hub home with them was even frustrating 
for our professional students!

### A truly cloud based portable solution - Google Colab. 

To resolve the issues above, I started to explore using Google Colab.  [Google Colab](https://colab.research.google.com/) is a Google solution. It allows you to launch Jupyter Notebooks from within Google Drive. You can even store data on drive and access it in these notebooks. 

And you can install Python tools too. 

I'll share the details of 
compute environments for teaching - specifically as it relates 
to supporting smaller schools in another blog. But Google Colab was a winning solution for this program and our professional program. More on that coming in the future!
## Earth and Environmental Data Science Corps program design

In the end - after working closely with faculty, we modified the 
entire program design to meet the needs of all involved. But also we were
hit with another surprise - 

Hello Pandemic! 


<figure>
	<a href="/images/blog/covid-meme-zoom-meetings.png" style="width:120%">
    <img src="/images/blog/covid-meme-zoom-meetings.png" alt=""></a>
	<figcaption> The COVID-19 pandemic official hit the United States in March 2020. Our program started at the end of April 2020. Let #ZoomLife and quarantine begin. <a href="https://static.thehoneycombers.com/wp-content/uploads/sites/4/2020/03/Funny-Coronavirus-Memes-2.png">src</a></figcaption>
</figure>

1. First, the program began in April 2020. The COVID 19 pandemic forced our hybrid-design program that I had researched and collected data on and improved for  several years, into a fully online environment. Given it was a quick change, I went to the tool I knew best - Zoom to teach content. SPOILER ALERT: Zoom was not good enough! More on why this wasn't ideal in a separate blog. Hybrid teaching CAN work if done well using the right tools and right design.  
1. Second, all students were stressed given the pandemic. Underserved and underrepresented groups were hit EVEN HARDER. None of us were prepared. 

I was also stressed; as was my team! 
  
### Adaptive program development: modifying your programs as you go
We modified the program to be a summer program and quickly learned that Zoom is 
not an ideal way to mimic a classic classroom teaching environment. These 
students needed to work in small groups and to have 1:1 interactions with 
faculty to feel supported. We lost a few students in the first year because of 
this.

<figure>
	<a href="/images/edsc-timeline-activities.png">
    <img src="/images/edsc-timeline-activities.png" alt="Timeline showing when each program element would occur starting with the carpentries training, then our training and then an applied internship. The program ultimately looked very different once we actually implemented it but conceptually was this type of design."></a>
	<figcaption>Our original program design was a 3-semester program. After 
  working more closely with faculty and considering resource challenges at the 
  schools, we opted to create a summer program to make student and faculty 
  participation easier. Students often seek employment in the summers but are 
  busy during the semester with school, family and often other jobs.</figcaption>
</figure>

In years two and three we adjusted the program in many ways. Lessons learned
are discussed below.

## Core Lessons Learned From This Program

Working with under-served institutions, students and faculty requires 
care, time and consideration. We learned a tremendous amount from the 
faculty and students who participated in this program. 

<div class="breakout" markdown="1">

### 1. Design & Build the Program With the Participants From the Beginning 
I made the mistake of starting work on the proposal only weeks before it was due.
It was my first NSF proposal and I didn't account for the time needed to truly 
build relationships with our partners and include them in the core design. Because 
of this, I had to redesign the program once we began actual work because it was
important to us that the faculty and students felt invested in the program and 
gained a large return from it.

Lesson learned: Don't try to design a training program without involving the 
students and faculty.
While you might have considerable expertise in teaching, program design, timing of 
activities, how content is delivered may all need to be adjusted depending upon
your target audience.  
</div>
<div class="breakout" markdown="1">
### 2. Allow for considerable amount of extra time when working with these communities 

This time is critical to building trust with these communities. Spend time with 
students individually and in small groups. Get to know the issues they are dealing 
with that may get in the way of learning and participation. Accommodate them
in every way possible. This all takes time to do well.  

</div>
<div class="breakout" markdown="1">
### 3. Be Flexible to Adapt when things don't work
I am a strong believer in adaptive program design and development. What this means
is develop surveys for participants and collect data often and frequently. Then 
adapt and change based upon their needs and feedback. Finally let them know
when you are making changes and why (because of their helpful feedback). 
This not only improves your program but also helps participants feel more a part
of the entire process rather than feeling "left behind".

</div>
<div class="breakout" markdown="1">
### 4. Mentorship and Check-ins Are Critical
Set up a support system for students is critical for project success. This 
support system could be multi-tier. In our case we invited students from 
previous years of the program to mentor in following years. While student can 
look up to their instructors, it's even more powerful to learn from and receive 
support from their peers - particularly if they identify with the background of 
their peers. 

Also ensure that student have structure. Schedule check-ins with faculty and instructors
regularly. 

</div>
<div class="breakout" markdown="1">
### 5. Working Online is Hard - Zoom Doesn't Cut It

When I talk with others about programs that have DEIA goals, 
the immediate response is often "oh, online won't work".

While I do think there is a place for in person interactions.
And they are important. I think that immediate response to online learning
does not take into consideration, one thing:

> teaching online requires a redesign of your curriculum and 
> how you teach. 

I will spend more time talking about this in another blog.
In our case, we had to move our entire program online with a few
weeks notice due to the pandemic. So we learned the hardway what worked and what didn't work.

However, it helped us that in our professional program, I was already 
teaching in a hybrid in person / online setting. Thus I had adapted
a lot of my content to support online participants. 

In year two of the program we moved from Zoom to an interactive online platform
called Spatial Chat. I had started using this platform in my 
Earth Data Analytics professional program courses and found it to be a 
great way to recreate the classroom environment where ou can check in with students
individually or small groups. The platform also allows student to work together 
dynamically during class and share screens.  

We all learned a lot during the beginning of the pandemic. But spatial chat 
or something like it, is one tool i'll take with me and use for the forseeable future. 

</div>
<div class="breakout" markdown="1">
### 6. Make Sure You Have A (Relatively) Fail-Proof Compute Environment
In the early days of teaching earth and environmental data science in our professional
graduate program, I created a 
Jupyter Hub (Many thanks to Tim Head and Karen Cranston for help with that effort!)
that we hosted on Google CLoud for students. What I loved about 
this platform is I was able to skip over troubleshooting student issue with 
their compute environment during class. The platform just worked. However, the 
problem with this environment in a non-paid environment such as our work with the 
faculty at these smaller schools, is they are left without a compute environment
when the program ends.

Because of this we moved all of our programs to Google Collab which allows students 
and faculty to take all of the resources with them. Since we were using Python,
that meant Jupyter Notebooks that were stored in participants Google Drive (now
Google Workspace). This is a huge win for everyone - especially faculty who wish
to adapt these content into their own courses. 
</div>

## Wrapping This Up
So the above is in a nut shell some things I learned from this program. While
I pointed out a lot of the pain points above, we had some great successes too.
Several of our tribal students went on to Graduate school and were incredible 
mentors and advocates during their time in and after the program. I will never 
forget my time designing and launching this program. All of the amazing people 
I got to know and work with and how much I learned from them all.

## Notes 
Some of the faculty and students that we worked with on this project are 
listed below *(because I left CU and was unable to work on the project as a lead
PI after the departure due to challenges with CU policy, some names are 
missing from this list as leads at each school changed!! These are people whom 
I worked closely with while there)*:

* Elisha Yellow Thunder (A true leader and rock star, Oglala Lakota College)
* Jim Sanovia (Oglala Lakota College)
* David Parr (Metro State University) 
* Jeremy Guinn (United Tribes Technical College - now at NSF)
* Emily Biggane (United Tribes Technical College), 
* Nate Quarderer (CU Boulder,  who ran and taught a significant 
portion of the program in years 2 and 3 ),
* Bill Travis (CU Boulder faculty representative)
