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
	
	$("#loginform").submit(function(e) {
		e.preventDefault();
		$("#loginerr").hide();
		$.post('/login',{
			user: $("#loginform input[name=user]").val(),
			pass: $("#loginform input[name=pass]").val()
		},function(response) {
			console.log(response);
			if(response==='true') {
				window.location.reload();
			} else {
				$("#loginerr").show().html("wrong username or password");
			}
		});
		return false;
	});
	
	$.get('/login',function(response) {
		if(response==='true') {
			$("#loginform").hide();
		} else {
			$("#loginform").show().html(response);
		}
	});
});
