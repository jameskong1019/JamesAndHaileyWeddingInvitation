$(document).ready(function() {
    $('#image-gallery').lightSlider({
        gallery:true,
        item:1,
        thumbItem:4,
        slideMargin: 0,
        speed:500,
        auto:false,
        loop:false,
        freeMove: true,
        thumbMargin: 0,
        vThumbWidth: 100,
        prevHtml: "",
        nextHtml: "",
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }  
    });
});