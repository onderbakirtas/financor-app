class Financor {
  balance = 0;
  categories = [
    {
      name: "food",
      text: "Gıda",
    },
    {
      name: "oil",
      text: "Yakıt",
    },
    {
      name: "transport",
      text: "Ulaşım",
    },
    {
      name: "bill",
      text: "Fatura",
    },
    {
      name: "education",
      text: "Eğitim",
    },
    {
      name: "health",
      text: "Sağlık",
    },
    {
      name: "wear",
      text: "Giyim",
    },
    {
      name: "furniture",
      text: "Eşya",
    },
    {
      name: "transfer",
      text: "Havale",
    },
  ];
  transactions = [];

  constructor() {}

  init() {
    this.setBalance();
    this.setCategories();
    this.setTransactions();
  }

  setBalance() {
    if (!localStorage.getItem("balance")) {
      localStorage.setItem("balance", this.balance);
    }
  }

  setCategories() {
    if (!localStorage.getItem("categories")) {
      localStorage.setItem("categories", JSON.stringify(this.categories));
    }
  }

  setTransactions() {
    if (!localStorage.getItem("transactions")) {
      localStorage.setItem("transactions", JSON.stringify(this.transactions));
    }
  }

  reset() {
    localStorage.removeItem("balance");
    localStorage.removeItem("categories");
    localStorage.removeItem("transactions");

    this.init();
  }

  handleTransaction(type, amount, date) {
    this.transactions = JSON.parse(localStorage.getItem("transactions"));
    this.transactions.push({ type, amount, date });
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }

  get balance() {
    return this.balance;
  }
}

export { Financor };
