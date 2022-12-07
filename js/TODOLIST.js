function ToDoList() {
    this.events = {};
    this.currentid = 0;
}

ToDoList.prototype.addEvent= function(event){
    event.id = assignid()
    this.events[event.id] = event
}

ToDoList.prototype.assignid = function(){
    this.currentid ++;
    return this.currentid;
}

ToDoList.prototype.findEvent = function(){
    if (this.events[id]  != undefined) {
        return this.events[id]
    }
    return false;
}


ToDoList.prototype.deleteEvent = function(){
    if (this.events[id] === undefined ) {

        return false;

    }
    delete this.events[id]
    return true;

}

// Business Logic For Events

function event(plan, date, time){
    this.plan = plan;
    this.date = date;
    this.time = time;
}

Event.prototype.myEvent = function(){
    return this.event + " " + this.date;
}

// Users Interface Logic

let todolist = new ToDoList ();

function DisplayEventDetails(ToDoListToDisplay){
    let eventsList = $("#events");
    let htmlForEventInfor = "";
    Object.keys(ToDoListToDisplay.events).forEach (function (key) {
        const event = ToDoListToDisplay.findEvent(key);
        htmlForEventInfor += "<li id=" + event.id +">" + event.plan + " " + event.date + "</li>";
    });
    eventsList.html(htmlForEventInfor);
}


function showEvent(eventid) {

    const event = todolist.findEvent(eventid);
    $("#show-event").show();
    $(".Event").html(event.plan);
    $(".Date").html(event.date);
    $(".Time").html(event.time);
    let buttons = $("#buttons");
    buttons.empty();
    buttons.append("button class = 'deleteButton' id="+ + event.id + "> Delete </button>");

}

function attachEventListeners() {
    $("#Event").on("click", "li", function() {
      showEvent(this.id);
      
    });

    // to delete Event

  $("#buttons").on("click", ".deleteButton", function() {
    todolist.deleteEvent(this.id);
    $("#show-Event").hide();
    displayContactDetails(todolist);
  });

}



$(document).ready(function() {

    attachEventListeners();
  
    $("form#new-contact").submit(function(event) {
      event.preventDefault();
      const inputtedEvent= $("input#new-event").val();
      const inputtedDate = $("input#new-date").val();
      const inputtedTime = $("input#new-time").val();


      // To empty the form or refresh the form

         $("input#new-event").val("");
         $("input#new-date").val("");
         $("input#new-time").val("");


         let newContact = new Contact(inputtedEvent, inputtedDate, inputtedTime);
         todolist.addEvent(newEvent);
         displayEventtDetails(todolist);
  });
});



