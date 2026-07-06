const inputDays = document.querySelector('#input1')
const inputHours = document.querySelector('#input2')
const inputWeeks = document.querySelector('#input3')
const inputMoney = document.querySelector('#input4')
const resultText = document.querySelector('#result_text')

function renderResult() {
    if (Number(inputDays.value) > 7 || Number(inputDays.value) <= 0) {
        console.log('Введите корректные данные')
        return;
    }

    const inputDaysV = inputDays.value

    if (Number(inputHours.value) <= 0 || Number(inputHours.value) > 24) {
        console.log('Введите корректные данные')
        return;
    }

    const inputHoursV = inputHours.value

    if (Number(inputWeeks.value) <= 0 ){
        console.log('Введите корректные данные')
        return;
    }

    const inputWeeksV = inputWeeks.value

    if (Number(inputMoney.value) <= 0) {
        console.log('Введите корректные данные')
        return;
    }

    const inputMoneyV = inputMoney.value

    const resultTotal = inputDaysV * inputHoursV * inputWeeksV * inputMoneyV

    resultText.innerHTML = `Total: ${resultTotal}`
}

inputDays.addEventListener('input', renderResult)
inputHours.addEventListener('input', renderResult)
inputWeeks.addEventListener('input', renderResult)
inputMoney.addEventListener('input', renderResult)