// sanity check
console.log("app.js linked.");

var ajaxParams = {
	method: 'GET',
	url:'https://api.github.com/users/severejetlag/repos',
	dataType: "jsonp",
	success: onGitSuccess,
	error: onGitError
}

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
		}, 1000);
	})
	$.ajax(ajaxParams);
});//end doc ready

function onGitSuccess(json){
	json.data.forEach(function(repo, i){
		console.log(repo);
		if(!repo.archived){
			$('#work ul').append(`
				<li>
					<a href="${repo.html_url}">
						${repo.name}<i class="fa fa-code" aria-hidden="true"></i>
					</a>
				</li>
				`)
		}
	})
}

function onGitError(){
	console.log('sad');
}
