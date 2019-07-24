$(document).ready(function() {
    $('#image-gallery').lightSlider({
        gallery:true,
        item:1,
        thumbItem:4,
        slideMargin: 0,
        speed:2000,
        auto:false,
        loop:true,
        freeMove: true,
        thumbMargin: 0,
        vThumbWidth: 100,
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }  
    });
});