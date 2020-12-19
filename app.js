let sheetAsJson =
	'https://spreadsheets.google.com/feeds/list/1uwFmEbEq4zu9XBAsp9m57i4uShA2Ug9H9tCpOr8I43U/od6/public/values?alt=json';

https: $.ajax({ url: sheetAsJson }).then((data) => {
	const projects = data.feed.entry.forEach((project) => {
		console.log(project);
		const $renderedProj = $('<h3>')
			.text(project.gsx$title.$t)
			.addClass('title');
		const $renderedImg = $('<img>')
			.attr('src', project.gsx$image.$t)
			.addClass('project');
		const $renderedDescription = $('<p>')
			.text(project.gsx$skillsused.$t)
			.addClass('description');
		// const $renderedLink = $('<a>')
		// 	.attr('href', project.gsx$link.$t)
		// 	.addClass('link');
		$('#projects-div').append(
			$renderedProj,
			$renderedImg,
			$renderedDescription
			// $renderedLink
		);
	});
});

$('.submit-button').on('click', () => {
	console.log('form submit clicked');
});

$('.top-button').on('click', () => {
	$(window).scrollTop(0);
});
