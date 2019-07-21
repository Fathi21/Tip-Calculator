console.log("working");


function calc(){
    console.log("function working");
    var bill_amount = parseFloat(document.querySelector(".bill-amount").value);
    var rating = parseFloat(document.querySelector(".rating").value);
    var number_of_people = parseFloat(document.querySelector(".number-of-people").value);
    var tipdisplay = document.querySelector(".tip");
    if (bill_amount === 0 || bill_amount === " ")
    {
        alert("Enter the bill");
        return;
    }

    else if (number_of_people === "" || number_of_people <= 1)
    {
        number_of_people = 1;
        
    }

    var total = (bill_amount * rating) / number_of_people;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2)
    console.log(total);
    if (total > 0){
        tipdisplay.textContent = "$ " + total;
    }
    



}

calc();