let myAccount = {
  name: 'Long Vo',
  expenses: 0,
  income: 0,
}

let addExpense = (account, amount) => {
  //   account = {} // break reference to object passed as argument
  //   console.log(account)

  if (amount < 0) {
    return
  }

  account.expenses += amount
}

let addIncome = (account, amount) => {
  if (amount < 0) {
    return
  }

  account.income += amount
}

let resetAccount = (account) => {
  account.expenses = 0
  account.income = 0
}

let getAccountSummary = (account) => {
  return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${
    account.expenses
  } in expenses.`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 100)
addExpense(myAccount, 150)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
