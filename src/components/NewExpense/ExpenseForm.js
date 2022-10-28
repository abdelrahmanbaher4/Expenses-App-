import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  // handling multiple states
  const [EnteredTitle, setTitle] = useState("");
  const [EnteredAmount, setAmount] = useState("");
  const [EnteredDate, setDate] = useState("");

  const TitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const AmountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const DateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault(); // preventing page reload
    const expenseData = {
      title: EnteredTitle,
      amount: +EnteredAmount,
      date: new Date(EnteredDate),
    };
    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  /* // doing it in only 1 state 
    const [userInput, setUserInput] = useState({
    Title: "",
    Amount: "",
    Date: "",
    });
const TitleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      Title: event.target.value,
    });
  };


  const AmountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      Amount: event.target.value,
    });
  };

  const DateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      Date: event.target.value,
    });
  };
*/

  //if state depends on other state :-
  /*
    const TitleChangeHandler = (event) => {
        setUserInput((prevState)=>{
            return {...prevState,Title:event.target.value} //overwrite also
        });
    };
  */

  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control ">
          <label>Title</label>
          <input
            type="text"
            value={EnteredTitle}
            onChange={TitleChangeHandler}
          />
        </div>
        <div className="new-expense__control ">
          <label>Amount</label>
          <input
            type="number"
            value={EnteredAmount}
            min="0.01"
            step="0.01"
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control ">
          <label>Date</label>
          <input
            type="date"
            value={EnteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
