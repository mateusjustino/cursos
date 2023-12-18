import "./App.css";
// Importe o Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Se você precisar de componentes JavaScript interativos do Bootstrap (como modais, carrosséis, etc.), você também pode importar o Bootstrap JS:
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./src/Header";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <button className="btn btn-primary">Clique em Mim</button>
      </div>
    </>
  );
}

export default App;
