// DOM elements to jQuery that isn't ran until the browser has finished rendering all the elements
// in the html and saved in local storage
$document.ready(function() {
  $('storedevent').text("Task Added");
  $('storedevent').on('click',function(){
    var currentTime = dayjs().format("dddd MMMM D, YYYY hh:mm:ss A");
    $("#todaysDate").text(currentTime);
    //Save to local storage
    //Confirm stored event
    $(document).ready(function(){
      localStorage.setItem(currentTime, todaysDate, $("body").html());
      alert("Task Added");
    });
  })
  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage.
  $(function saveBtn() {
    var saveBtn = $(".saveBtn");
    saveBtn.on('click', function(){
      let eventHour = $(this).siblings(".hour").text();
      let planText = $(this).siblings(".plan").val();
      let taskList = $("#todo");
      localStorage.setItem(eventHour, planText);
      $("#taskList").show();
      taskList.append("<li>" + eventHour + " " + planText + "</li>");
  })
  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour.
  // Color code present, future, and past events
  function colorCode(){
    var taskTime = dayjs().hour();

    $(".taskTime").each(function(){
      let timeBlock = parseInt($(this).attr('id').split("hour")[1])});
      if (timeBlock < taskTime) {
        //HINTS: How can the id attribute of each time-block be used to conditionally add or remove the
        //past, present, and future classes?
        $(this).removeClass('present');
        $(this).removeClass('future');
        $(this).addClass('past');
      } else if (taskTime === timeBlock){
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      }else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
  }
  })

  colorCode();
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  function getUserInput () {
    $('.description').each(function(){
      let storedTime = $(this).attr('id');
      let storedTask = localStorage.getItem(storedTime);

      if (storedTask !== null && storedTask !== undefined){
        $($this).siblings(".plan").val(storedTask);
        $(taskList).show();
      } 
    })
  }

  getUserInput();

  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').ready(dayjs().format
  ('dddd, MMMM D, YYYY'));
});
