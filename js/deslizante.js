$(document).ready(function(){

	var estado = false;

 

	$('#des').on('click',function(){

		$('.desliza').slideToggle();

 

		if (estado == true) {

			

			$('body').css({

				"overflow": "auto"

			});

			estado = false;

		} else {

			

			$('body').css({

				"overflow": "hidden"

			});

			estado = true;

		}

	});

});

