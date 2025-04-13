import React, { useState } from "react";

function Expense() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (!description || !amount) return;
    setExpenses([
      ...expenses,
      { id: Date.now(), description, amount: parseFloat(amount) },
    ]);
    setDescription("");
    setAmount("");
  };

  const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="p-5 max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Expense Tracker</h2>

      {/* Input Fields */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Description"
          className="border p-2 flex-1 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          className="border p-2 flex-1 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={addExpense}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Expense List */}
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id} className="border-b p-2 flex justify-between">
            <span>{expense.description}</span>
            <span>${expense.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>

      {/* Total Expense */}
      <h3 className="mt-4 text-lg font-semibold text-center">
        Total: ${totalExpense.toFixed(2)}
      </h3>
    </div>
  );
}

export default Expense;
