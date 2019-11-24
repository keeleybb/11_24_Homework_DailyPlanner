var jumboDate = moment().format("dddd, MMMM D YYYY");
var currentHour = (moment().format("HH"));
$("#currentDay").text(jumboDate);
console.log(moment().format("MM ddd, YYYY hh:mm:ss a"));
console.log(moment().format("dddd, MMMM D YYYY"));


var hourDisplay = 9;

var newTable = $("<table>");
newTable.addClass("plannerTB");
// var timeHr = 9:00:00;  //h:mm:ss a
var scheduleHr = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
var compareHr = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

for (i = 0; i< 9; i++) {
    var newRow = $("<tr>");
    newRow.addClass("row");


    var newHour = $("<td>");
    newHour.addClass("hour");
    newHour.attr("data-name", i);
    newHour.html(scheduleHr[i]);
    
    var newMeetingTD = $("<td>");
    newMeetingTD.addClass("column");
    newMeetingTD.addClass(compareHr[i]);
    newMeetingTD.attr("data-name", compareHr[i]);
    newMeetingTD.attr("data-time", i);
    newMeetingTD.html("");
    var newMeetingArea = $("<textarea>");
    newMeetingArea.addClass("textarea, " + i);

    
    var newBtn = $("<td>");
    newBtn.addClass("saveBtn");
    newBtn.attr("data-name", i);
    newBtn.addClass("saveBtn");

    newBtn.html('<i class="fas fa-lock"></i>');

    $(".container").append(newTable);
    newTable.append(newRow);
    newRow.append(newHour, newMeetingTD, newBtn);
    newMeetingTD.append(newMeetingArea);
    hourDisplay++;
    // makeColor();
    // timeHr++;
    // console.log(timeHr);
}

$('.saveBtn').on("click", function(){
    event.preventDefault();
    console.log(this);
    var getId = $(this).data("name"); //Get the data-name to use as the local storage key
    console.log(getId);
    var meeting = $("." + getId).val();
    console.log("meeting", meeting);
    localStorage.setItem(getId, meeting);
    renderMeetings();
    console.log(currentHour);
})

function renderMeetings() {
    $("textarea").empty();
    console.log("Did we Get here?");
    for (i=0; i<9; i++){
        var returnMeeting = localStorage.getItem(i);
        console.log(returnMeeting);
        $("." + i + "").html(returnMeeting);
    }

}
renderMeetings();

// $(document).on("click", ".saveBtn", sendMeeting);
// var colorCurrent = $(".column").attr("data-name");
// var colorCurrentParse = parseInt(colorCurrent);

// for (i=0; i<9; i++){
//     var dataName = i;
//         console.log(dataName);
//         if (i === currentHour){
//                     // newMeetingTD.addClass("present");

//                     newMeetingTD.addClass("present");
//         }


//     };

    $(".column").each(function(){
            var dataName = $(this).attr("data-name");
            var currentTD = "." + dataName;
            if (dataName == currentHour){
                console.log(dataName, currentHour, "red", "future");
                $(currentTD).addClass("present");
            } else if(dataName < currentHour){
                console.log(dataName, currentHour, "grey", "past");
                $(currentTD).addClass("past");
            } else if (dataName > currentHour){
                console.log(dataName, currentHour, "green", "future");
                    $(currentTD).addClass("future");

                }
        
        
        

    })

//     console.log(parseInt($(".column").attr("data-name")));
//     if (parseInt($(".column").attr("data-name")) === currentHour) {
//         newMeetingTD.addClass("present");
//     }

// }
