$(document).ready(function($) {
	

	$('.start-btn').on('click', function(event) {
		//$('.button-box').show();
		$('.vanashing-div').append('<div class="button-box" data-button-toggle="1"><p>Here are the number of clicks: <span class="click-num"></span></p><div class="two-btuttons"><button class="bg-change btn btn-default" data-toggle="hi">Change Color</button><button class="div-remove btn btn-default">Remove</button></div></div>')
	});
	$('body').on('click', '.bg-change', function(event) {
		var currentBg = $('.button-box').attr('data-button-toggle');
		if (currentBg == 1) {
		$('.button-box').attr('data-button-toggle', 2);
		}
		else {
		$('.button-box').attr('data-button-toggle', 1);
		}
	});

	$('body').on('click', '.div-remove', function(event) {
		$('.button-box').remove();
	});

});