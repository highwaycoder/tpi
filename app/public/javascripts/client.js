$(function() {
	var shown = false;
	$("#more").on('click',function() {
		if(shown) {
			$("#long").fadeOut('slow',function() {
				$("#more").html('+more');
			});
		} else {
			$("#long").fadeIn('slow',function() {
				$("#more").html('-less');
			});
		}
		shown = !shown;
	});
});
