
$(function () {
  var currentHour = dayjs().hour();
  var formatDate = dayjs().format('DD/MM/YYYY ha')
  var currentDate = $("#currentDay")
  currentDate.text(formatDate)
  var container = $("#timeBlockContainer")

  console.log(currentHour)

  //Creating every block container, button, text area and formated the time with am and pm

  for (var i = 9; i < 17; i++) {
    
    let formatTime;
    if (i < 12){
      formatTime = i + "am"
    } else if (i > 12){
      formatTime = (i - 12) + "pm"
    } else {
      formatTime = i + "pm"
    }
    let createDiv = $(' <div class="row time-block"></div>')
    let time = $('<p class="col-2 col-md-1 hour text-center py-3"></p>')
    let textArea = $('<textarea id="at'+ formatTime + '" class="col-8 col-md-10 description" rows="3"> </textarea>')
    let button = $('<button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button>')


    time.text(formatTime)
    createDiv.append(time, textArea, button);
    container.append(createDiv);

    //if statement determining the color of the text area depending on the time of day

    if (currentHour === i) {
      createDiv.addClass("present");
    } else if (currentHour > i) {
      createDiv.addClass("past");
    } else{
    createDiv.addClass("future");
    
    }

    //Saving user input to local storage

    button.on("click", function(event){
      
      var textToSave = button.siblings()[1].value; 
      localStorage.setItem(formatTime, textToSave);
  
      })
      
    }

    //Displaying user input even after the page refreshes

    let userInput = "";

    userInput = localStorage.getItem('9am');
    console.log(userInput);
    var the9AmContainer = $("#at9am")
    console.log(the9AmContainer)
    the9AmContainer.val(userInput);

    userInput = localStorage.getItem('10am');
    console.log(userInput);
    var the10AmContainer = $("#at10am")
    console.log(the10AmContainer)
    the10AmContainer.val(userInput);

    userInput = localStorage.getItem('11am');
    console.log(userInput);
    var the11AmContainer = $("#at11am")
    console.log(the11AmContainer)
    the11AmContainer.val(userInput);

    userInput = localStorage.getItem('12pm');
    console.log(userInput);
    var the12pmContainer = $("#at12pm")
    console.log(the12pmContainer)
    the12pmContainer.val(userInput);

    userInput = localStorage.getItem('1pm');
    console.log(userInput);
    var the1pmContainer = $("#at1pm")
    console.log(the1pmContainer)
    the1pmContainer.val(userInput);

    userInput = localStorage.getItem('2pm');
    console.log(userInput);
    var the2pmContainer = $("#at2pm")
    console.log(the2pmContainer)
    the2pmContainer.val(userInput);

    userInput = localStorage.getItem('3pm');
    console.log(userInput);
    var the3pmContainer = $("#at3pm")
    console.log(the3pmContainer)
    the3pmContainer.val(userInput);

    userInput = localStorage.getItem('4pm');
    console.log(userInput);
    var the4pmContainer = $("#at4pm")
    console.log(the4pmContainer)
    the4pmContainer.val(userInput);

});





