import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>homee</h1>
      <span>Toda a pagina home</span>
      <br />
      <br />
      <Link to="/sobre">Sobre</Link> <br />
      <Link to="/contato">Contato</Link>
    </div>
  );
}

export default Home;
