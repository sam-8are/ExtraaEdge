import { useState } from "react";
import * as XLSX from "xlsx";

export default function AssignLeads() {
  const [leads, setLeads] = useState([]);

  const uploadExcel = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (evt) => {
      const binary = evt.target.result;
      const workbook = XLSX.read(binary, { type: "binary" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(sheet);
      setLeads(data);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div className="page">
      <h3>Upload & Assign Leads</h3>

      <input type="file" accept=".xlsx,.xls" onChange={uploadExcel} />

      {leads.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Course</th>
              <th>Assign</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index}>
                <td>{lead.Name}</td>
                <td>{lead.Mobile}</td>
                <td>{lead.Course}</td>
                <td>
                  <select>
                    <option>Select</option>
                    <option>Rahul</option>
                    <option>Neha</option>
                    <option>Amit</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
