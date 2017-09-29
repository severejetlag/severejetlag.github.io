// sanity check
console.log("app.js linked.");

//start doc ready
$(function() {
	var navHeight = $("#header").height();
	console.log(navHeight)
	$("#main-content").css("padding-top",navHeight + "px");

});//end doc ready