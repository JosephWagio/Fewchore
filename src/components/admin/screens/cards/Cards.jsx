import React, { useState } from "react";
import HeaderComponent from "../../HeaderComponent";
import { FiFilter } from "react-icons/fi";
import cardImage1 from "../../../../assets/wpf_bank-cards.svg";
import cardImage2 from "../../../../assets/mdi_credit-card-chip.svg";
import cardImage3 from "../../../../assets/mdi_credit-card-clock-outline.svg";
import cardImage4 from "../../../../assets/mdi_credit-card-remove-outline.svg";
import "./cards.css";

const Cards = () => {
  const [view, setview] = useState(1);
  const changeView = (view) => {
    setview(view);
  };

  const sortData = [
    {
      id: "1",
      text: "Fewchore",
    },
    {
      id: "2",
      text: "Other Banks",
    },
  ];

  const transactionData = [
    {
      id: "1",
      cardName: "Louis John Cena",
      amount: 7500,
      accountNum: 1234567890,
      readStatus: true,
      status: "Active",
    },
    {
      id: "2",
      cardName: "Louis John Cena",
      amount: 7500,
      accountNum: 1234567890,
      readStatus: true,
      status: "Pending",
    },
  ];

  const [dropdownVisible, setdropdownVisible] = useState(false);
  const [sort, setsort] = useState(sortData[0]);
  return (
    <>
      <header>
        <div className="heading">
          <h1>Cards</h1>
        </div>

        <HeaderComponent />
      </header>

      <div className="cards-content">
        <div className="cards-category">
          <div
            className={view == 1 ? "category-card active" : "category-card"}
            onClick={() => changeView(1)}
          >
            <div className="text">
              <h6>All cards</h6>
              <p>843</p>
            </div>

            <div className="icon">
              <img src={cardImage1} alt="" />
            </div>
          </div>

          <div
            className={view == 2 ? "category-card active" : "category-card"}
            onClick={() => changeView(2)}
          >
            <div className="text">
              <h6>Active Cards</h6>
              <p>843</p>
            </div>

            <div className="icon">
              <img src={cardImage2} alt="" />
            </div>
          </div>

          <div
            className={view == 3 ? "category-card active" : "category-card"}
            onClick={() => changeView(3)}
          >
            <div className="text">
              <h6>Pending Card Request</h6>
              <p>843</p>
            </div>

            <div className="icon">
              <img src={cardImage3} alt="" />
            </div>
          </div>

          <div
            className={view == 4 ? "category-card active" : "category-card"}
            onClick={() => changeView(4)}
          >
            <div className="text">
              <h6>Disabled Cards</h6>
              <p>843</p>
            </div>

            <div className="icon">
              <img src={cardImage4} alt="" />
            </div>
          </div>
        </div>

        <div className="cards-search">
          <input
            type="text"
            placeholder="Search Customers, Account Numbers, etc."
          />

          <div className="dropdown">
            <button
              onClick={() => {
                setdropdownVisible(!dropdownVisible);
              }}
            >
              <FiFilter size={24} />
              Filter: {sort.text}
            </button>

            <div
              className={
                dropdownVisible == true
                  ? "dropdown-options visible"
                  : "dropdown-options"
              }
            >
              <p>Sort By:</p>

              {sortData.map((data) => (
                <button
                  className={sort.id == data.id ? "active" : ""}
                  onClick={() => {
                    setsort(data);
                    setdropdownVisible(!dropdownVisible);
                  }}
                >
                  {data.text}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="cards-table">
          <div className="header">
            <div className="card-name">Name on card</div>
            <div className="card-type">Card type</div>
            <div className="status">status</div>
            <div className="account-num">account no.</div>
            <div className="action">Action</div>
          </div>
          {transactionData.map((item) => (
            <div className="item">
              <div className="card-name">{item.cardName}</div>
              <div className="card-type">
                <span>N</span> {item.amount.toLocaleString()}
              </div>
              <div className="status" status={item.status}>
                {item.status}
              </div>
              <div className="account-num">{item.accountNum}</div>
              <div className="action">
                {item.status == "Active" && <button>Disable</button>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
