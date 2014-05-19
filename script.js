$(document).ready(function(){
	for(var i = 0; i < 9; i++){
		$('.container').append("<div class='block'></div>");
		console.log("div appended" + i);
	}

	$('.block').hover(function(){
		var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
		$(this).css('background-color', randomColor);

	});

});