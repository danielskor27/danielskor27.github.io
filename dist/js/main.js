$(function(){

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__right" src="icons/arrow_left.svg">',
        nextArrow: '<img  class="slider-arrows slider-arrows__left" src="icons/arrow_right.svg" alt="arrow">',
        asNavFor: '.slider-dots',
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScrol: 4,
        asNavFor: '.header__slider',
    });

    $('.surf-slider').slick({
       slidesToShow: 4,
       slidesToScrol: 1, 
       prevArrow: '<img class="slider-arrows slider-arrows__right" src="icons/arrow_left.svg">',
       nextArrow: '<img  class="slider-arrows slider-arrows__left" src="icons/arrow_right.svg" alt="arrow">',
       asNavFor: '.slide-map',
    });

    $('.slide-map').slick({
        slidesToShow: 8,
        slidesToScrol: 1, 
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
    });
    $('.travel__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__right" src="icons/arrow_left.svg">',
        nextArrow: '<img  class="slider-arrows slider-arrows__left" src="icons/arrow_right.svg" alt="arrow">',
    });
});