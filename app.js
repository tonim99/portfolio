let sheetAsJson =
    'https://spreadsheets.google.com/feeds/list/1uwFmEbEq4zu9XBAsp9m57i4uShA2Ug9H9tCpOr8I43U/od6/public/values?alt=json';
    
const render = (projectArr) => {
    const $div = $('<div>').addClass('projects').text(projectArr[0].title);
    $('#projects-div').append($div);
    const $img = $('<img>').attr('src', projectArr[0].image)
    $('#projects-div').append($img)    
    console.log(projectArr[0].title)
    console.log("this is projectArr", projectArr)
}

$.ajax({url:sheetAsJson})
    .then(data => {
        const projects = data.feed.entry.map(project => {
            console.log(project)
            return{
                title: project.gsx$title.$t, 
                image: project.gsx$image.$t, 
                description: project.gsx$description.$t
            }
        })
        render(projects)
    })
console.log($);

$('.submit-button').on('click', () => {
    console.log('form submit clicked');
});
//used stackoverflow for help with scroll function
$('.top-button').on('click', () => {
    $(window).scrollTop(0);
});
