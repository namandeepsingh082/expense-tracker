import React, { useState } from "react";
import "./ExpenseTracker.css";

const ExpenseTracker = () => {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (!input || !amount || isNaN(parseFloat(amount))) return;

    const newExpense = {
      id: expenses.length + 1,
      title: input,
      amount: parseFloat(amount),
    };

    setExpenses([...expenses, newExpense]);
    setInput("");
    setAmount("");
  };

  const totalExpense = expenses.reduce(
    (acc, expense) => acc + (expense.amount || 0),
    0
  );

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expenses) => expenses.id !== id));
  };

  return (
    <div className="container">
      <h2>ExpenseTracker</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Expense"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={addExpense}>Add Expense</button>
      </div>
      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.title}</span>
            <span>{expense.amount}</span>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="total-expense">
        <h3>
          Total Expense: Rs{" "}
          {!isNaN(totalExpense) ? totalExpense.toFixed(2) : "0.00"}
        </h3>
      </div>
    </div>
  );
};

export default ExpenseTracker;
