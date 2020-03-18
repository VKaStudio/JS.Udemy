let money = +prompt("What is your monthly budget?", ''),
    time = +prompt("Enter a date in the format YYYY-MM-DD", '');

let moneyForOneDay = money / 30; 

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

for (let i = 0; i < 2; i++) {
    let enterCostItem = prompt("Enter a mandatory cost item this month", ''),
        howMach = +prompt("How much will it cost?", '');
    
    appData.expenses[enterCostItem] = howMach;
}

alert("1 day budget = " + moneyForOneDay);