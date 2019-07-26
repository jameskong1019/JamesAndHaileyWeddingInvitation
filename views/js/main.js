$(document).ready(function () {
    // $('body').sakura();

    $('body').sakura('start', {
        blowAnimations: [
            'blow-soft-left',
        ],                   // Horizontal movement animation names
        className: 'sakura', // Class name to use
        fallSpeed: 1,        // Factor for petal fall speed
        maxSize: 14,         // Maximum petal size
        minSize: 9,          // Minimum petal size
        newOn: 300,          // Interval after which a new petal is added
        swayAnimations: [    // Swaying animation names
            'sway-1'
        ]
    });
    typewriter();
    kakaoInit();

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

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

function typewriter() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 1px solid #000; padding-right: 2px;}";
    document.body.appendChild(css);
}

function kakaoInit() {
    Kakao.init('f0bf606f1fec9ca09a1b02e0be32829a');
    Kakao.Link.createCustomButton({
        container: '#kakao-link-btn',
        templateId: 17322,
        templateArgs: {
            'title': '정규와 하람이의 결혼식에 초대합니다.',
            'description': '2019년 9월 28일 12:30분 인천 베스트 웨스턴 로얄호텔.'
        }
    });
}