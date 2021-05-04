'use strict';



function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let tableDonor = document.getElementById('table')

let arrayOdDonor = [];

function Donor(name, amount) {
    this.name = name;
    this.amount = amount;
    this.age = randomAge(18, 30);
    this.codetionDonor = '';

    arrayOdDonor.push(this);


}

Donor.prototype.codetion = function () {
    if (this.age < 30) {
        this.codetionDonor = '';

    } else {
        this.codetionDonor = '';
    }
}

Donor.prototype.render = function () {
    let newRow = document.createElement('tr');
    tableDonor.appendChild(newRow);

    let data2 = document.createElement('th');
    newRow.appendChild(data2);
    data2.textContent = this.name;

    let data4 = document.createElement('th');
    newRow.appendChild(data4);
    data4.textContent = this.age; 

    let data3 = document.createElement('th');
    newRow.appendChild(data3);
    data3.textContent = this.amount;

   

}



let form = document.getElementById('form');
form.addEventListener('submit', submitter);
function submitter(event) {
    event.preventDefault();

    let inputName = event.target.name.value;
    let inputAmount = event.target.amount.value;

    let newDonor = new Donor(inputName, inputAmount);

    newDonor.render();
    storage();
}


function storage(){

    localStorage.setItem("data", JSON.stringify(arrayOdDonor));

}


function showData(){
    let showingData = JSON.parse(localStorage.getItem("data"));   

    if(showingData){
        for(let i=0;i<showingData.length;i++){
          new Donor (showingData[i].name,showingData[i].amount,showingData[i].codetionDonor);
        }
    }
}

showData();



for(let i =0 ; i<arrayOdDonor.length;i++ ){
    arrayOdDonor[i].codetion();
    arrayOdDonor[i].render();
}