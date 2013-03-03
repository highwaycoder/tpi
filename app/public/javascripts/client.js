$(function() {
	var shown = {
				more: false,
				search: false
			},
			cached = {
				search:false
			};
	$("#more").on('click',function() {
		if(shown.more) {
			$("#long").fadeOut('slow',function() {
				$("#more").html('+more');
			});
		} else {
			$("#long").fadeIn('slow',function() {
				$("#more").html('-less');
			});
		}
		shown.more = !shown.more;
	});
	
	$("#search_button").on('click',function() {
		if(!shown.search) {
			if(cached.search) {
				$("#search").fadeIn('slow',function() {
					$("#search_button").html('-hide search');
					shown.search = true;
				});
			} else {
				$.get('/search',function(result) {
					$("#search").html(result).hide().fadeIn('slow',function() {
						$("#search_button").html('-hide search');
						cached.search = true;
						shown.search = true;
					});
				});
			}
		} else {
			$("#search").fadeOut('slow',function() {
				$("#search_button").html('+show search');
				shown.search = false;
			});
		}
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
