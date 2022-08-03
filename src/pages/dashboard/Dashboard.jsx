import React from "react";
import Layout from "../../components/layout/Layout";
import Profile from "../../components/profile/Profile";
import Lokasi from "../../components/lokasi/Lokasi";
import AkunBank from "../../components/akunbank/AkunBank";
import Relasi from "../../components/relasi/Relasi";
import Aktifitas from "../../components/aktifitas/Aktifitas";
import dashboardStyle from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <Layout>
      <div className={`container mx-auto p-4 ${dashboardStyle.containerDashboard} `}>
        <div className={`${dashboardStyle.lokasi}`}>
          <Lokasi />
        </div>
        <div className={`${dashboardStyle.profile}`}>
          <Profile />
        </div>
        <div className={`${dashboardStyle.akunBank}`}>
          <AkunBank />
        </div>
        <div className={`${dashboardStyle.relasi}`}>
          <Relasi />
        </div>
        <div className={`${dashboardStyle.aktifitas}`}>
          <Aktifitas />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
