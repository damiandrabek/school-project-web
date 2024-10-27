const Intro = ({ onStart }) => {
  return (
    <div className="intro">
      <h2>Vitajte na WORKSHOPE</h2>
      <p>Dnes si otestujete svoje strategické schopnosti.</p>
      <button onClick={() => onStart()}>Začať workshop!</button>
    </div>
  );
};

export default Intro;
