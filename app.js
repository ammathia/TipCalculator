"use strict" 


function calculateSplit() {
    let amountValue = +document.getElementById('attemptAmount').value;
    let tipValue = +document.getElementById('serviceTip').value;
    let attemptPeople = +document.getElementById('numberPeople').value;
    if (!isFinite(amountValue)) {alert("Write a number as amount value")}
    if (!isFinite(attemptPeople)) {alert("Write a number as a number of people")}
    let newTip = amountValue * tipValue;
    let newAmount = amountValue + newTip;
    let resultAmount = newAmount / attemptPeople;
    document.getElementById('resultText').innerHTML = 'TIP AMOUNT' + '<br>' + resultAmount + "$" + '<br>' + "for each";
}