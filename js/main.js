

document.getElementById('calculate-button').addEventListener('click', function () {

    // Food Input Value
    const foodInput = document.getElementById('foodInput');
    const foodAmountText = foodInput.value;
    const foodAmount = parseFloat(foodAmountText);
    // console.log(foodAmount);

    // Rent Input Value
    const rentInput = document.getElementById('rentInput');
    const rentAmountText = rentInput.value;
    const rentAmount = parseFloat(rentAmountText);
    // console.log(rentAmount);


    // Clothes Input Value
    const clothesInput = document.getElementById('clothesInput');
    const clothesAmountText = clothesInput.value;
    const clothesAmount = parseFloat(clothesAmountText);
    // console.log(clothesAmount);


    // Total Expenses Amount
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpenseText = totalExpenses.innerText;
    const totalExpenseAmount = parseFloat(totalExpenseText);

    // Total of Total expenses
    const totalOfTotalExpenses = totalExpenses.innerText = foodAmount + rentAmount + clothesAmount;

    // Income Input
    const incomeInput = document.getElementById('incomeInput');
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText);

    // Balance
    const balanceText = document.getElementById('balance-text');
    const balanceAmountText = balanceText.innerText;
    const balanceAmount = parseFloat(balanceAmountText);

    balanceText.innerText = incomeAmount - totalOfTotalExpenses;
});

// (input * balance) / 100
document.getElementById('save-button').addEventListener('click', function () {

    // Balance
    const balanceText = document.getElementById('balance-text');
    const balanceAmountText = balanceText.innerText;
    const balanceAmount = parseFloat(balanceAmountText);

    // Save Input field
    const saveInput = document.getElementById('save-input');
    const saveInputAmountText = saveInput.value;
    const saveInputAmount = parseFloat(saveInputAmountText);
    // console.log(saveInputAmount);

    // Saving Amount
    const getSavingAmount = document.getElementById('saving-amount');
    const savingAmountText = getSavingAmount.innerText;
    const savingAmount = parseFloat(savingAmountText);
    // console.log(savingAmount);

    // Remaining Balance
    const getRemainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceText = getRemainingBalance.innerText;
    const remainingBalance = parseFloat(remainingBalanceText);
    // console.log('This is remaing balance', remainingBalance);

    const newSavingAmount = getSavingAmount.innerText = (saveInputAmount * balanceAmount) / 100;
    getRemainingBalance.innerText = balanceAmount - newSavingAmount;
})