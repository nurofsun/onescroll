OneScroll
------------
Scrolling your page without frustration, yet an alternative for fullpage.js 

## Basic Usage
#### With Production Build
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Onescroll Demo</title>
  <!-- load the css (required) -->
  <link rel="stylesheet" href="dist/css/onescroll.css" media="all">
</head>
<body class="onescroll">
  <div class="onescroll-container">
        <header class="onescroll-section"></header>
        <main class="onescroll-section"></main>
        <div class="onescroll-section">
        
        </div>
        <div class="onescroll-section">
        </div>
        <!-- you can add the .onescroll-section as much as you need -->
  </div>
  <!-- load the js file (required) -->
  <script src="dist/js/onescroll.js"></script>
</body>
</html>
```

```html
...
<script src="dist/js/onescroll.js"></script>
<!-- below script tag that load onescroll.js -->
<script>
const onescroll = new OneScroll('.onescroll');
onescroll.init();
</script>
...
```

#### With Bundler (Webpack, Parcel)
The HTML Markup should similar with this one.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Onescroll Demo</title>
</head>
<body class="onescroll">
  <div class="onescroll-container">
        <header class="onescroll-section"></header>
        <main class="onescroll-section"></main>
        <div class="onescroll-section">
        
        </div>
        <div class="onescroll-section">
        </div>
        <!-- you can add the .onescroll-section as much as need -->
  </div>
  <script src="public/js/app.js"></script>
</body>
</html>
```
Import the style on your sass/scss file
```css
@import 'node_modules/@nurofsun/onescroll/src/sass/onescroll.sass'
```
Import module on you entry file, assume `app.js`
```js
import OneScroll from 'onescroll';
const onescroll = new OneScroll('.onescroll')
onescroll.init();
```
