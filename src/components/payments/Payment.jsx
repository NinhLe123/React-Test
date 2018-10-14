import React from "react";
import TablePayment from "./TablePayment";
import "../../style/pages/payments.css";

const Payment = props => {
  return (
    <div className="payments">
      <div className="header_pay">
        <ul className="nav payment">
          <li>
            <a className="total">Total Payments: 0</a>
          </li>
          <li>
            <a className="total">Total Miners Paid: 0</a>
          </li>
          <li>
            <a className="Minimum">Minimum Payment Threshold: 1.000 XMR</a>
          </li>
          <li>
            <a style={{width: "380px"}}>Denomiation: 1.000 XMR</a>
          </li>
        </ul>
      </div>
      <div className="pay_content">
            <TablePayment />
      </div>
    </div>
  );
};

export default Payment;
