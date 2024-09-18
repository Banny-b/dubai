// Инициализация слайдера
$('.projects__slider').slick({
    // firstMobile: true,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                rows: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 1921,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }
    ]
});