export default function Telecallers() {
  const telecallers = [
    { name: "Rahul", calls: 45, conversions: 12 },
    { name: "Neha", calls: 30, conversions: 8 },
    { name: "Amit", calls: 50, conversions: 15 },
  ];

  return (
    <div className="page">
      <h3>Telecaller Performance</h3>

      <div className="cards">
        {telecallers.map((t, i) => (
          <div className="card" key={i}>
            <h4>{t.name}</h4>
            <p>Total Calls: {t.calls}</p>
            <p>Conversions: {t.conversions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
