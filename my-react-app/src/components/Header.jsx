import React, { useEffect, useState } from "react";

const Header = () => {
  const [incomeInput, setIncomeInput] = useState("");
  const [income, setIncome] = useState(0);

  const [expenseInput, setExpenseInput] = useState("");
  const [category, setCategory] = useState("Food");
  const [expenses, setExpenses] = useState([]);

  const [remainder, setRemainder] = useState(0);

  useEffect(() => {
    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    setRemainder(income - totalExpenses);
  }, [income, expenses]);

  const handleIncomeSubmit = (e) => {
    e.preventDefault();
    setIncome(Number(incomeInput));
    setIncomeInput("");
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      amount: Number(expenseInput),
      category,
    };
    setExpenses((prev) => [...prev, newExpense]);
    setExpenseInput("");
  };

  return (
    <div className="main-zone">
      <div className="title">Allo.</div>
      <div className="sub-title input-boxes">

        <form className="input-form" onSubmit={handleIncomeSubmit}>
          <label>
            Income:
            <input
              type="number"
              value={incomeInput}
              onChange={(e) => setIncomeInput(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>

        <form className="input-form" onSubmit={handleExpenseSubmit}>
          <label>
            Expense:
            <input
              type="number"
              value={expenseInput}
              onChange={(e) => setExpenseInput(e.target.value)}
            />
          </label>
          <label>
            Category:
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Food">Food</option>
              <option value="Rent">Rent</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <button type="submit">Add Expense</button>
        </form>

        <h3>Income: ${income}</h3>
        <h3>Expenses:</h3>
        <ul>
          {expenses.map((exp, i) => (
            <li key={i}>
              {exp.category}: ${exp.amount}
            </li>
          ))}
        </ul>
        <h3>Remainder: ${remainder}</h3>
      </div>
    </div>
  );
};

export default Header;
