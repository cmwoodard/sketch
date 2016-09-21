$(document).ready(function(){
	userSquares= prompt("How many squares?")
	
	createSquares(userSquares);
	
	$('.squares').mouseover(function() {
        $(this).addClass('squaresOn');
		/*$(this).css("background-color", getRandomColor())*/
    });
	
	$('#switch').click(function(){
		$('.squares').toggleClass('squaresOn');	
	});
	$('#reset').click(function(){
		$('.squares').removeClass('squaresOn');	
		
	});
});

function createSquares(numSquares){
	
	for(i=0;i< numSquares*numSquares;i++){
		$('#container').append("<div class=" + "squares"+ "></div>");	
	}
	$('#container').width(numSquares * 28 + "px");
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}