const display1El = document.querySelector(".display-1")
const display2El = document.querySelector(".display-2")
const tempResultEl = document.querySelector(".temp-result-display");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const allClearEl = document.querySelector(".all-clear");
const lastClearEl = document.querySelector(".last-entity-clear");



let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;


for ( const number of numbersEl){
    number.addEventListener('click', function(event){
         if ( event.target.innerText === '.' && !haveDot){
             haveDot = true;
         }
         else if ( event.target.innerText === '.' && haveDot){
             return;
         }
         dis2Num += event.target.innerText;
         display2El.innerText = dis2Num;
    })
}

for ( const operation of operationEl){
    operation.addEventListener('click',function(event){
        if(!dis2Num){
            return;
        }
        haveDot = false;
        const operationName = event.target.innerText;
        if ( dis1Num && dis2Num && lastOperation){
            mathOperation();
        }
        else{
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    })
}

function clearVar(name = ''){
    dis1Num += dis2Num + ' ' + name + ' ';
    display1El.innerText = dis1Num;
    display2El.innerText = '';
    dis2Num = '';
    tempResultEl.innerText = result;
}


function mathOperation(){
    if ( lastOperation === 'X'){
        result = parseFloat(result) * parseFloat(dis2Num);
    }
    else if ( lastOperation === '/'){
        result = parseFloat(result) / parseFloat(dis2Num);
    }
    else if ( lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dis2Num);
    }
    else if ( lastOperation === '-'){
        result = parseFloat(result) - parseFloat(dis2Num);
    }
    else if ( lastOperation === '%'){
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}
    
equalEl.addEventListener('click', function(event){
    if ( !dis1Num && !dis2Num){
        return;
    }
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    tempResultEl.innerText = '';
    dis2Num = result;
    dis1Num = '';
})

allClearEl.addEventListener('click', function(event){
    display1El.innerText = '';
    display2El.innerText = '';
    dis1Num = '';
    dis2Num = '';
    result = '';
    tempResultEl.innerText = '';
});

lastClearEl.addEventListener('click',function(event){
    display2El.innerText = '';
    dis2Num = '';
});