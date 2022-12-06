function ToDoList() {
    this.events{};
    this.currentid = 0;
    this.date = 0;
    this.time = 0;
}

ToDoList.prototype.addevent= function(event){
    event.id = assignid()
    this.events[event.id] = event
}

ToDoList.prototype.assignid = function(){
    this.currentid ++;
    return this.currentid
}