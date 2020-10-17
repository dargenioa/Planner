
$(document).ready(function(){

// Define global variables
let currentDayEl = $("#currentDay");
let saveBtnEl = $(".saveBtn");
let textAreaEl = $("textarea");
let currentHour = parseInt(moment().format("H"));
let todaysDate = moment().format("dddd, " + "MMMM Do YYYY");
let plans = JSON.parse(localStorage.getItem("plans")) || [];


// Displays today's date to Weekday, Month day+suffix
currentDayEl.text(`${todaysDate}`);

console.log(currentHour);

// Compares the name attribute of each textarea to the current hour using moment and parseInt to turn each value to number
textAreaEl.each(function(){
    let nameAtt = parseInt($(this).attr("name"));

    if (currentHour > nameAtt){
       $(this).addClass("past");
    } else if (currentHour < nameAtt) {
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
    };

});

// Add click event to saveBtn's, takes the value of the sibling at description for the text and the attribute Id to include the time.
saveBtnEl.on("click", function(){
    let planEl = $(this).siblings(".description").val();
    let planTime = $(this).siblings(".description").attr("id");
    console.log(planEl);
    console.log(planTime);
    
// Create plan object
    let planOb = {
        text: planEl,
        time: planTime
    };
    
    // Pushes planOb into plans array
    plans.push(planOb);

   localStorage.setItem("plans", JSON.stringify(plans));
    
 
});

for (let i = 0; i < plans.length; i++){
    let currentText = plans[i].text;
    let currentTime = plans[i].time; 

    $(`#${currentTime}`).val(currentText);
}

});

