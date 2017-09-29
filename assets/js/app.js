// sanity check
console.log("app.js linked.");

//start doc ready
$(function() {
	var navHeight = $("#header").height();
	$("#main-content").css("padding-top",navHeight + "px");

	// Creating scroll functionality 
	var $navItems = $('#main-nav a');
	$navItems.on('click',function navScroll(event){
		event.preventDefault();
		$scrollDestination = $($(this).attr('href'));
		$scrollAmount = $scrollDestination.position().top - navHeight;
		$('html,body').animate({
			scrollTop:$scrollAmount
		}, 500);
	})

});//end doc ready