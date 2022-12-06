function ToDoList() {
    this.events{};
    this.currentid = 0;
    this.date = 0;
    this.time = 0;
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

        return false

    }
    delete this.events[id]
    return true

}