window.addEventListener('load', function() {

    var options = {
        imageShowed: function() {  console.log('image showed'); },
        imageHidden: function() { console.log('image hidden'); }
    };

    document.querySelectorAll('.image').forEach(function(item) {
        new imLazy(item, item.dataset.src);
    });
});
