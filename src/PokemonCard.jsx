import React from "react";
import "./PokemonCard.css";

function PokemonCard({key, name, image}) {
  return (
  <div key={key} className="pokemon-card">
    <img src={image} alt={image} classname="pokemon-image" />
    <h3>{name}</h3>
    {/* <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>     */}
</div>
  );
}
 
export default PokemonCard
