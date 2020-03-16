let money = +prompt("What is your monthly budget?", ''),
    time = prompt("Enter a date in the format YYYY-MM-DD", '');

let enterCostItem = prompt("Enter a mandatory cost item this month", ''),
    howMach = prompt("How much will it cost?", ''),
    enterCostItem2 = prompt("Enter a mandatory cost item this month", ''),
    howMach2 = prompt("How much will it cost?", '');

let moneyForOneDay = money / 30; 

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

appData.expenses[enterCostItem] = howMach;
appData.expenses[enterCostItem2] = howMach2;

alert("1 day budget = " + moneyForOneDay);