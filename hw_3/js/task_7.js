const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
  ID: 1,
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    return{
        id: Transaction.ID++,
        amount,
        type,
    };
  },

  deposit(amount) {
      this.balance += amount;
      this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  withdraw(amount) {
    if (this.balance > amount){

    alert('ZERO_Balans');
    this.balance -= amount;
    this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW)
    )
}
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {},

  getTransactionTotal(type) {},
};
console.log(account.getBalance());
console.log(account.createTransaction(700,Transaction.WITHDRAW))
console.log(account.transactions);
account.deposit(4500);
console.log(account.transactions);
account.deposit(4570);