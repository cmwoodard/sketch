$(document).ready(function(){
	createSquares(12);
	
	$('.squares').mouseover(function() {
        $(this).addClass('squaresOn');
    });
		
});

function createSquares(numSquares){
	
	for(i=0;i< numSquares*numSquares;i++){
		$('#container').append("<div class=" + "squares"+ "></div>");	
	}
	$('#container').width(numSquares * 32 + "px");
}

console.log("test");