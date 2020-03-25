$(function() {
    'use strict';


    /* Remover y mostrar movil menu y esconder menu */
    $('.movile-menu').on('click', function(e) {
        $(this).addClass('esconder'),
            $('#nav').removeClass('esconder'),
            $('#esconderMenu').removeClass('esconder');
    });

    $('#esconderMenu').on('click', function(e) {
        $(this).addClass('esconder'),
            $('#nav').addClass('esconder'),
            $('.movile-menu').removeClass('esconder');
    })



    $('#nav a').on('click', function(e) {
        $(this).addClass('activo');
    })

    $('main article img').on('mouseenter', aumentarImagen);
    $('main article img').on('mouseleave', disminuirImagen);

    function aumentarImagen() {
        $(this).animate({ 'width': '100%' });
    }

    function disminuirImagen() {
        $(this).animate({ 'width': '350px' });
    }

    $('#subNivel').on('click', function() {
        $('.subMenu').slideDown("slow");
    })
    $('.subMenu').on('click', function() {
        $(this).slideUp('fast');
    })
    $('#subNivel2').on('mouseover', function() {
        $('.subMenu2').slideDown("slow");
    })
    $('.subMenu2').on('click', function() {
        $(this).slideUp('fast');
    })
    $('.subNivel').on('click', function(e) {
        $(this).addClass('activo');
    })

    /*Link activo*/
    var linkActivo = location.href;
    switch (linkActivo) {
        case 'http://127.0.0.1:5501/index.html':
            $('.index').addClass('activo');
            break;
        case 'http://127.0.0.1:5501/about.html':
            $('.about').addClass('activo');
            break;
        case 'http://127.0.0.1:5501/blog.html':
            $('.blog').addClass('activo');
            break;
        case 'http://127.0.0.1:5501/contacto.html':
            $('.contacto').addClass('activo');
            break;

        default:
            $('.index').addClass('activo');
            break;
    }

    //
    // ─── NOSOTROS SLIDER ────────────────────────────────────────────────────────────
    //
    $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 800
    });

});