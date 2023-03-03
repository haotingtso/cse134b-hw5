# Change Log

## Portfolio Changes

1. In my [education page](/education.html), instead of copying code for each school, I use the template literal in javascript to render the page. And I store the json object in [schools.json](/schools.json). Git Commit: [link](https://github.com/haotingtso/cse134b-hw4/commit/61bcda08f8f546afe26362bd4f5bed0389813561)
2. In HW 3, I used checkbox to store whether the nav bar should show up or not. I changed to use javascript to toggle a class called `show` from the nav bar element. Git Commit: [link](https://github.com/haotingtso/cse134b-hw4/commit/61bcda08f8f546afe26362bd4f5bed0389813561)
3. I didn't style my [project page](/project.html) much in HW 3. Now, I use the template literal in javascript to render the page after fetching a json object in [projects.json](/projects.json). Git commit: [link](https://github.com/haotingtso/cse134b-hw4/commit/c97f1e6fbcc5f1ab42085fc2bf9953f4527f8e95)

## 3rd Party Script

I added Google Analytics to every page of my website, so that I can see the collected data about page views, scrolls, outbound clicks, etc.
What I did was

1. Created a Google Analytics account
2. Add a data stream for the netlify website on Google Analytics
3. Add two script tags right at the top of the `head` element

```html
<!-- Google tag (gtag.js) -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-7GP5R969RT"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-7GP5R969RT");
</script>
```
