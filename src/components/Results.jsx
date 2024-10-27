const Results = ({ points, onRestart }) => {
  return (
    <div className="results">
      <h2>Celkové body</h2>
      <p>Vojenské ciele: {points.military}</p>
      <p>Etický aspekt: {points.ethical}</p>
      <p>Využitie zdrojov: {points.resources}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default Results;
