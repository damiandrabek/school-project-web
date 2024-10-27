const Scenario = ({ scenario, onChoice }) => {
  return (
    <div className="scenario">
      <h2>{scenario.title}</h2>

      <img src={scenario.imagePath} alt="" />

      <p>{scenario.description}</p>

      <p className="options">
        <div className="option">
          <span>Možnosť A: </span>
          <span>{scenario.optionNames["A"]}</span>
        </div>
        <div className="option">
          <span>Možnosť B: </span>
          <span>{scenario.optionNames["B"]}</span>
        </div>
        <div className="option">
          <span>Možnosť C: </span>
          <span>{scenario.optionNames["C"]}</span>
        </div>
      </p>

      <div className="choices">
        <button onClick={() => onChoice("A")}>Možnosť A</button>
        <button onClick={() => onChoice("B")}>Možnosť B</button>
        <button onClick={() => onChoice("C")}>Možnosť C</button>
      </div>
    </div>
  );
};

export default Scenario;
