/*jslint plusplus: true */
/*global console, alert, prompt */
/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    
    // triggle nice scroll plugin
    
    $('html').niceScroll();
    
    // change header height
    
    $('.header').height($(window).height());
    
    // humberger button animation  
    
    $(" .col").click(function () {
        $("ul").toggle(1000);
    });
    
    // scroll to features
    
    $('#arrow').click(function () {
        $('html, body').animate({
            scrollTop: $('.Features').offset().top
            
        }, 1000);
    });
});