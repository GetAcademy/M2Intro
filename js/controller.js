function addPerson(){
    model.people.push({name: model.inputs.name, age: model.inputs.age});
    updateView();
}