import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Header = () => {
  const [incomeInput, setIncomeInput] = useState("");
  const [income, setIncome] = useState("");

  const [expenseInput, setExpenseInput] = useState("");
  const [expense, setExpense] = useState("");

  const [remainder, setRemainder] = useState("");

  useEffect(() => {
    setRemainder(income - expense);
  }, [income, expense]);

  const handleIncomeChange = (e) => {
    setIncomeInput(e.target.value);
  };

  const handleIncomeSubmit = (e) => {
    e.preventDefault();
    setIncome(incomeInput);

    console.log("Submitted income:", incomeInput);
  };

  const handleExpenseChange = (e) => {
    setExpenseInput(e.target.value);
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    setExpense(expenseInput);

    console.log("Submitted expense:", expenseInput);
  };


  return (
    <div>
      <div className="main-zone">
        <div className="title">Allo.</div>
        <div className="sub-title input-boxes">
          <form className="input-form" onSubmit={handleIncomeSubmit}>
            <label>
              Income:
              <input
                type="text"
                value={incomeInput}
                onChange={handleIncomeChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          <form className="input-form" onSubmit={handleExpenseSubmit}>
            <label>
              Expense:
              <input
                type="text"
                value={expenseInput}
                onChange={handleExpenseChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          <div>{income}</div>
          <div>{expense}</div>
          <div>{remainder}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
