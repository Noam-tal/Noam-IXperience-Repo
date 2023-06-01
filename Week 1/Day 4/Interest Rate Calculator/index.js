let loanAmount = document.getElementById("loan-amount")

let interestRate = document.getElementById("interest-rate")
let yearsToRepay = document.getElementById("years-to-repay")
output = document.getElementById("output")
function calculateLoan(event){
event.preventDefault()
    const loan = loanAmount.value
    console.log(loan)
    const Interest = interestRate.value
    console.log(Interest)
    const years = yearsToRepay.value
    console.log(years)

    const total = loan * Math.pow((1+(Interest/100)), years)
console.log(total)
    loanAmount.value = ''
    interestRate.value = ''
    yearsToRepay.value = ''

    output.innerHTML = `$ ${total}`
}
