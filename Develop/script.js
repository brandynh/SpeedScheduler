$(document).ready(function () {
    console.log("Document Ready!");

    var $currentDayEl = $("#currentDay");
    var currentTime = moment().format('dddd, MMMM Do [at] hh:mm a');



    setInterval(displayTime, 1000);

    function displayTime() {

        $currentDayEl.text(currentTime);

    }

    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".time-block").val();
        var time = $(this).parent().attr("id");
    
        localStorage.setItem(time, value);
    });

    function hourUpdate() {

    }

    $("#9 .time-block").val(localStorage.getItem("9"));
    $("#10 .time-block").val(localStorage.getItem("10"));
    $("#11 .time-block").val(localStorage.getItem("11"));
    $("#12 .time-block").val(localStorage.getItem("12"));
    $("#1 .time-block").val(localStorage.getItem("1"));
    $("#2 .time-block").val(localStorage.getItem("2"));
    $("#3 .time-block").val(localStorage.getItem("3"));
    $("#4 .time-block").val(localStorage.getItem("4"));
    $("#5 .time-block").val(localStorage.getItem("5"));
});
