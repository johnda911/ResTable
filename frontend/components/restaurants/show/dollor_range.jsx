import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const DollorRange = (props) => {
  const expenseLevel = props.expense;

  function renderSwitch() {
    switch (expenseLevel) {
      case 1:
        return <span className="range">$0 to $20</span>;
      case 2:
        return <span className="range">$21 to $30</span>;
      case 3:
        return <span className="range">$31 to $50</span>;
      case 4:
        return <span className="range">$50+</span>;
      default:
        return <span className="range">unknown</span>;
    }
  }

  return (
    <div className="dollor-range short-div">
      <FaRegMoneyBillAlt className="bill-icon" />
      {renderSwitch()}
    </div>
  );
};

export default DollorRange;
