---
title: "Python's Reproducibility Crisis: And How We Fixed It for Open Science Education"
date: 2021-09-05
excerpt: "What I learned building tested Python environments at scale—and how it shaped the way we teach open science at pyOpenSci today."
image: /images/science-communication/tested-python-environments.png
categories:
  - data-science-dev-ops
tags:
  - python
  - conda
  - data-science
  - testing
  - open-source
  - open-education
  - reproducibility
---

## The problem nobody (or everybody?!) talks about

We obsess over reproducible analysis, version control, and open data. But there's an earlier barrier that kills scientific momentum before research even begins: **installation friction**.

If a scientist can't install your tools, your open science dies on arrival.

I learned this the hard way when I switched from R to Python while building data science education programs. What started as a teaching frustration became a lesson in scientific infrastructure—one that shapes how we approach Python education at [pyOpenSci](https://www.pyopensci.org) today.

## When installation becomes a barrier to science

Picture this: You're teaching a workshop to ecologists who need to process spatial data. They're motivated. They've carved out time. They're ready to learn.

Then they spend three days trying to install GDAL.

> "If I can't install software, how can I code?"
> — Every student dealing with imposter syndrome

This is how you lose people. Not because the science is too hard. Not because they lack aptitude. But because the **infrastructure fails them before they write a single line of code**.

## My crash course in Python's fragmentation

### R came with a safety net

When I worked at NEON building their data skills program, I started with R. It just worked *out of the box*. 

*(Does anyone actually put software in boxes anymore?)*


The community had built incredible infrastructure. I could send workshop setup instructions, and students would show up ready to learn.

Sure, GDAL was occasionally problematic. But I figured it out.

### Python was a different story

My move to Python at CU Boulder was less graceful. Survey data told me the earth science community was standardizing on Python. Industry used it everywhere. Students needed it professionally.

But installing Python packages? That was a nightmare.

Should I use `pip` or `conda`? Which channel—`conda-forge` or `defaults`? Wait, mixing them causes conflicts? 

{{< figure src="/images/python/xkcd-python-environment.png" alt="XKCD comic showing a precarious Python environment held up by a single leg, labeled as a project maintained by one person in Nebraska since 2008" caption="Environment pain when working with Python is real. However, Python is an awesome programming language that is broadly used across disciplines. So it's worth figuring this all out. Source: xkcd." >}}

I'd install one package. Something else would break. I'd fix that. Something else would fail.

### GDAL: And tears, lots of tears

{{< figure src="/images/python/gdal-meme-filipe.png" alt="Meme showing someone smoking a cigar with text: One Does not simply pip install GDAL" caption="Meme created by colleague Filipe Fernandes about installing GDAL in a Python environment. Now imagine students new to Python trying to get set up for spatial data analysis... ouch!" >}}

Why do you hate me, GDAL? Whyyyyy?

## Building a solution: The Earth Analytics environment

I realized this wasn't just a teaching problem—it was a **reproducibility crisis in disguise**.

If students couldn't install packages reliably, how could researchers share reproducible workflows? How could we expect open science when the entry point was broken?

### The breakthrough: Tested, cross-platform environments

Working with colleagues who knew a lot about these topics, I built the [Earth Analytics Python environment](https://github.com/earthlab/earth-analytics-python-env). The magic wasn't the environment file itself—it was being able to **test how our lessons ran on different systems**.

We tested on:
- Linux
- Mac  
- Windows

Before students even tried to install, we knew where the pain points were. We could troubleshoot *before* class, not during.

This changed everything.

### What I learned

**Environment management isn't just operations—it's open science infrastructure.**

A tested, reproducible environment means:
- Students spend time learning, not debugging installations
- Researchers can actually reproduce your analysis
- Your future self can return to work months later without starting over
- Scientific tools become genuinely accessible

## How this shapes modern practice at pyOpenSci

These lessons aren't just history—they're the foundation of how we approach Python education and open science infrastructure at pyOpenSci today.

### Locked environments for teaching & learning

When we teach, we use **locked environments**—typically Docker containers like GitHub Codespaces. Check out our [packaging workshop](https://github.com/pyOpenSci/pyopensci-workshop-create-python-package) that runs entirely in a Codespace.

Why? Because students should focus on learning packaging, not fighting their local setup. Clear pathways to working environments means they get to coding faster.

### The tooling has evolved (The principles haven't)

Ten years ago, conda-lock was our salvation. Today we have:
- **UV** for pip-based workflows
- **Pixi** for conda-based workflows  

Locking environments is now easier than ever. But it's just as critical.

**The principle remains:** If you want your workflows to be reproducible, lock your dependencies. If you're building applications, lock files aren't optional—they're essential. If you're building software... well that is a bit more complex. More on that another time.

At pyOpenSci, we work directly with maintainers of these tools. We understand that the Python packaging ecosystem is complex, and making it more accessible is an ongoing effort we're invested in.

### When to lock, when to flex

Not every environment needs the same approach:

**For teaching:** Lock them down if you are in an online environment like JupyterHub. But also, sometimes, flexible environments that resolve to recent, compatible versions can work too. Update them regularly. Test them constantly.

**For research workflows:** Lock everything when you need someone (including future you) to reproduce exact results.

**For applications:** Always lock. Your users need predictability.

## The fundamentals: environment management principles

Whether you use `conda`, `pip`, `uv`, or `pixi`, the core concepts remain the same.

### What is a Python environment?

A Python environment is an isolated space containing specific package versions. Different projects can use different versions without conflicts.

### Why environments matter for reproducibility

- **Isolation**: Avoid version conflicts between projects
- **Reproducibility**: Share exact setup with collaborators
- **Safety**: Test new packages without breaking your working setup
- **Consistency**: Ensure everyone on your team or in your lab uses similar or identical environments

### The lock file pattern

Modern Python tools use lock files to ensure reproducibility:

```bash
# With uv
uv lock  # creates uv.lock from pyproject.toml
uv sync  # installs dependencies from uv.lock

# With pixi
pixi install  # reads pixi.toml, creates pixi.lock

# You can use conda-lock too but pixi does it all for you
```

**The pattern:** A human-editable file (what you want) → a lock file (exact versions) → reproducible installs.

For more on managing Python environments, see:
- [uv documentation](https://docs.astral.sh/uv/)
- [pixi documentation](https://pixi.sh/)
- [conda documentation](https://docs.conda.io/)

## The Bigger Picture

Reproducibility doesn't start when you write code. It starts when someone tries to run your code for the first time.

Installation friction isn't a minor inconvenience—it's a fundamental barrier to open science. Every researcher who gives up during installation is lost potential for collaboration, validation, and building on your work.

**At pyOpenSci, we're working to lower that barrier.** Through better tooling, clearer documentation, and engaging directly with the Python packaging ecosystem, we're making scientific Python more accessible.

Because open science only works when people can actually access it.

### Learn More

- [pyOpenSci Python Package Guide](https://www.pyopensci.org/python-package-guide/)
- [Our packaging workshops (with Codespaces!)](https://github.com/pyOpenSci/python-package-guide)
- [Earth Analytics Python Environment](https://github.com/earthlab/earth-analytics-python-env) (the original tested environment)
