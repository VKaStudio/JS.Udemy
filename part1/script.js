const btnStartCanc = document.getElementById('start'),
    getAllValue = document.querySelectorAll('div[class$="value"]'),
    getAllExpItem = document.querySelectorAll('.expenses-item'),
    getBtns = document.getElementsByTagName('button'),
    btnApprove_1 = getBtns[0],
    btnApprove_2 = getBtns[1],
    btnCalc = getBtns[2],
    getOptExp = document.querySelectorAll('.optionalexpenses-item'),
    getInpChoosIncome = document.querySelector('.choose-income'),
    getChackBoxSaving = document.querySelector('#savings'),
    getInpChoosSun = document.querySelector('.choose-sum'),
    getInpChoosPerc = document.querySelector('.choose-percent'),
    getTimeYear = document.querySelector('.year-value'),
    getTimeMonth = document.querySelector('.month-value'),
    getTimeDay = document.querySelector('.day-value');

let money, time;

function start() {
    money = +prompt("What is your monthly budget?", ''),
    time = prompt("Enter a date in the format YYYY-MM-DD", '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("What is your monthly budget?", '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}

function chooseExpenses() {
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
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("1 day budget = " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 500) {
        alert('Really just ' + appData.moneyPerDay + "? Are you poor? =(");
    } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 1500) {
        alert(appData.moneyPerDay + " Hm.. its not bad");
    } else if (appData.moneyPerDay > 1500 && appData.moneyPerDay < 4500) {
        alert(appData.moneyPerDay + " Wow! You are rich!");
    } else if (appData.moneyPerDay > 4500) {
        alert(appData.moneyPerDay + " Are you crazy?");
    }
}
detectLevel();

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt("What is the amount of savings?", ''),
            percent = +prompt("At what percentage?", '');
        
        appData.monthIncome = save / 100 / 12 * percent;
        alert('Income per month from your deposit: ' + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    let i = 1;
    while(i < 4) {
        let question1 = prompt("An item of optional expenses?", '');
        appData.optionalExpenses[i] = question1;
        i++;
    }
}
chooseOptExpenses();