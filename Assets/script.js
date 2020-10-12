/* 
When loading your app the current day will be displayed.
The page will show all the timeblocks for a standard busness day.
Each timeblock should be color coded to indicate whether it is in the past, present, or future.
A user can enter an event by clicking on a timeblock.
Saving an event is saved in local storage.
Saved events will persist when refreshing or closing the browser.
*/
$(document).ready(function(){

// Displays today's date to Weekday, Month day+suffix
let currentDayEl = $("#currentDay");
let saveBtnEl = $(".saveBtn");
let descriptionEl = $(".description");
let textAreaEl = $("textarea");
let currentHour = parseInt(moment().format("H"));
let todaysDate = moment().format("dddd, " + "MMMM Do YYYY");
currentDayEl.text(`${todaysDate}`);

console.log(currentHour);

textAreaEl.each(function(){
    let nameAtt= parseInt($(this).attr("name"));

    if (currentHour > nameAtt){
       $(this).addClass("past");
    } else if (currentHour < nameAtt) {
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
    };

});



});

