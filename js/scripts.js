$(function() {
    'use strict';



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



    $('#subNivel').on('mouseover', function() {
        $('.subMenu').slideDown("slow");
    })
    $('.subMenu').on('mouseleave', function() {
        $(this).slideUp('fast');
    })
    $('#subNivel2').on('mouseover', function() {
        $('.subMenu2').slideDown("slow");
    })
    $('.subMenu2').on('mouseleave', function() {
        $(this).slideUp('fast');
    })
    $('.subNivel').on('click', function(e) {
        $(this).addClass('activo');
    })

    //
    // ─── NOSOTROS SLIDER ────────────────────────────────────────────────────────────
    //
    $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 800
    });

});