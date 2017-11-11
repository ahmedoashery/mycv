/*jslint browser: true*/
/*global $, document, window, alert*/

//var btnTop = document.getElementById("scroll-to-top");
//
//window.onscroll = function() {
//    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//        btnTop.style.visibility = "visible";
//        btnTop.style.transition = "visibility ease 0.5s";
//    } else {
//        btnTop.style.visibility = "hidden";
//    }
//};
//
//// When the user clicks on the button, scroll to the top of the document
//function topFunction() {
//    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
//    document.documentElement.scrollTop = 0; // For IE and Firefox
//}



/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#scroll-to-top').fadeIn();
    } else {
        $('#scroll-to-top').fadeOut();
    }
});
$(document).ready(function() {
    $("#scroll-to-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/