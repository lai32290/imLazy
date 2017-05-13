# im(g)Lazy

`imLazy` is a simple library to let your images lazier, it's a library to do image Lazy Loader, quite simple.

![Screenshot](http://i.imgur.com/hoaqZC8.gif)

## Requirement

Javascript, it's everything you need.

## How to Install:

Download the code and include the file `imLazy.js`

## How to Use:

Include it in your HTML, supposing you have fallowing HTML:

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="imLazy.js"></script>
</head>
<body>
    <img src="https://placehold.it/350x150?text=your+placehold+image" alt="">
</body>
</html>
```

Then use it in your Javascript code:

``` javascript
const img = document.querySelector('img');
const imgUrl = 'http://bit.ly/2qgUBr3';

new imLazy(img, imgUrl);
```

## Why I did with Javascript Vanilla?

The reason why I did with Javascript Vanilla instead of `jQuery` or any other modern framework, is because this way allows me extend it to all of them frameworks quickly.


## Features

- Able to required by NodeJS, React, Angular or any other importable framework.
