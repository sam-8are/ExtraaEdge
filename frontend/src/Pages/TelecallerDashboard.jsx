import React, { useState } from "react";
import "./TelecallerDashboard.css";

const initialLeads = [
  {
    id: 1,
    name: "Rahul Sharma",
    phone: "9876543210",
    status: "New",
    remarks: [],
  },
  {
    id: 2,
    name: "Anita Verma",
    phone: "9123456780",
    status: "Follow-Up",
    remarks: [],
  },
];

const TelecallerDashboard = () => {
  const [leads, setLeads] = useState(initialLeads);
  const [selectedLead, setSelectedLead] = useState(null);
  const [remark, setRemark] = useState("");

  // 📌 Handle Lead Action
  const handleAction = (action) => {
    if (!remark.trim()) {
      alert("Remark is mandatory");
      return;
    }

    const updatedLeads = leads.map((lead) => {
      if (lead.id === selectedLead.id) {
        return {
          ...lead,
          status: action,
          remarks: [
            ...lead.remarks,
            {
              action,
              remark,
              time: new Date().toLocaleString(),
            },
          ],
        };
      }
      return lead;
    });

    setLeads(updatedLeads);
    setRemark("");
  };

  // 📊 Daily Report
  const report = {
    total: leads.length,
    converted: leads.filter((l) => l.status === "Converted").length,
    cold: leads.filter((l) => l.status === "Cold").length,
    followUp: leads.filter((l) => l.status === "Follow-Up").length,
    callBack: leads.filter((l) => l.status === "Call Back").length,
  };

  return (
    <div className="telecaller-dashboard">
      {/* HEADER */}
      <header className="dashboard-header">
        <h2>Telecaller Dashboard</h2>
        <button className="logout-btn">Logout</button>
      </header>

      <div className="dashboard-body">
        {/* LEAD LIST */}
        <div className="lead-list">
          <h3>Assigned Leads</h3>
          {leads.map((lead) => (
            <div
              key={lead.id}
              className={`lead-item ${
                selectedLead?.id === lead.id ? "active" : ""
              }`}
              onClick={() => setSelectedLead(lead)}
            >
              <p><strong>{lead.name}</strong></p>
              <p>{lead.phone}</p>
              <span className={`status ${lead.status}`}>
                {lead.status}
              </span>
            </div>
          ))}
        </div>

        {/* LEAD DETAILS */}
        <div className="lead-details">
          {selectedLead ? (
            <>
              <h3>Lead Details</h3>
              <p><strong>Name:</strong> {selectedLead.name}</p>
              <p><strong>Phone:</strong> {selectedLead.phone}</p>

              <textarea
                placeholder="Enter remark..."
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
              />

              <div className="action-buttons">
                <button onClick={() => handleAction("Called")}>📞 Call</button>
                <button onClick={() => handleAction("Follow-Up")}>🔁 Follow-Up</button>
                <button onClick={() => handleAction("Call Back")}>⏰ Call Back</button>
                <button onClick={() => handleAction("Cold")}>❌ Cold</button>
                <button onClick={() => handleAction("Converted")}>✅ Converted</button>
              </div>

              {/* ACTIVITY LOG */}
              <div className="activity-log">
                <h4>Activity History</h4>
                {selectedLead.remarks.map((r, i) => (
                  <p key={i}>
                    <strong>{r.action}</strong> – {r.remark} <br />
                    <small>{r.time}</small>
                  </p>
                ))}
              </div>
            </>
          ) : (
            <p>Select a lead to start</p>
          )}
        </div>
      </div>

      {/* DAILY REPORT */}
      <footer className="daily-report">
        <h4>Daily Work Report</h4>
        <p>Total Leads: {report.total}</p>
        <p>Converted: {report.converted}</p>
        <p>Cold: {report.cold}</p>
        <p>Follow-Ups: {report.followUp}</p>
        <p>Call Backs: {report.callBack}</p>
      </footer>
    </div>
  );
};

export default TelecallerDashboard;
