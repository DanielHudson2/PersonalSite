---
title: How to center a div
postDate: 08th July 2023
date: 2023-07-08
description: Centering a div is something that I see come up a lot, so here's the best three methods to center a div.
---
Centering a div is a common task in web development, and it is important to do it right. In this tutorial, I will show you the best methods to center a div and improve the visual appeal of your website.

### Method 1: Using Margin

One of the simplest ways to center a div horizontally is to use the `margin` property. This method works well for fixed-width divs. We will show you how to do it step by step:

```
div {
    width: 50%;
    margin: 0 auto;
}
```

### Method 2: Using Flexbox

Flexbox is a popular CSS layout model that makes it easy to center elements. This method works well for both fixed-width and variable-width divs. We will show you how to use it:
```
.container {
    display: flex;
    justify-content: center;
}
```

### Method 3: Using Grid

Grid is another CSS layout model that can be used to center elements. This method works well for both fixed-width and variable-width divs. Here is how to use it:
```
.container {
    display: grid;
    justify-items: center;
}
```

#### Codepen example

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="QWJqoxb" data-user="DanielHudsonDev" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/DanielHudsonDev/pen/QWJqoxb">
  How to center a div</a> by Daniel Hudson (<a href="https://codepen.io/DanielHudsonDev">@DanielHudsonDev</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


## Conclusion

It's important to remember that centering a div doesn't have to be complicated. By using the simple, yet effective methods outlined in this tutorial, you can easily center a div and improve the visual appeal of your website. Whether you prefer margin, flexbox, or grid, keeping it simple is the key to success. Don't overcomplicate it - choose the best method for your web page and keep your design clean and easy to navigate.