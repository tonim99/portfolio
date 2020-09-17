# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

My portfolio website- includes a fully functional nav bar that collapses into a hamburger nav, a section to highlight projects, a form to contact me, and an about me section. I like for things to be clean, well made and organized, and my final project will convey this aspect of my personality. 

## Google Sheet

Include link to your google sheet here.  

https://docs.google.com/spreadsheets/d/1uwFmEbEq4zu9XBAsp9m57i4uShA2Ug9H9tCpOr8I43U/edit#gid=0 

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

- [Mobile](Mockflow mobile/desktop versions  https://res.cloudinary.com/dir27p6mf/image/upload/v1600096846/9602ac411bd24f91aae364179eac41ea_jlfp4l.png)


Wireframing Resources:

- [Mockflow](https://mockflow.com/app/#Wireframe)
- [Figma](https://www.figma.com/)


## Time/Priority Matrix 

[Link] https://res.cloudinary.com/dir27p6mf/image/upload/v1600098387/IMG_8365_wurbzz.heic

Include a full list of features that have been prioritized based on the `Time and Priority` Matrix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  

Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's priority is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- Pull data using google json api
- Render data on page 
- Allow user to choose favorites 
- Save their choices in firebase

#### PostMVP 

- Anything else that is not MVP

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Basic HTML/CSS | H | 2hr | hr |
| Nav bar w/Hamburger | H | 2hr | hr |
| Flex/Grid | H | 2hr | hr |  
| Adding Form | H | 2hr|  hr | 
| Buttons| M | 2hr | hr|
| Working with API | H | 3hrs|  hr | 
| Responsive | H | 3hr | hr | hr |
| Total | H | 16 hrs| hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hover Animation | M | 3hr | -hr | hr |
| Carousel | L | 3hr | hr |
| Skills Section | M | 2hr | hr |
|  |  | hr | -hr | hr |
|  |  | hr | hr |
|  |  | hr | hr |
| Total | H | 20hrs| hrs |

## Additional Libraries
Bootstrap - nav bar

jQuery 
## Code Snippet

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


## Issues and Resolutions
 Had a problem getting the top button to hear the click.     


**RESOLUTION**
Button was in footer outside of body, and script tag was at the bottom of the body. Moved footer inside body tags above the script tag. 