import React from "react";
import "../style/pages/dashboard.css";

import { Header, Sidebar } from "../components/layout";
import { Payment } from "../components/payments";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <Header />
        <Sidebar />
        <div className="dashboard_content">
            <Payment />
        </div>
      </div>
    );
  }
}

export default Dashboard;
