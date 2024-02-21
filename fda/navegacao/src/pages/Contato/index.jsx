import { Link } from "react-router-dom";

function Contato() {
  return (
    <div>
      <h1>Contatoe</h1>
      <span>pagina contatooo</span>
      <br />
      <br />
      <Link to="/">Home</Link> <br />
      <Link to="/sobre">Sobre</Link> <br />
    </div>
  );
}

export default Contato;
