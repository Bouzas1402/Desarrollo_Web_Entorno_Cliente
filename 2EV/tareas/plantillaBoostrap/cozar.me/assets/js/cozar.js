$(document).ready(function(){


    function ribbon(){
        $(function() {
            var COOKIE_NAME = 'CZR_ribbon';
            $go = $.cookie(COOKIE_NAME);
            $('.close-ribbon').click(function(e){
                //e.preventDefault();
                if ($go == null) {
                    $.cookie(COOKIE_NAME, 'test', { path: '/', expires: 1 });
                    $('.ribbon').hide();
                }
            });
            if ($go == null) {
                setTimeout(function(){
                    $('.ribbon').fadeIn(500);
                }, 2000);

            }
            else {
                $('.ribbon').hide();
            }
        });
    }

    //ribbon();


// Funciones de Home
    function menus() {
        if ($('body').hasClass("b-about")){
            $('.m-about').addClass("active");
        } else if ($('body').hasClass("b-portfolio")){
            $('.m-portfolio').addClass("active");
        } else if ($('body').hasClass("b-home")){
            $('.m-home').addClass("active");
        } else if ($('body').hasClass("b-contact")){
            $('.m-contact').addClass("active");
        }
    }
    menus();

    function altoFotoHome() {
        var anchoven = $(window).width(),
            altook = anchoven * .4;

        $('#foto').css({
            'height' : altook
        })
    }

    altoFotoHome();

    var isTouch =  !!("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0;

    if( !isTouch ){
        // add class which defines hover behavior


        $('.trig-tit').hover(function(){
            var $this = $(this).parent();
            $('.titulo-sobre').hide();
            $this.find('.titulo-sobre').show();
            $this.find('p.minis-pro a').css("color","#fff");
        });
        $('.titulo-sobre').mouseleave(function(){
            var $this = $(this).parent();
            $(this).hide();
            $this.find('p.minis-pro a').css("color","#000");
        });


    }


    function interiores(){
        if ($('body').hasClass("b-about")){
            $('.skills-uno').delay(500).animate({
                'width': '80%'
            },1000);
            $('.skills-dos').delay(500).animate({
                'width': '75%'
            },1000);
        } else
        if ($('body').hasClass("port-lis")){
            $('.btn-cat').click(function() {
                var $this = this;

                event.preventDefault();
                $('.btn-cat, #showall').removeClass("active");
                $(this).addClass("active");
                $('div').siblings(".post").stop().fadeOut(300, function(){
                    setTimeout( function (){
                        $('.'+ $this.id).stop().fadeIn(300);
                    },300);
                });
            });

            $('#showall').click(function() {
                event.preventDefault();
                $('.btn-cat').removeClass("active");
                $(this).addClass("active");
                $('div').siblings('.post').stop().fadeOut(300, function(){
                    setTimeout( function (){
                        $('.post').stop().fadeIn(300);
                    },300);
                });
            });
        }
        $('.cont-fotos-pro img').removeClass("img-responsive").addClass("img-responsive");
    }

    /*
    FunciÃ³n para agrandar un div a la orilla,
    sacÃ¡ndolo del ROW
    */
    function extendables() {
        $('.extend-left,.extend-right').each(function(i, e) {
            let w = ($(window).width() - $(e).closest('.container').width()) / 2;
            $(e).css({
                position: "relative",
                width: $(this).closest('[class^="col-"]').width() + w + 'px'
            })
            if ($(e).is('.extend-left')) {
                $(e).css({
                    left: '-' + w + 'px'
                });
                if ($(e).is('.extend-right')) {
                    $(e).width($('body').width() + 'px')
                }
            }
        })
    }

    $(window).on('load', function(){
        extendables();
    });


    $(window).on('resize', function(){
        extendables();
    });



    interiores();

});//jQ