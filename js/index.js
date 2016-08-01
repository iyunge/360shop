var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        lazyLoading : true,
    });
$(function() {
    $("img.lazy").lazyload({
    	effect : "fadeIn",
    });
});