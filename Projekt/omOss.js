$(document).ready(function(){
	AllJSON();



	$('#Orebro').click(function(){
		$('#Kontor').empty();
		JSON("orebro");
	});

	$('#Goteborg').click(function(){
		$('#Kontor').empty();
		JSON("goteborg");
	});

	$('#Sheffield').click(function(){
		$('#Kontor').empty();
		JSON("sheffield");
	});

	$('#Toronto').click(function(){
		$('#Kontor').empty();
		JSON("toronto");
	});

	$('#Kyoto').click(function(){
		$('#Kontor').empty();
		JSON("kyoto");
	});

	$('#Snoqualmie').click(function(){
		$('#Kontor').empty();
		JSON("snoqualmie");
	});



function JSON (stad){
	$.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php', {city: stad}, function(data){
			if(data.status == 1){
					$('#Kontor').append(
						'<article><h2 class = "kontorsnamn">' + data.result.name + '</h2>' + 
						'<p class="beskrivning">' + data.result.address + "</p>" + 
						'<p class="beskrivning"><kbd>' + data.result.phone + "</kbd></p>" + 
						'</article>');


			} else {
				$('#Kontor').append('<p>Kontoret har flyttat!</p>' );
			}

		});
}

function AllJSON(){
	$.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php', function(data){
			if(data.status == 1){
				$.each(data.result, function(){
					$('#AllaKontor').append(
						'<article><h2 class = "kontorsnamn">' + this.name + '</h2>' + 
						'<p class="beskrivning">' + this.address + "</p>" + 
						'<p class="beskrivning"><kbd>' + this.phone + "</kbd></p>" + 
						'</article>');
				});


			} else {
				$('#AllaKontor').append('<p>Kontoret har flyttat!</p>' );
			}


		});

	}

});