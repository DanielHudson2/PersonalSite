---
title: The never ending dilema of woocommerce search
postDate: 15th May 2023
date: 2023-05-15
description: In this post by Gloucestershire Web Developer Daniel Hudson the various options for providing search functionality for WooCommerce is dicussed.
---

Through the many years I've been working on WooCommerce sites one thing that's always been a bit of an issue is finding a search that works fast and let's you fully tweak the UX to make it optimal for the user.

There are many plugins for this of course, the one we tend to most commonly use is Yith WooCommerce Ajax Search. It's got good flexibility on what you can configure for search and how it's displayed, but if your store has a lot of products on it then things slow down. It suffers the same issue most search plugins also suffer, it has to query the database. 

Querying the database can be fine when the site isn't packed with products but it quickly can be a noticeable slowdown for users and when speed is crucial this could easily start to effect conversion rates.

Enter Algolia, it's a platform dedicated to search with an abundance of customisation and flexibility in how your data is searched to fine tune it to your exact needs.

Algolia works by taking a feed of your products and storing it on its own servers that can be queried with it's API, we built a plugin for this which keeps everything up to date in Algolia as product updates are made within WooCommerce, as every WooCommerce site can be different we've made it so we can tailor the solution to any WooCommerce site.

The freedom just being able to query the API and getting any of the data out we need in specific places means we can design and build any search interface we want and if something's not quite right we can just tweak it til it's working smoothly.

Algolia search can take search experiences leaps and bounds over what most search plugins can offer finally taking speed to near instant results and allowing bespoke search experiences to be built tailored to specific needs.
