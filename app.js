window.addEventListener('load', function() {
    var img = document.querySelector('img');
    var imgUrl = img.dataset.src;
    var container = document.querySelector('.container');

    new imLazy(img, imgUrl, container, container);
});
