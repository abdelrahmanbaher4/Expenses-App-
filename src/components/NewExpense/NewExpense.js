import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEdititng, setisEdititng] = useState(false);
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  const startEditingHandler = () => {
    setisEdititng(true);
  };
  const stopEditingHandler = (event) => {
    setisEdititng(false);
  };
  return (
    <div className="new-expense">
      {!isEdititng && (
        <button onClick={startEditingHandler}> Add New Expense</button>
      )}
      {isEdititng && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
