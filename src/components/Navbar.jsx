function Navbar({ Precedent, Suivant }) {
  return (
    <>
      <div>
        <button onClick={Precedent}>precedent</button>
        <button onClick={Suivant}>suivant</button>
      </div>
    </>
  );
}

export default Navbar;
