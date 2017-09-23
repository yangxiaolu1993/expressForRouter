$(function(){
    var swiper = new Swiper('#citySwpier', {
        pagination: '.swiper-pagination',
        autoplay: 2000,
    });

    var swiper1 = new Swiper('#newSwiper', {
        autoplay: 5000,
        direction: 'vertical',
    });
})