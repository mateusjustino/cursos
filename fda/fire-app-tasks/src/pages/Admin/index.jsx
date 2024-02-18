import "./admin.css";

import { useState, useEffect } from "react";
import { auth, db } from "../../firebase-connection";
import { signOut } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

export default function Admin() {
  const [tarefaInput, setTarefaInput] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const loadTarefas = async () => {
      const userDetail = localStorage.getItem("@detailUser");
      setUser(JSON.parse(userDetail));
    };

    loadTarefas();
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (tarefaInput == "") {
      alert("clicoo");
      return;
    }

    await addDoc(collection(db, "tarefas"), {
      tarefa: tarefaInput,
      created: new Date(),
      userUid: user?.uid,
    })
      .then(() => {
        console.log("Tarefa Registrada");
        setTarefaInput("");
      })
      .catch((error) => {
        console.log("Erro ao register: " + error);
      });
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="admin-container">
      <h1>Minhas tarefase</h1>

      <form className="form" onSubmit={handleRegister}>
        <textarea
          placeholder="Digite sua tarefa..."
          value={tarefaInput}
          onChange={(e) => setTarefaInput(e.target.value)}
        />

        <button type="submit" className="btn-register">
          Registrar Tarefa
        </button>
      </form>

      <article className="list">
        <p>Esturar JS</p>

        <div>
          <button>Editar</button>
          <button className="btn-delete">Concluir</button>
        </div>
      </article>

      <button className="btn-logout" onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
}
