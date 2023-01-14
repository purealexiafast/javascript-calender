

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var currentHour = dayjs().hour();
  var formatDate = dayjs().format('DD/MM/YYYY ha')
  var currentDate = $("#currentDay")
  currentDate.text(formatDate)
  var container = $("#timeBlockContainer")

  console.log(currentHour)

  for (var i = 9; i < 17; i++) {

    let createDiv = $(' <div class="row time-block"></div>')
    let time = $('<p class="col-2 col-md-1 hour text-center py-3"></p>')
    let textArea = $('<textarea class="col-8 col-md-10 description" rows="3"> </textarea>')
    let button = $('<button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button>')

    let formatTime;
    if (i < 12){
      formatTime = i + "am"
    } else if (i > 12){
      formatTime = (i - 12) + "pm"
    } else {
      formatTime = i + "pm"
    }

    time.text(formatTime)
    createDiv.append(time, textArea, button);
    container.append(createDiv);

    if (currentHour === i) {
      createDiv.addClass("present");
    } else if (currentHour > i) {
      createDiv.addClass("past");
    } else{
    createDiv.addClass("future");
    
    }

    button.on("click", function(event){
      
      var textToSave = button.siblings()[1].value; 
      localStorage.setItem(formatTime, textToSave);
      console.log(textToSave);
      textToSave.textContent();
    })
  }




});









  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.



