$(document).ready(function(){
    $("#b1").click(function(){
        let coordTop = $("#Lorem").offset().top;
        $('html, body').stop().animate({scrollTop: coordTop }, 500);
    });
    $("#b2").click(function(){
        let coordTop = $("#Optio").offset().top;
        $('html, body').stop().animate({scrollTop: coordTop}, 500);
    });
    $("#b3").click(function(){
        let coordTop = $("#More").offset().top;
        $('html, body').stop().animate({scrollTop: coordTop}, 500);
     });
});