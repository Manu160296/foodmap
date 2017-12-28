$(document).ready(function () {
    $('#preloader').fadeOut( 3000, function() {
       $('.bg-preloader__half-left-js').animate({left : '-50%'},300);
       $('.bg-preloader__half-right-js').animate({right:'-50%'},300);
    }) 
});