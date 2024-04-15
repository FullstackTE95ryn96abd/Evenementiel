$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px', // Espacement entre les images
        prevArrow: false,
        nextArrow: false,
        variableWidth: true,
        focusOnSelect: true,
        useTransform: true,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)', // Easing pour une animation fluide
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    });
});
