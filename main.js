$( document ).ready(function() {

	$( ".card" ).click(function() {
		if($(this).hasClass("collapse")){
			$(this).removeClass( "collapse" );
			
		}
		else{
			$(this).addClass("collapse");
		}
	});


});