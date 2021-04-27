function updateView() {

    peopleListHtml = '';
    for(let person of model.people){
        peopleListHtml += `<li>${person.name} er ${person.age} år gammel.</li>`;
    }

    document.getElementById('app').innerHTML = `

        <h3>Legg til ny person</h3>
        Navn<br/>
        <input 
            type="text" 
            oninput="model.inputs.name=this.value" 
            value="${model.inputs.name}"
            />
        <input 
            type="text" 
            oninput="model.inputs.age=parseInt(this.value)" 
            value="${model.inputs.age}"
            />
        <button onclick="addPerson()">Legg til person</button>
        <h3>Personer</h3>
        ${peopleListHtml}
    `;
}