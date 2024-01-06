/* eslint-disable react/prop-types */
function Navbar({ Precedent, Suivant, pokemonList, pokemonindex }) {
  return (
    <>
      {pokemonindex > 0 && (
        <button type="button" onClick={Precedent}>
          precedent
        </button>
      )}
      {pokemonindex < pokemonList.length - 1 && (
        <button type="button" onClick={Suivant}>
          suivant
        </button>
      )}
    </>
  );
}

export default Navbar;
