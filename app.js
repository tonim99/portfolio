let sheetAsJson =
    'https://spreadsheets.google.com/feeds/list/1uwFmEbEq4zu9XBAsp9m57i4uShA2Ug9H9tCpOr8I43U/od6/public/values?alt=json';
    
const render = (projectArr) => {
     
    console.log("this is projectArr", projectArr)
}

$.ajax({url:sheetAsJson})
    .then(data => {
        const projects = data.feed.entry.map(project => {
            return{
                title: project.gsx$title.$t, 
                image: project.gsx$image$t, 
                description: project.gsx$description.$t
            }
        })
        render(projects)
    })

    const $div = $('<div>').addClass('projects').text('projects')
    $('#projects-div').append($div)
