const Scenario = ({ scenario, onChoice }) => {
  return (
    <div className="scenario">
      <h2>{scenario.title}</h2>
      <p>{scenario.description}</p>
      <div className="choices">
        <button onClick={() => onChoice("A")}>Option A</button>
        <button onClick={() => onChoice("B")}>Option B</button>
        <button onClick={() => onChoice("C")}>Option C</button>
      </div>
    </div>
  );
};

export default Scenario;
