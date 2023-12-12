/* eslint-disable react/prop-types */
function PokemonCard(props) {
  console.log("props", props);
  const { pokemon } = props;

  return (
    <figure>
      <figcaption>{pokemon.name}</figcaption>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
    </figure>
  );
}

export default PokemonCard;
