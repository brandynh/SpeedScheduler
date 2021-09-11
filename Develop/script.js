const $containerEl = $('container');
const $rowEl = $('row');
const $hourEl = $('hour');
const $timeBlockEl = $('time-block');
const $saveButtonEl = $('saveBtn');

var $currentDayEl = $("#currentDay");



setInterval(displayTime, 1000);


function displayTime() {

    var currentTime = moment().format('dddd, MMMM Do [at] hh:mm a');
    $currentDayEl.text(currentTime);

}

