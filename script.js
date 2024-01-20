function calc(amount, percentage, percentage_days, duration, renew){
    if (renew > duration){
        return 'Renew rate should be the same or lower than total duration :)';
    }
    let iterations = duration / renew;
    let iteration_percentage = percentage / (percentage_days / renew);
    for (let i = 0; i < iterations; i++){
        amount = amount + ((iteration_percentage * amount) / 100);
    }
    return amount;
}

let result = document.getElementById('result');
result.innerText = 0;
document.getElementById('submit').addEventListener('click', () => {
    let initial_amount = +document.getElementById('amount').value;
    let percentage = +document.getElementById('percentage').value;
    let rate = +document.getElementById('rate').value;
    let duration = +document.getElementById('howlong').value * document.getElementById('duration').value;
    let renew = +document.getElementById('renew').value * document.getElementById('renew_unit').value;
    result.innerText = calc(initial_amount, percentage, rate, duration, renew).toFixed(2);
})
