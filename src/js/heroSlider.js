// ToDo Базовый код (инициализация слайдера)
// $(function(){
//     $('.hero__slider').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         nextArrow: '.hero__slider-next',
//         prevArrow: '.hero__slider-prev',
//         responsive: [
//             {
//                 breakpoint: 320,
//                 settings: {
//                     arrows: true,
//                     dots: false
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     arrows: true,
//                     dots: false
//                 }
//             },
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     arrows: true,
//                     dots: false
//                 }
//             }
//         ]
//     });
// });



// ToDo Код с инициализацией слайдера и изменением цвета
$(function(){
    // Устанавливаем класс active для первой точки до инициализации слайдера
    $('.hero__dots-item-num').first().addClass('active');

    // Инициализация слайдера
    $('.hero__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '.hero__slider-next',
        prevArrow: '.hero__slider-prev',
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    dots: false
                }
            }
        ]
    });

    // Функция для обновления активного класса
    function updateActiveDot() {
        // Сброс активного класса у всех точек
        $('.hero__dots-item-num').removeClass('active');

        // Определение номера активного слайда
        var currentSlide = $('.hero__slider').slick('slickCurrentSlide');
        var slideNumber = currentSlide + 1;

        // Добавление класса активной точке
        $('.hero__dots-item-num').filter(function() {
            return $(this).text().trim() === slideNumber.toString().padStart(2, '0');
        }).addClass('active');
    }

    // Обработчик события изменения слайда
    $('.hero__slider').on('afterChange', function(event, slick, currentSlide){
        updateActiveDot();
    });
});



// $(function(){
//     // Инициализация слайдера
//     $('.hero__slider').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         nextArrow: '.hero__slider-next',
//         prevArrow: '.hero__slider-prev',
//         responsive: [
//             {
//                 breakpoint: 320,
//                 settings: {
//                     arrows: true,
//                     dots: false
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     arrows: true,
//                     dots: false
//                 }
//             },
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     arrows: true,
//                     dots: false
//                 }
//             }
//         ]
//     });

//     // Обработчик события изменения слайда
//     $('.hero__slider').on('afterChange', function(event, slick, currentSlide){
//         // Сброс активного класса у всех точек
//         $('.hero__dots-item-num').removeClass('active');

//         // Определение номера активного слайда
//         var slideNumber = currentSlide + 1;

//         // Добавление класса активной точке
//         $('.hero__dots-item-num').filter(function() {
//             return $(this).text().trim() === slideNumber.toString().padStart(2, '0');
//         }).addClass('active');
//     });

//     // Устанавливаем начальный активный класс для первого слайда
//     $('.hero__dots-item-num').first().addClass('active');
// });
