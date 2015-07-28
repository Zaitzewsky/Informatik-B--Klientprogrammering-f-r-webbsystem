/* Detta är en javascript-fil som är skriven i JQuery. 
Filen består egentligen endast av en funktion.
För att skriptet ska köras efter att all HTML har laddats
så inleds filen med en "document.ready"-funktion.
Därefter skrivs en anonym funktion som använder JQuerys
"get"-funktion för att hämta XML-filen och sedan använda datan från XML-filen.

Först tar jag bort allt som kan finnas i "div"-taggen med ID:et "news".
Därefter letar jag upp taggen som heter "article" och kör JQuerys funktionen
"each" för att loopa igenom alla taggar som heter "article".
Därefter börjar jag konkatenera ihop en "div"-tagg med en rubrik(title),
artikeltext(bodytext) och datumet på artikel(date).

Därefter körs en append som sätter html variabeln i slutet av "div"-taggen
med ID:et "news".*/




$(document).ready(function(){
	$.get('http://ofcourse.oru.se/~IK2009/xml/get_news.php', function(data){
		$('#news').empty();
		$(data).find('article').each(function(){
			var $article = $(this);
			var html = '<div class="article">';
			html += '<h1 class="title">' + $article.find('title').text();
			html += '</h1>';
			html += '<div class="bodytext">';
			html += $article.find('bodytext').text();
			html += '<p class="date"><kbd>' + $article.find('date').text();
			html += '</kbd></p>';
			html += '</div>';
			html += '</div>';
			$('#news').append($(html));
		});
	});
});