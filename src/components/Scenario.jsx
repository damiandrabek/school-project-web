const Scenario = ({ scenario, onChoice }) => {
  return (
    <div className="scenario">
      <h2>{scenario.title}</h2>
      <p>{scenario.description}</p>
      <div className="choices">
        <button onClick={() => onChoice("A")}>Možnosť A</button>
        <button onClick={() => onChoice("B")}>Možnosť B</button>
        <button onClick={() => onChoice("C")}>Možnosť C</button>
      </div>
    </div>
  );
};

export default Scenario;
