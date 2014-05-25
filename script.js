$(document).ready(function(){

	console.log("JQuery loaded.");

	$("input[type='button']").click(function(){

		console.log('button pressed');
		
		var numberOfRows = $("input[name='numberOfRows']").val();
		var numberOfColumns = $("input[name='numberOfColumns']").val();
		if(numberOfRows < 0){numberOfRows *= -1;}
		console.log("number of rows: " + numberOfRows);
		if(numberOfColumns < 0){numberOfColumns *= -1;}
		console.log("number of columns: " + numberOfColumns);
				
		for(var numRows = 0; numRows < numberOfRows; numRows++){
			
			$('body').append("<div class='container'></div>");
				for(var i = 0; i < numberOfColumns; i++){

					$('.container').eq(numRows).append("<div class='block'></div>");
				}
		}

		$('.block').hover(function(){
		console.log("hover");
		var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
		$(this).css('background-color', randomColor);
	});

	});



});




//create .container flex objects for each row
//add .block objects for the columns within each .container div