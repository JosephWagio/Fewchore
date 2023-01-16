import React, { useState } from "react";
import HeaderComponent from "../../HeaderComponent";
import { IoMdMore } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import "./transactions.css";

const Transactions = () => {
  const [view, setview] = useState(1);
  const changeView = (view) => {
    setview(view);
  };

  const transactionData = [
    {
      id: "1",
      accountName: "Louis John Cena",
      amount: 7500,
      category: "Cable TV",
      accountNum: 1234567890,
      readStatus: true,
      createdAt: "10/JUN/2022, 13:26",
      status: "Successful",
    },
    {
      id: "2",
      accountName: "Louis John Cena",
      amount: 7500,
      category: "Utility Bill",
      accountNum: 1234567890,
      readStatus: true,
      createdAt: "10/JUN/2022, 13:26",
      status: "Declined",
    },
  ];

  return (
    <>
      <header>
        <div className="heading">
          <h1>Transactions</h1>
        </div>

        <HeaderComponent />
      </header>

      <div className="transactions-content">
        <div className="transactions-category">
          <div
            className={view == 1 ? "category-card active" : "category-card"}
            onClick={() => changeView(1)}
          >
            <h6>All Transactions</h6>
            <p>843</p>
          </div>

          <div
            className={view == 2 ? "category-card active" : "category-card"}
            onClick={() => changeView(2)}
          >
            <h6>Funds Transfer</h6>
            <p>843</p>
          </div>

          <div
            className={view == 3 ? "category-card active" : "category-card"}
            onClick={() => changeView(3)}
          >
            <h6>Bills Payment</h6>
            <p>843</p>
          </div>

          <div
            className={view == 4 ? "category-card active" : "category-card"}
            onClick={() => changeView(4)}
          >
            <h6>Airtime & Data</h6>
            <p>843</p>
          </div>
        </div>

        <div className="transaction-search">
          <input
            type="text"
            placeholder="Search Customers, Account Numbers, etc."
          />
        </div>

        <div className="transaction-table">
          <div className="header">
            <div className="account-name">
              Account Name <IoChevronDown size={20} />
            </div>
            <div className="amount">Amount</div>
            <div className="category">Category</div>
            <div className="account-num">Acct Number</div>
            <div className="date">Date/Time</div>
            <div className="status">Status</div>
            <div className="action">Action</div>
          </div>
          {transactionData.map((item) => (
            <div className="item">
              <div className="account-name">{item.accountName}</div>
              <div className="amount">
                <span>N</span> {item.amount.toLocaleString()}
              </div>
              <div className="category">{item.category}</div>
              <div className="account-num">{item.accountNum}</div>
              <div className="date">{item.createdAt}</div>
              <div className="status" status={item.status}>
                {item.status}
              </div>
              <div className="action">
                <IoMdMore size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Transactions;
