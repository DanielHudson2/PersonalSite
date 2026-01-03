---
title: Rewriting My Site
postDate: 03 January 2026
date: 2026-01-03
description: A quick post about rewriting my site as a project over Christmas.
shortDescription: As a project for over Christmas I decided to rewrite my site as its been a few years since I did any updates on it.
---
I decided that I wanted a project to work on over the Christmas break and as i've not put any updates on my site for a while now I decided it was a good opportunity to rewrite it with some more modern tooling and give the design a refresh. While i'm not a designer i'm happy with how it came out.

## Tooling
The original site was built with Eleventy as a static site generator, i'm still really happy with how easy Eleventy is to use so I stuck with it, the version was a bit out of date so I upgraded it and also reworked the config by splitting all my custom stuff into plugins to make it more modular.

Previously I used a plugin to compile Sass for the styling, but as CSS has come a long way since I decided to just use that but I kept it split into mulitple files like a Sass approach to keep things modular, there's a few things that I missed such as mixins and being able to define breakpoints as a variable but those can be worked around. As I utilised file imports and CSS nesting I created a custom plugin to process all the CSS with PostCSS meaning I could write it in the more modern way but still compile it into a format that would work for the majority of browsers.

I kept my JavaScript modular, writing classes in individual files for each feature of the site and importing them into a single file which I then, using another custom plugin, compiled using ESBuild to allow me to minify it. I opted to writing classes to keep the files as clear as possible so i'll easily be able to pick them up again down the line.

## Design
I didn't want to do too much with the design of the site as i've always like it, but I did want to evolve it to makes this a bit more consistent and professional. You'll find much more consistent spacing and hopefully a clear visual hierarchy now.

I put some more thought into animation but didn't want to go overboard, so in places like the menu and on buttons there are simple but impactful hover styles. The homepage hero title is also animated to help give the page a bit of life.

Something I wanted to do originally but never got round to was a dark mode toggle so I made sure I got it in this time, opting to swap the colour palette around to a alternative colour within the same palette as the defaults (I designed the site with dark mode in mind) whilst ensuring the colours are still accessible.

Speaking of accessibility i've also ensured that there are clear focus colours on the menu, buttons and links to help keyboard users navigate and also that key presses will work in place of clicks.

## Final Thoughts
Hopefully you'll agree that i've improved the site (though if you're finding it for the first time you wouldn't know any different anyway), i'm very happy with how it came out and it was an enjoyable project to work on over the festive break. I want to keep working on it and writing more blog posts so hopefully I can keep up the momentum i've gained.
