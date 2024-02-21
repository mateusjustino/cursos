import "./admin.css";

import { useState, useEffect } from "react";
import { auth, db } from "../../firebase-connection";
import { signOut } from "firebase/auth";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

export default function Admin() {
  const [tarefaInput, setTarefaInput] = useState("");
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState({});

  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const loadTarefas = async () => {
      const userDetail = localStorage.getItem("@detailUser");
      setUser(JSON.parse(userDetail));

      if (userDetail) {
        const data = JSON.parse(userDetail);

        const tarefaRef = collection(db, "tarefas");
        const q = query(
          tarefaRef,
          orderBy("created", "desc"),
          where("userUid", "==", data?.uid)
        );

        const unsub = onSnapshot(q, (snapshot) => {
          let lista = [];
          snapshot.forEach((doc) => {
            lista.push({
              id: doc.id,
              tarefa: doc.data().tarefa,
              userUid: doc.data().userUid,
            });
          });
          setTarefas(lista);
        });
      }
    };

    loadTarefas();
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (tarefaInput == "") {
      alert("clicoo");
      return;
    }

    if (edit?.id) {
      handleUpdateTarefa();
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

  const deleteTarefa = async (id) => {
    const docRef = doc(db, "tarefas", id);
    await deleteDoc(docRef);
  };

  const editTarefa = (item) => {
    setTarefaInput(item.tarefa);
    setEdit(item);
  };

  const handleUpdateTarefa = async () => {
    const docRef = doc(db, "tarefas", edit?.id);
    await updateDoc(docRef, {
      tarefa: tarefaInput,
    })
      .then(() => {
        console.log("Tarefa Atualizada");
        setTarefaInput("");
        setEdit({});
      })
      .catch(() => {
        console.log("erro ao atualizar");
        setTarefaInput("");
        setEdit({});
      });
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

        {Object.keys(edit).length > 0 ? (
          <button
            type="submit"
            className="btn-register"
            style={{ backgroundColor: "#408523" }}
          >
            Atualizar Tarefa
          </button>
        ) : (
          <button type="submit" className="btn-register">
            Registrar Tarefa
          </button>
        )}
      </form>

      {tarefas.map((item) => (
        <article className="list" key={item.id}>
          <p>{item.tarefa}</p>

          <div>
            <button onClick={() => editTarefa(item)}>Editar</button>
            <button
              className="btn-delete"
              onClick={() => deleteTarefa(item.id)}
            >
              Concluir
            </button>
          </div>
        </article>
      ))}

      <button className="btn-logout" onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
}
