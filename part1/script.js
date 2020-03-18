let money = +prompt("What is your monthly budget?", ''),
    time = +prompt("Enter a date in the format YYYY-MM-DD", '');

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
    
    if ( (typeof(enterCostItem)) === 'string' && (typeof(enterCostItem)) != null && (typeof(howMach)) != null && enterCostItem != '' && howMach != '' && enterCostItem.length < 50) {
        console.log("Validation was successful!")
        appData.expenses[enterCostItem] = howMach;
    } else {
        i = 0;
    }
}

appData.moneyPerDay = appData / 30;

alert("1 day budget = " + moneyForOneDay);