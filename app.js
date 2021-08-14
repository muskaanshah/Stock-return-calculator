var costp = document.querySelector("#pp");
var quantity = document.querySelector("#sq");
var currentp = document.querySelector("#cp");
var body = document.querySelector("body")

var submitbtn = document.querySelector("#btn-submit");
var output = document.querySelector("#output-check");

submitbtn.addEventListener("click", validate);

function validate() {
    if(Number(costp.value)<0 || Number(quantity.value)<0 || Number(currentp.value)<0) {
        output.style.display = "display";
        errMessage("Please enter values greater than 0 (only numbers are allowed in above fields)");
    }
    else if (costp.value.length == 0 || quantity.value.length == 0 || currentp.value.length == 0) {
        errMessage("Please don't leave any field blank");
    }
    else {
        calculate();
    }
}

function errMessage(errormsg) {
    output.innerText = errormsg;
}

function calculate() {
    var moneyspent = Number(costp.value) * Number(quantity.value);
    var currentvalue = Number(currentp.value) * Number(quantity.value);
    var difference = moneyspent - currentvalue;
    if (difference >= 0) {
        var profitper = difference / moneyspent * 100;
        errMessage("Your profit is ₹" + difference + ". Your profit percentage is " + profitper + "%.");
    }
    else {
        var lossdiff = Math.abs(difference);
        var lossper = lossdiff / moneyspent * 100;
        errMessage("Your loss is ₹" + lossdiff + ". Your loss percentage is " + lossper + "%.");
    }
}