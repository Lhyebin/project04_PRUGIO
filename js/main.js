$(function () {

    // 메인비쥬얼 다음페이지 웨이트 타임
    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        $('.main_visual .slide_num span').text(c ? (c + 1) : 1);
        $('.main_visual .slide_num strong').text(s.slideCount);

        $('.main_visual .menu li').eq(0).addClass('on')
        $('.main_visual .menu li').eq(c).addClass('on')
            .siblings().removeClass('on');

        $('.main_visual .menu li').on('click', function (e) {
            e.preventDefault();
            const idx = $(this).index(); //0, 1, 2
            $('.main_slide').slick('slickGoTo', idx)
        })
    });

    // 메인비쥬얼 다음페이지 자동
    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

    // 메인비쥬얼 다음페이지 화살표
    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    })
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    })





    // <분양 안내 자동 슬라이드>
    $('.impor').slick({
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    // 분양 안내 화살표← →
    $('.impormation .arrows .left').on('click', function () {
        $('.impor').slick('slickPrev')
    })
    $('.impormation .arrows .right').on('click', function () {
        $('.impor').slick('slickNext')
    })




    // <위로 올라가는 버튼>
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    })

});