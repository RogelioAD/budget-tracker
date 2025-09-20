import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Header = () => {
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [remainder, setRemainder] = useState("");

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleIncomeSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted income:", income);
  };

  async function handleExpense() {}

  async function handleRemainder() {}

  return (
    <div>
      <div className="main-zone">
        <div className="title">Allo.</div>
        <div className="sub-title">
          <form onSubmit={handleIncomeSubmit}>
            <label>
              Income:
              <input
                type="text"
                value={income} 
                onChange={handleIncomeChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          <div>{income}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
