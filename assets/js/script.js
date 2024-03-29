var currentDayEl = document.querySelector("#currentDay");
currentDayEl.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');

var currentTime = moment();
// Returns current time to the nearest hour - 12:30 becomes 12:00
currentTime = currentTime.startOf("hour");
// Calculates the start of day + 7 to return 7am then will add 1 for 8am
var beforeTime = moment().startOf('day').add(7, "hours");

// Time blocks
// 8 AM 
var time1 = beforeTime.add(1, "h");
// var time1 = beforeTime;
time1 = time1.format('hh:mm A');
// Populates time formula into html
$(".block1").text(time1);
// 9 AM 
var time2 = beforeTime.add(1, "h");
// var time2 = beforeTime;
time2 = time2.format('hh:mm A');
// Populates time formula into html
$(".block2").text(time2);
// 10 AM
var time3 = beforeTime.add(1, "h");
time3 = time3.format('hh:mm A');
// Populates time formula into html
$(".block3").text(time3);
// 11 AM
var time4 = beforeTime.add(1, "h");
time4 = time4.format('hh:mm A');
// Populates time formula into html
$(".block4").text(time4);
// 12 PM
var time5 = beforeTime.add(1, "h");
time5 = time5.format('hh:mm A');
// Populates time formula into html
$(".block5").text(time5);
// 1 PM
var time6 = beforeTime.add(1, "h");
time6 = time6.format('hh:mm A');
// Populates time formula into html
$(".block6").text(time6);
// 2 PM
var time7 = beforeTime.add(1, "h");
time7 = time7.format('hh:mm A');
// Populates time formula into html
$(".block7").text(time7);
// 3 PM
var time8 = beforeTime.add(1, "h");
time8 = time8.format('hh:mm A');
// Populates time formula into html
$(".block8").text(time8);
// 4 PM
var time9 = beforeTime.add(1, "h");
time9 = time9.format('hh:mm A');
// Populates time formula into html
$(".block9").text(time9);
// 5 PM
var time10 = beforeTime.add(1, "h");
time10 = time10.format('hh:mm A');
// Populates time formula into html
$(".block10").text(time10);

// Function to compare hour slots with current time 
// Update these to coordinating numbers
function checkTime() {
    // Adjusts current time to the hour
    currentTime = currentTime.startOf("hour");
    // Add time1 8AM
    time1 = moment().startOf('day').add(8, "hours");
        // Add time1 if/else
    if (currentTime.isAfter(time1)) {
        $(".form8").addClass("past");
    }
    else if (currentTime.isBefore(time1)) {
        $(".form8").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".form8").addClass("present");
    };
    // Add time2 9AM
    time2 = moment().startOf('day').add(9, "hours");
        // Add time2 if/else
    if (currentTime.isAfter(time2)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".form9").addClass("present");
    };
    // Add time3 10AM
    time3 = moment().startOf('day').add(10, "hours");
    // Add time2 if/else
    if (currentTime.isAfter(time3)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(time3)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(time3)) {
        $(".form10").addClass("present");
    };
    // time4 11AM
    time4 = moment().startOf('day').add(11, "hours");
    // Add time3 if/else
    if (currentTime.isAfter(time4)) {
        $(".form11").addClass("past");
    }
    else if (currentTime.isBefore(time4)) {
        $(".form11").addClass("future");
    }
    else if (currentTime.isSame(time4)) {
        $(".form11").addClass("present");
    };
    // time5 12PM
    time5 = moment().startOf('day').add(12, "hours");
    // Add time4 if/else
    if (currentTime.isAfter(time5)) {
        $(".form12").addClass("past");
    }
    else if (currentTime.isBefore(time5)) {
        $(".form12").addClass("future");
    }
    else if (currentTime.isSame(time5)) {
        $(".form12").addClass("present");
    };
    // time6 1PM
    time6 = moment().startOf('day').add(13, "hours");
    // Add time5 if/else
    if (currentTime.isAfter(time6)) {
        $(".form13").addClass("past");
    }
    else if (currentTime.isBefore(time6)) {
        $(".form13").addClass("future");
    }
    else if (currentTime.isSame(time6)) {
        $(".form13").addClass("present");
    };
    // time7 2PM
    time7 = moment().startOf('day').add(14, "hours");
    // Add time6 if/else
    if (currentTime.isAfter(time7)) {
        $(".form14").addClass("past");
    }
    else if (currentTime.isBefore(time7)) {
        $(".form14").addClass("future");
    }
    else if (currentTime.isSame(time7)) {
        $(".form14").addClass("present");
    };
    // time8 3PM
    time8 = moment().startOf('day').add(15, "hours");
    // Add time7 if/else
    if (currentTime.isAfter(time8)) {
        $(".form15").addClass("past");
    }
    else if (currentTime.isBefore(time8)) {
        $(".form15").addClass("future");
    }
    else if (currentTime.isSame(time8)) {
        $(".form15").addClass("present");
    };
    // time9 4pm
    time9 = moment().startOf('day').add(16, "hours");
    // Add time8 if/else
    if (currentTime.isAfter(time9)) {
        $(".form16").addClass("past");
    }
    else if (currentTime.isBefore(time9)) {
        $(".form16").addClass("future");
    }
    else if (currentTime.isSame(time9)) {
        $(".form16").addClass("present");
    };
    // time10 5pm
    time10 = moment().startOf('day').add(17, "hours");
    // Add time9 if/else
    if (currentTime.isAfter(time10)) {
        $(".form17").addClass("past");
    }
    else if (currentTime.isBefore(time10)) {
        $(".form17").addClass("future");
    }
    else if (currentTime.isSame(time10)) {
        $(".form17").addClass("present");
    };
}
checkTime();
// Array to get item from local storage
var form = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
// for loop to loop through the array:
for (var i = 0; i < form.length; i++) {
    var dataHour = localStorage.getItem(form[i]);
    // form
    $(".form" + form[i]).val(dataHour);
}
// Event listener to save to local stroage
$(".saveBtn").click(function () {
    
    var formValue = $(this).siblings(".form-control").val();
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});