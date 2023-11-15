+++
author = "Shervin Sahba"
title = "How did I make this website? Hugo and Markdown."
date = "2022-09-01"
description = "Code information for this website"
tags = [
    "hugo",
    "website",
    "css",
    "html",
]
+++

I developed this website using the [hugo](https://gohugo.io/) static site framework. If you're familiar with Github pages, which at one point recommended Jekyll for static site generation, then Hugo is a lateral leap ahead. 

Hugo is an open-source static site generator written in the Go programming language, developed at Google. The content of this site is largely written in Markdown, a very light and human-readable format, and parsed by Hugo to create a static HTML website. There is no server-side processing during runtime, so this results in a clean, easily updateable website with readable text files for the content.

Here's what this post looks like behind the scenes. Simple and clean!
{{< figure src="../../images/20220901-personal-website.png" >}}

After selecting a theme and setting up the framework, I'm mainly editting Markdown and making small tweaks to the source code to maintain the site. If you're looking to make a blog or static site, and you're comfortable handling Markdown and entering a few commands in a terminal prompt (you can do it!), it's worth considering Hugo. Having your blog posts sitting in human-readable text files is enormously powerful. Similarly - and this is a topic for another time - this is why I adore the note-taking app [Obsidian](https://obsidian.md/).

Of course, I should address the theming I have going on as well...

# Theming

This theme is based off of [kaiiiz's monochrome theme](https://kaiiiz.github.io/hugo-theme-monochrome/). I've augmented it with my own CSS, icons, and shortcode functions. For example, I've added glyphs from [feathericons](https://feathericons.com/) and [academicons](https://github.com/jpswalsh/academicons) and [created hugo shortcode snippets](https://gohugo.io/content-management/shortcodes/) to do what Markdown can't, like inject javascript.

# Source code

You can grab the code for my site [on github](https://github.com/shervinsahba/sahba-phd). As always, it's a work in progress.

---
{{< breadcrumbs >}}





