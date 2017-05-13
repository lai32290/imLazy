;(function() {
    function imLazy(image, imageUrl, container, options) {
        var self = this;
        var lastStatus;
        container = [window, document, document.documentElement].indexOf(container) >= 0 ? document.body : container;

        if(options !== undefined)
            for(var key in options) {
                self[key] = options[key];
            }

        self.image = image;
        self.imageUrl = imageUrl;
        self.container = container || document.body;
        self._scroller = self.container == document.body ? document : self.container;
        self._scrollerBarElement = self._scroller == document ? document.body : self._scroller;

        self.containerH = self._scroller == document ? window.innerHeight : self._scroller.offsetHeight;
        self.containerW = self._scroller == document ? window.innerWidth : self._scroller.offsetWidth;

        self._scroller.addEventListener('scroll', scrollEvent);
        scrollEvent();

        function scrollEvent() {
            var isShowing = self.isShowing();

            if(lastStatus != isShowing) {
                lastStatus = isShowing;

                if(isShowing) {
                    self.beforeShow();
                    loadImage();
                    self.imageShowed();
                }
                else {
                    self.imageHidden();
                }
            }
        }


        function loadImage() {
            self.image.src = self.imageUrl;
        }
    }

    imLazy.prototype.beforeShow = function(){};
    imLazy.prototype.imageShowed = function(){};
    imLazy.prototype.imageHidden = function(){};
    imLazy.prototype.isShowing = isShowing;

    function isShowing() {
        var imageY1 = this.image.offsetTop - this._scrollerBarElement.scrollTop;
        var imageY2 = imageY1 + this.image.clientHeight;
        var imageX1 = this.image.offsetLeft - this._scrollerBarElement.scrollLeft;
        var imageX2 = imageX1 + this.image.clientWidth;
        var containerH = this.containerH;
        var containerW = this.containerW;

        var inVisionH = numbersBetween(containerH, imageY1, imageY2) || numbersBetween(imageY2, 0, containerH);
        var inVisionW = numbersBetween(containerW, imageX1, imageX2) || numbersBetween(imageX2, 0, containerW);

        return inVisionH && inVisionW;
    }

    function numbersBetween(number, min, max) {
        return number >= min && number <= max;
    }

    window.imLazy = imLazy;
})();
