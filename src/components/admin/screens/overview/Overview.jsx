import React from "react";
import { MdOutlineAppSettingsAlt, MdAssignmentInd } from "react-icons/md";
import { AiFillCreditCard } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import HeaderComponent from "../../HeaderComponent";

import "./overview.css";

const Overview = () => {
  return (
    <>
      <header>
        <div className="heading">
          <h1>Good Morning</h1>
          <p>Welcome back, Admin</p>
        </div>

        <HeaderComponent />
      </header>

      <div className="overview-content">
        <div className="overview-stats">
          <div className="overview-cards stats">
            <div className="text">
              <p>Mobile Ads</p>
              <h6>3/5</h6>
            </div>
            <div className="icon" style={{ backgroundColor: "#CAD7D066" }}>
              <MdOutlineAppSettingsAlt size={24} color="#1F613E" />
            </div>
          </div>

          <div className="overview-cards stats">
            <div className="text">
              <p>Pending ATM Card Requests</p>
              <h6>1,078,065</h6>
            </div>
            <div className="icon" style={{ backgroundColor: "#549DC614" }}>
              <AiFillCreditCard size={24} color="#549DC6" />
            </div>
          </div>

          <div className="overview-cards stats">
            <div className="text">
              <p>Pensing Account Upgrade Request</p>
              <h6>32,632</h6>
            </div>
            <div className="icon" style={{ backgroundColor: "#F57E4314" }}>
              <FaUser size={24} color="#F57E43" />
            </div>
          </div>
        </div>

        <div className="overview-charts">
          <div className="col-1">
            <div className="overview-cards chart">
              <div className="heading">
                <div className="text">
                  <h6>Transaction Bar Chart</h6>
                  <p>Chart for Q3 2020 - Q3 2022</p>
                </div>

                <div className="action">
                  <button className="light-btn">See more</button>
                </div>
              </div>

              <div className="content"></div>
            </div>
          </div>

          <div className="col-2">
            <div className="mutliple">
              <div className="overview-cards chart">
                <div className="heading">
                  <div className="text">
                    <h6>Core Banking</h6>
                    <p>Total: 18,425</p>
                  </div>

                  <div className="action">
                    <span>N800,000</span>
                  </div>
                </div>

                <div className="content"></div>
              </div>

              <div className="overview-cards chart">
                <div className="heading">
                  <div className="text">
                    <h6>Investment</h6>
                    <p>Total: 18,425</p>
                  </div>

                  <div className="action">
                    <span>N800,000</span>
                  </div>
                </div>

                <div className="content"></div>
              </div>
            </div>

            <div className="mutliple">
              <div className="overview-cards chart">
                <div className="heading">
                  <div className="text">
                    <h6>Loans</h6>
                    <p>Total: 18,425</p>
                  </div>

                  <div className="action">
                    <span>N800,000</span>
                  </div>
                </div>

                <div className="content"></div>
              </div>

              <div className="overview-cards chart">
                <div className="heading">
                  <div className="text">
                    <h6>Collections</h6>
                    <p>Total: 18,425</p>
                  </div>

                  <div className="action">
                    <span>N800,000</span>
                  </div>
                </div>

                <div className="content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
