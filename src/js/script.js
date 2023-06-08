$(document).ready(function(){
    $('.carusel__inner').slick({
        speed: 1200,
        adaptiveHeight: false,
        mobileFirts: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src="icons/leftarrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="icons/rightarrow.png"> </button>'
        });
    
        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
            $(this)
                .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
                .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });


        function toggleSlide (item){
            $(item).each(function(i){
                $(this).on('click', function(e){
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                } )
            })
        }
        toggleSlide('.catalog-item__link')
        toggleSlide('.catalog-item__back')

        $('[data-modal=consultation]').on('click', function(){
            $('.overlay, #consultation').fadeIn('slow');
        });

        $('.modal__close').on('click', function(){
            $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
        });

        $('.button__item').each (function(i){
            $(this).on ('click', function(){
                $('#order .modal__descr').text($('catalog-item__subtitle').eq(i).text());
                $('.overlay, #order').fadeIn('slow');
            });
        });

        function validateForms(form){
            $(form).validate({
                rules:{
                    name: "required",
                    tel: "required",
                    email:{
                        required: true,
                        email: true
                    }
                },
                messages: {
                    name: "Укажи свое имя",
                    tel: "Введи свой номер",
                    email:{
                        required: "Хотим тебе ништяки на почту присылать",
                        email: "Не наебешь"
                    }
                }
            });
        };
        validateForms('#consultation-form');
        validateForms('#consultation form');
        validateForms('#order form');
});