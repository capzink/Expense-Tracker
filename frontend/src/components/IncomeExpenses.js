import React, {useContext} from "react";
import { GlobalContext } from "../Context/GlobalState";
import { commasinNumbers } from "../utils/format";

const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)
  const income = amounts.filter(amount=>amount>0).reduce((acc,item)=>acc+=item,0).toFixed(2)
  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            ${commasinNumbers(income)}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${commasinNumbers(expense)}</p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpenses;
