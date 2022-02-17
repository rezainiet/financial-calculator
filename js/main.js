// get input value function
function getInputValue(id) {
    const numberInput = document.getElementById(id);
    const inputAmount = parseFloat(numberInput.value);
    numberInput.value = '';
    return inputAmount;
}

// event handler of calculate
document.getElementById('calculate-button').addEventListener('click', function (e) {
    // Income Aamount 
    const incomeInput = document.getElementById("income-input");
    const incomeAmount = parseFloat(incomeInput.value);

    // Food Amount
    const foodAmount = getInputValue('food-input');

    // Rent Amount 
    const rentAmount = getInputValue('rent-input');

    // Clothes Amount
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
    // Error Handling
    else {
        const getCalculateError = document.getElementById('calculate-error');
        getCalculateError.innerText = 'Please enter a valid number!'
    }
})

// event handler of saving
document.getElementById('save-button').addEventListener('click', function (e) {
    // Get saving input 
    const savingInput = getInputValue('save-input');
    // Income amount 
    const incomeInput = document.getElementById("income-input");
    const incomeAmount = parseFloat(incomeInput.value);
    // get balance text 
    const balanceText = document.getElementById('balance');
    const balance = parseFloat(balanceText.innerText);
    if (savingInput > 0) {
        // Get Saving Percentage
        if (savingInput <= 100) {
            const savingTotal = incomeAmount / 100 * savingInput;
            if (balance >= savingTotal) {
                document.getElementById('save-error').style.display = "none";
                const savingAmountText = document.getElementById('saving-amount');
                savingAmountText.innerText = savingTotal;
                
                // Get remaining balance text 
                const remainingBalanceText = document.getElementById('remaining-balance');

                // Calculation of remaining balance!
                const remainingBalance = balance - savingTotal;
                remainingBalanceText.innerText = remainingBalance;
            }
            // Error handling
            else {
                document.getElementById('save-error').style.display = "block";
                document.getElementById('save-error').innerText = " Your Saving amount can't be bigger than your main balance";
            }
        }
        // Error handling
        else {
            document.getElementById('save-error').style.display = "block";
            document.getElementById('save-error').innerText = "Please enter a number smaller than 100";
        }
    }

    // Error handling
    else {
        document.getElementById('save-error').style.display = "block";
        document.getElementById('save-error').innerText = "Please enter a valid number!";
    }
})