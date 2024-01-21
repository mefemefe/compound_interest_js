function calc(amount, percentage, percentage_days, duration, renew){
    if (renew > duration){
        return 'Renew rate should be lower or equal than the total duration :)';
    }
    let iterations = duration / renew;
    let iteration_percentage = percentage / (percentage_days / renew);
    for (let i = 0; i < iterations; i++){
        amount = amount + ((iteration_percentage * amount) / 100);
    }
    return amount;
}

let result = document.getElementById('result');
result.innerText = "0.00";
let interest = document.getElementById('interest');
interest.innerText = "0.00";
document.getElementById('submit').addEventListener('click', () => {
    result.innerText = "0.00";
    interest.innerText = "0.00";
    let initial_amount = +document.getElementById('amount').value;
    let percentage = +document.getElementById('percentage').value;
    let rate = +document.getElementById('rate').value;
    let duration = +document.getElementById('howlong').value * document.getElementById('duration').value;
    let renew = +document.getElementById('renew').value * document.getElementById('renew_unit').value;
    let calc_result = calc(initial_amount, percentage, rate, duration, renew);
    if (typeof calc_result == 'number'){
        result.innerText = calc_result.toFixed(2);
        interest.innerText = (result.innerText - initial_amount).toFixed(2);
    }
    else{
        interest.innerText = ':(';
        alert(calc_result);
    }
})
