$(document).ready(function(){
	$.get('http://ofcourse.oru.se/~IK2009/xml/get_news.php', function(data){
		$(data).find('article').each(function(){
			var html = '';
			html += '<div class= "article">';
			html += '<h1 class= "title">' + $(this).find('title').text() + '</h1>';
			html += '</div>';

			$('#news').append(html);
		});
	});
});