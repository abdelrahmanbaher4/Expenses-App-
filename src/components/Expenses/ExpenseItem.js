import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  const { amount, date, title } = props;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <h2 className="expense-item__description">{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
