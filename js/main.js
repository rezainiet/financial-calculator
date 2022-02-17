// get input value function
function getInputValue(id) {
    const numberInput = document.getElementById(id);
    const inputAmount = parseFloat(numberInput.value);
    numberInput.value = '';
    return inputAmount;
}

// event handler of calculate
document.getElementById('calculate-button').addEventListener('click', function (e) {
    // income amount 
    const incomeInput = document.getElementById("income-input");
    const incomeAmount = parseFloat(incomeInput.value);
    // food amount
    const foodAmount = getInputValue('food-input');
    // rent amount 
    const rentAmount = getInputValue('rent-input');
    // clothes amount
    const clothesAmount = getInputValue('clothes-input');
    if (foodAmount > 0 && rentAmount > 0 && clothesAmount > 0) {
        document.getElementById('calculate-error').style.display = 'none';
        const expenseTotal = foodAmount + rentAmount + clothesAmount;
        if (incomeAmount < expenseTotal) {
            document.getElementById('insufficient-balance').innerText = 'Insufficient Income Balance!!';
        }
        else {
            const totalExpenseText = document.getElementById('total-expense');
            totalExpenseText.innerText = expenseTotal;
            const balanceText = document.getElementById('balance');
            const updateBalance = incomeAmount - expenseTotal;
            balanceText.innerText = updateBalance;
        }
    }
    // error handeling
    else {
        const getCalculateError = document.getElementById('calculate-error');
        getCalculateError.innerText = 'Please enter the valid number!!'
    }
})

// event handler of saving
document.getElementById('save-button').addEventListener('click', function (e) {
    // get saving input 
    const savingInput = getInputValue('save-input');
    // income amount 
    const incomeInput = document.getElementById("income-input");
    const incomeAmount = parseFloat(incomeInput.value);
    // get balance text 
    const balanceText = document.getElementById('balance');
    const balance = parseFloat(balanceText.innerText);
    if (savingInput > 0) {
        // document.getElementById('save-error').style.display = "none";
        // get saving percentage
        if (savingInput <= 100) {
            const savingTotal = incomeAmount / 100 * savingInput;
            if (balance >= savingTotal) {
                document.getElementById('save-error').style.display = "none";
                const savingAmountText = document.getElementById('saving-amount');
                savingAmountText.innerText = savingTotal;
                // get remaing balance text 
                const remainingBalanceText = document.getElementById('remaining-balance');
                // calculate remaining balance
                const remainingBalance = balance - savingTotal;
                remainingBalanceText.innerText = remainingBalance;
            }
            // error handeling
            else {
                document.getElementById('save-error').style.display = "block";
                document.getElementById('save-error').innerText = " Your Saving amount can't be bigger than your main balance";
            }
        }
        // error handeling
        else {
            document.getElementById('save-error').style.display = "block";
            document.getElementById('save-error').innerText = "Please enter a number smaller than 100";
        }
    }
    // error handeling
    else {
        document.getElementById('save-error').style.display = "block";
        document.getElementById('save-error').innerText = "Please enter the valid number!!";
    }
})