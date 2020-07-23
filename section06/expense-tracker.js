const account = {
  name: 'Long Vo',
  expenses: [],
  incomes: [],
  addExpense: function (description, amount) {
    if (description === '') {
      return
    }
    this.expenses.push({
      description,
      amount,
    })
  },
  addIncome: function (description, amount) {
    if (description === '') {
      return
    }
    this.incomes.push({
      description,
      amount,
    })
  },
  getAccountSummary: function () {
    const totalExpense = this.expenses.reduce((prev, current) => {
      return prev + current.amount
    }, 0)

    const totalIncome = this.incomes.reduce((prev, current) => {
      return prev + current.amount
    }, 0)

    return `${this.name} has a balance of $${
      totalIncome - totalExpense
    }. $${totalIncome} in income. $${totalExpense} in expenses.`
  },
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Salary', 1000)
console.log(account.getAccountSummary())
