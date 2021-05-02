import React, { useState } from "react";
import Modal from "../Modal/Modal";
import CreateEditHospital from "./CreateEditHospital/CreateEditHospital";

// Styles
import "./Dashboard.css";
import HospitalCard from "./HospitalCard/HospitalCard";

const Dashboard = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="dashboard">
      {isCreateModalOpen && (
        <Modal setIsModal={setIsCreateModalOpen}>
          <CreateEditHospital isCreate />
        </Modal>
      )}

      <div className="dashboard__hospitalGrid">
        <div
          className="hospitalCard hospitalCard__add"
          onClick={() => setIsCreateModalOpen(true)}
        >
          <i className="fas fa-plus-circle"></i>
        </div>

        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
      </div>
    </div>
  );
};

export default Dashboard;
