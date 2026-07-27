// Get Element

const billInput = document.getElementById("billAmount");
const peopleInput = document.getElementById("people");
const tipInput = document.getElementById("tip");
const totalBillOutput = document.getElementById("totalBill");
const tipAmountOutput = document.getElementById("tipAmount");
const finalBillOutput = document.getElementById("finalBill");
const perPersonOutput = document.getElementById("perPerson");

const calculateBtn = document.getElementById("calculateBtn");

// Event Listener

calculateBtn.addEventListener("click", function () {

    console.log("Button Clicked");

    // read user input
    
    const bill = Number(billInput.value);
    const people = Number(peopleInput.value);
    const tip = Number(tipInput.value);
    
    // validation

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
    
    // calculation

    const tipAmount = (bill * tip) / 100;
    const finalBill = bill + tipAmount;
    const perPerson = finalBill / people;
 
    // Display Result

    totalBillOutput.textContent = `₹${bill.toFixed(2)}`;
    tipAmountOutput.textContent = `₹${tipAmount.toFixed(2)}`;
    finalBillOutput.textContent = `₹${finalBill.toFixed(2)}`;
    perPersonOutput.textContent = `₹${perPerson.toFixed(2)}`;

    console.log(bill);
    console.log(people);
    console.log(tip);
    console.log(tipAmount);
    console.log(finalBill);
    console.log(perPerson);
  
});