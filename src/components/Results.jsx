const Results = ({ points, onRestart }) => {
  return (
    <div className="results">
      <h2>Results</h2>
      <p>Military Aspect: {points.military}</p>
      <p>Ethical Aspect: {points.ethical}</p>
      <p>Usage of Resources: {points.resources}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default Results;
