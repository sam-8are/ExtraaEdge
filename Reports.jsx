const dailyLeads = [
  { date: "2026-01-01", total: 120, assigned: 110 },
  { date: "2026-01-02", total: 150, assigned: 140 },
  { date: "2026-01-03", total: 180, assigned: 170 },
];

const telecallerPerformance = [
  { name: "Rahul", calls: 45, conversions: 12 },
  { name: "Neha", calls: 30, conversions: 8 },
  { name: "Amit", calls: 50, conversions: 15 },
];

const conversionReport = [
  { source: "Website", leads: 120, converted: 40 },
  { source: "Facebook Ads", leads: 90, converted: 25 },
  { source: "Walk-In", leads: 60, converted: 30 },
];

export default function Reports() {
  return (
    <div className="page">
      <h3>Reports</h3>

      
      <h4>📅 Daily Lead Report</h4>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total Leads</th>
            <th>Assigned Leads</th>
          </tr>
        </thead>
        <tbody>
          {dailyLeads.map((d, i) => (
            <tr key={i}>
              <td>{d.date}</td>
              <td>{d.total}</td>
              <td>{d.assigned}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <h4 style={{ marginTop: "30px" }}>📞 Telecaller Performance</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Calls</th>
            <th>Conversions</th>
          </tr>
        </thead>
        <tbody>
          {telecallerPerformance.map((t, i) => (
            <tr key={i}>
              <td>{t.name}</td>
              <td>{t.calls}</td>
              <td className="converted">{t.conversions}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <h4 style={{ marginTop: "30px" }}>📊 Conversion Report</h4>
      <table>
        <thead>
          <tr>
            <th>Lead Source</th>
            <th>Total Leads</th>
            <th>Converted</th>
          </tr>
        </thead>
        <tbody>
          {conversionReport.map((c, i) => (
            <tr key={i}>
              <td>{c.source}</td>
              <td>{c.leads}</td>
              <td className="converted">{c.converted}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <div className="export-buttons">
        <button className="excel">Export Excel</button>
        <button className="pdf">Export PDF</button>
      </div>
    </div>
  );
}
