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
    timeYear = document.querySelector('.year-value'),
    timeMonth = document.querySelector('.month-value'),
    timeDay = document.querySelector('.day-value');

let money, time;


btnStartCanc.addEventListener('click', function () {
    time = prompt("Enter a date in the format YYYY-MM-DD", ''),
        money = +prompt("What is your monthly budget?", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("What is your monthly budget?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    getAllValue[0].textContent = money.toFixed() + ' UAH';
    timeYear.value = new Date(Date.parse(time)).getFullYear();
    timeMonth.value = new Date(Date.parse(time)).getMonth() + 1;
    timeDay.value = new Date(Date.parse(time)).getDate();
    btnApprove_1.removeAttribute('disabled');
    btnApprove_2.removeAttribute('disabled');
    btnCalc.removeAttribute('disabled');
});

btnApprove_1.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < getAllExpItem.length; i++) {
        let enterCostItem = getAllExpItem[i].value,
            howMach = getAllExpItem[++i].value;
        if ((typeof (enterCostItem)) === 'string' && (typeof (enterCostItem)) != null && (typeof (howMach)) != null && enterCostItem != '' && howMach != '' && enterCostItem.length < 50) {
            console.log("Validation was successful!")
            appData.expenses[enterCostItem] = howMach;
            sum += +howMach;
        } else {
            i = 0;
        }
    }
    getAllValue[3].textContent = sum + ' UAH';
});

btnApprove_2.addEventListener('click', function () {
    let i = 0;
    while (i < getOptExp.length) {
        let question1 = getOptExp[i].value;
        appData.optionalExpenses[i] = question1;
        getAllValue[4].textContent += appData.optionalExpenses[i] + ' ';
        i++;
    }
});

btnCalc.addEventListener('click', function () {

    if (appData.budget != undefined) {
        let getNumb = parseInt(getAllValue[3].textContent.match(/\d+/));

        if (getNumb) {
            appData.moneyPerDay = ((appData.budget - getNumb) / 30).toFixed();
        } else {
            appData.moneyPerDay = (appData.budget / 30).toFixed();
        }

        getAllValue[1].textContent = appData.moneyPerDay + ' UAH';

        if (appData.moneyPerDay < 500) {
            getAllValue[2].textContent = 'Really just ' + appData.moneyPerDay + " UAH? Are you poor? =(";
        } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 1500) {
            getAllValue[2].textContent = appData.moneyPerDay + " UAH Hm.. its not bad";
        } else if (appData.moneyPerDay > 1500 && appData.moneyPerDay < 4500) {
            getAllValue[2].textContent = appData.moneyPerDay + " UAH Wow! You are rich!";
        } else if (appData.moneyPerDay > 4500) {
            getAllValue[2].textContent = appData.moneyPerDay + " UAH (O_o) Are you crazy?";
        }
    } else {
        getAllValue[2].textContent = "Error! Please click to Start calculation"
    }
});

getInpChoosIncome.addEventListener('input', function () {
    let save = getInpChoosIncome.value;
    appData.income = save.split(', ');
    getAllValue[5].textContent = appData.income;
});

getChackBoxSaving.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

getInpChoosSun.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +getInpChoosSun.value,
            percent = +getInpChoosPerc.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
        getAllValue[6].textContent = appData.monthIncome.toFixed(1);
        getAllValue[7].textContent = appData.yearIncome.toFixed(1);
    }
});

getInpChoosPerc.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +getInpChoosSun.value,
            percent = +getInpChoosPerc.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
        getAllValue[6].textContent = appData.monthIncome.toFixed(1);
        getAllValue[7].textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}