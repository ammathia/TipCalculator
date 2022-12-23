"use strict"


function calculateSplit() {
    let amountValue = +document.getElementById('attemptAmount').value;
    let tipValue = +document.getElementById('serviceTip').value;
    let attemptPeople = +document.getElementById('numberPeople').value;
    if (!isFinite(amountValue)) { alert("Write a number as amount value") }
    if (!isFinite(attemptPeople)) { alert("Write a number as a number of people") }
    let newTip = amountValue * tipValue;
    let newAmount = amountValue + newTip;
    let resultAmount = newAmount / attemptPeople;
    let resultAmount1 = Math.round(resultAmount * 100) / 100;
    document.getElementById('resultText').innerHTML = 'TIP AMOUNT' + '<br>' + resultAmount1 + "$" + '<br>' + "for each";
}