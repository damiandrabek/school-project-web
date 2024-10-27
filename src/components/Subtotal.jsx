const Subtotal = ({ points }) => {
  return (
    <div className="subtotal">
      <h2>Medzisúčet</h2>
      <p>Vojenské ciele: {points.military}</p>
      <p>Etický aspekt: {points.ethical}</p>
      <p>Využitie zdrojov: {points.resources}</p>
    </div>
  );
};

export default Subtotal;
