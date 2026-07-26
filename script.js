const billInput = document.getElementById("billAmount");
const peopleInput = document.getElementById("people");
const tipInput = document.getElementById("tip");
const totalBillOutput = document.getElementById("totalBill");
const tipAmountOutput = document.getElementById("tipAmount");
const finalBillOutput = document.getElementById("finalBill");
const perPersonOutput = document.getElementById("perPerson");

const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function () {

    console.log("Button Clicked");

    const bill = Number(billInput.value);
    const people = Number(peopleInput.value);
    const tip = Number(tipInput.value);
    
    //validation

    if (bill <=0) {
        alert("Please enter a valid bill amount.");
        return;
    }

    if (people <= 0) {
        alert("Please enter a valid number of people.");
        return;
    }

    if (tip < 0) {
        alert("Please enter a valid tip percentage.");
        return;
    }
   
    const tipAmount = (bill * tip) / 100;
    const finalBill = bill + tipAmount;
    const perPerson = finalBill / people;

    console.log(bill);
    console.log(people);
    console.log(tip);
    console.log(tipAmount);
    console.log(finalBill);
    console.log(perPerson);
  
});