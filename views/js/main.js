$(document).ready(function () {
    $('#image-gallery').lightSlider({
        gallery: true,
        item: 1,
        thumbItem: 4,
        slideMargin: 0,
        speed: 500,
        auto: false,
        loop: true,
        freeMove: false,
        thumbMargin: 0,
        vThumbWidth: 100,
        onSliderLoad: function () {
            $('#image-gallery').removeClass('cS-hidden');
        }
    });


    var weddingLocation = new naver.maps.LatLng(37.4659389, 126.709713),
        map = new naver.maps.Map('nmap', {
            center: weddingLocation.destinationPoint(200, -50),
            zoom: 11,
            scaleControl: false,
            logoControl: false,
            scrollWheel: false,
            draggable: false
        }),
        marker = new naver.maps.Marker({
            map: map,
            position: weddingLocation
        });
    
});