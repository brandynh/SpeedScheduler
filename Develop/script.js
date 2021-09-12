// Ready document before initiating JS
$(document).ready(function () {
    //Display ready
    console.log('Ready to execute!');

    var $currentDayEl = $('#currentDay');
    

    var currentTime = moment().format('dddd, MMMM Do [at] hh:mm a');
    // Sets current hour as an int for compairson logic
    var currentHour = parseInt(moment().format('HH'));
    
    
    updateSchedule();

    // Sets interval to display formatted time updates every second
    setInterval(displayContent, 1000);
    // Sets interval and updates past, present, future
    setInterval(updateSchedule, 10000);

    //Display time on jumbotron
    function displayContent() {

        $currentDayEl.text(currentTime);


    }

    //Updates textarea classes based off current time
    function updateSchedule() {

        
        console.log(currentHour);


        // for each to interrate through rows and formax

        $('.row').each(function () {

            var rowTime = (parseInt($(".row").attr("id")));
            // sets row time ID as int used for comparison logic
            if (rowTime < currentHour) {

                $(".row").children("textarea").addClass("past")
                console.log("past");
            } else
                if (rowTime === currentHour) {

                    $(".row").children("textarea").remove("past").addClass("present")
                    console.log("present");

                } else {
                    $(".row").children("textarea").removeClass("past", "present").addClass("future");
                    console.log("future");

                }
            console.log(rowTime);
        
        })

    }

    $(".saveBtn").on("click", function () {
        // Sets variables to get values from text and times
        var value = $(this).siblings(".time-block").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    });


    $("#9 .time-block").val(localStorage.getItem("9"));
    $("#10 .time-block").val(localStorage.getItem("10"));
    $("#11 .time-block").val(localStorage.getItem("11"));
    $("#12 .time-block").val(localStorage.getItem("12"));
    $("#13 .time-block").val(localStorage.getItem("13"));
    $("#14 .time-block").val(localStorage.getItem("14"));
    $("#15 .time-block").val(localStorage.getItem("15"));
    $("#16 .time-block").val(localStorage.getItem("16"));
    $("#17 .time-block").val(localStorage.getItem("17"));
});
