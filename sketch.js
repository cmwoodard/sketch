$(document).ready(function(){
	userSquares= prompt("How many squares(squared)?")
	
	var rainbowCount=0;
	createSquares(userSquares);
	
	 $("#thetable").on('mouseenter', '.squares', function() {
		 /*$(this).addClass('squaresOn');*/
		 $(this).css("background-color", getRandomColor());
        
    });
	
	
	$('#switch').click(function(){
		$('.squares').toggleClass('squaresOn');	
	});
	$('#reset').click(function(){
		$('.squares').css("background-color", "white");
		
	});
});

function createSquares(numSquares){
	
	/*Initialize and set size variables*/
	var containerHeight=500+(numSquares*2);
	var containerWidth=500 +(numSquares*2);

	/*Box Sizes*/
	var boxWidth=Math.floor(containerWidth/numSquares);
	var boxHeight=containerHeight/numSquares -2;
	
	/*Creates Container Dimensions*/
	console.log(containerHeight);
	console.log(containerWidth);
	console.log(boxHeight);
	console.log(boxWidth);
	console.log("Supposed height: " + boxWidth*numSquares)
	
	$('#container').width(containerWidth + 'px');
	$('#container').height(containerHeight + 'px');
	
	$(document).ready(function(){
		for (i = 1; i <= numSquares; i++) {
			$("#thetable").append("<tr class=\"rows\"></tr>");
		}
		
		for (y = 1; y <= numSquares; y++) {
			$(".rows").append("<td class=\"squares\"></td>");
		}
		
		$('.rows .squares').width(boxWidth + 'px');	
		$('.squares').height(boxHeight +'px');
	
});
	
	
	
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRainbow(){
	var rainbow = ["red","orange","yellow", "green","blue","violet"];
	var color='';
	
	color += rainbow[Math.floor(Math.random() * 6)];
	return color;
	
}