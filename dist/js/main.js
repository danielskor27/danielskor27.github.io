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
    $('.holder__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__right" src="icons/arrow_left.svg">',
        nextArrow: '<img  class="slider-arrows slider-arrows__left" src="icons/arrow_right.svg" alt="arrow">',
    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
    var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
        var newVal = oldValue;
        } else {
        var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
        var newVal = oldValue;
        } else {
        var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
  });

});
});
