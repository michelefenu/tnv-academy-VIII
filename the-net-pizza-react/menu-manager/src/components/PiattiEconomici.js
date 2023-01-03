import React from "react";

const PiattiEconomici = ({ piatti, soglia }) => {
  return (
    <div>
      <h2>Piatti che costano meno di {soglia} €</h2>
      <ul>
        {piatti
          .filter((x) => x.price < +soglia)
          .map((x, index) => (
            <li key={index}>{x.name} - {x.price}€</li>
          ))}
      </ul>
    </div>
  );
};

export default PiattiEconomici;
