function fanc1(){
    console.log('Start');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            Math.random() > .5 ? resolve() : reject("Error!");
        }, 1000);
    });
    return promise;
}

function step1(){
    console.log('First step is done');
}

function stop() {
    console.log('Stop!');
}

function win() {
    console.log('Finish');
}

fanc1()
        .then(step1)
        .then(win)
        .catch(stop)