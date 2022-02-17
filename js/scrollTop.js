$(document).ready(function(){
 $(".arrowUp-icon").css("display", "none");
	$(window).scroll(function(){
		if($(window).scrollTop() > 500){
			$(".arrowUp-icon").fadeIn("slow");
			$(".arrowUp-icon").click(function() {
				$('html, body').stop().animate({scrollTop:0}, 500);
			})
		}
		else {
			$(".arrowUp-icon").fadeOut("slow");
		}
	});
});