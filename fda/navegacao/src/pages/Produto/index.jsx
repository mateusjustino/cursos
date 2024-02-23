import { useParams } from "react-router-dom";

function Produto() {
  const { id } = useParams();
  return (
    <div>
      <p>o meu produto é {id}</p>
    </div>
  );
}

export default Produto;
