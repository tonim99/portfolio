let sheetAsJson =
    'https://spreadsheets.google.com/feeds/list/1uwFmEbEq4zu9XBAsp9m57i4uShA2Ug9H9tCpOr8I43U/od6/public/values?alt=json';
    
$.ajax({url: sheetAsJson})
    .then(data => {
        const projects = data.feed.entry.forEach(project => {
            const $renderedProj = $('<h3>').text(project.gsx$title.$t);
            const $renderedImg = $('<img>').attr('src', project.gsx$image.$t);
            const $renderedDescription = $('<p>').text(project.gsx$description.$t)
            $('#projects-div').append($renderedProj);
            $('#projects-div').append($renderedImg);
            $('#projects-div').append($renderedDescription);
        })

})
$('.submit-button').on('click', () => {
    console.log('form submit clicked');
});
//used stackoverflow for help with scroll function
$('.top-button').on('click', () => {
    $(window).scrollTop(0);
});
