function ToDoList() {
    this.plans = {};
    this.currentid = 0;
}


ToDoList.prototype.addPlan= function(plan){
    plan.id = this.assignId();
    this.plans[plan.id] = plan
}


ToDoList.prototype.assignId = function(){
    this.currentid ++;
    return this.currentid;
}




ToDoList.prototype.findPlan = function(id){
    if (this.plans[id]  != undefined) {
        return this.plans[id]
    }
    return false;
}


ToDoList.prototype.deletePlan = function(){
    if (this.plans[id] === undefined ) {

        return false;

    }
    delete this.plans[id]
    return true;

}

// Business Logic For Events

function Plan(task, date, time){
    this.task = task;
    this.date = date;
    this.time = time;
}

Plan.prototype.myPlan = function(){
    return this.task + " " + this.date;
}

// Users Interface Logic

let todolist = new ToDoList ();

function displayPlanDetails(ToDoListToDisplay){
    let plansList = $("ul#Plan");
    let htmlForPlanInfor = "";
    Object.keys(ToDoListToDisplay.plans).forEach (function (key) {
        const plan = ToDoListToDisplay.findPlan(key);
        htmlForPlanInfor += "<li id=" + plan.id +">" + plan.task + " " + plan.date + "</li>";
    });
    plansList.html(htmlForPlanInfor);
}


function showPlan(planid) {

    const plan = todolist.findPlan(planid);
    $("#show-event").show();
    $(".Plan").html(plan.task);
    $(".Date").html(plan.date);
    $(".Time").html(plan.time);

    // let buttons = $("#buttons");
    // buttons.empty();
    // buttons.append("button class = 'deleteButton' id="+ + plan.id + "> Delete </button>");

}

function attachPlanListeners() {
    $("#Plan").on("click", "li", function() {
      showPlan(this.id);
      
    });

    // to delete Event

  $("#buttons").on("click", ".deleteButton", function() {
    todolist.deletePlan(this.id);
    $("#show-Plan").hide();
    displayPlanDetails(todolist);
  });

}


// Form submission

$(document).ready(function() {

    attachPlanListeners()

    $("form#newPlan").submit(function(event) {
      event.preventDefault();
      const inputtedPlan= $("input#new-plan").val();
      const inputtedDate = $("input#new-date").val();
      const inputtedTime = $("input#new-time").val();

      // To empty the form or refresh the form

         $("input#new-plan").val("");
         $("input#new-date").val("");
         $("input#new-time").val("");


         let newPlan= new Plan(inputtedPlan, inputtedDate, inputtedTime);
         todolist.addPlan(newPlan);
         displayPlanDetails(todolist);
         
  });
});



