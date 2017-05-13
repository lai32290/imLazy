;(function() {
    function imLazy(image, imageUrl, container, scroller, options) {
        var self = this;
        var lastStatus;

        self.image = image;
        self.imageUrl = imageUrl;
        self.container = container;
        self._scroller = scroller;

        self._scroller.addEventListener('scroll', scrollEvent);

        function scrollEvent() {
            var isShowing = self.isShowing();

            if(lastStatus != isShowing) {
                lastStatus = isShowing;

                if(isShowing) {
                    console.log('show');
                    self.beforeShow();
                    loadImage();
                    self.afterShow();
                }
                else {

                    console.log('hide');
                    self.imageHidden();
                }
            }
        }


        function loadImage() {
            self.image.src = self.imageUrl;
        }
    }

    imLazy.prototype.beforeShow = function(){};
    imLazy.prototype.afterShow = function(){};
    imLazy.prototype.imageHidden = function(){};
    imLazy.prototype.isShowing = isShowing;

    function isShowing() {
        var imageY1 = this.image.offsetTop - this._scroller.scrollTop;
        var imageY2 = imageY1 + this.image.clientHeight + this.image.offsetHeight;
        var imageX1 = this.image.offsetLeft - this._scroller.scrollLeft;
        var imageX2 = imageX1 + this.image.clientWidth + this.image.offsetWidth;
        var containerH = this.container.offsetHeight;
        var containerW = this.container.offsetWidth;

        var inVisionH = numbersBetween(containerH, imageY1, imageY2) || numbersBetween(imageY2, 0, containerH);
        var inVisionW = numbersBetween(containerW, imageX1, imageX2) || numbersBetween(imageX2, 0, containerW);

        return inVisionH && inVisionW;
    }

    function numbersBetween(number, min, max) {
        return number >= min && number <= max;
    }

    window.imLazy = imLazy;
})();
