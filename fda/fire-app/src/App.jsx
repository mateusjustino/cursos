import { useState, useEffect } from "react";
import { db } from "./firebase-connection";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

import "./app.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [idPost, setIdPost] = useState("");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
        let listaPost = [];
        snapshot.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          });
        });
        setPosts(listaPost);
      });
    };
    loadPosts();
  }, []);

  const handleAdd = async () => {
    // adicionando com id especifico
    // await setDoc(doc(db, "posts", "12345"), {
    //   titulo: titulo,
    //   autor: autor,
    // })
    //   .then(() => {
    //     console.log("dados registrado");
    //   })
    //   .catch((error) => {
    //     console.log("gerou erro" + error);
    //   });

    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor,
    })
      .then(() => {
        console.log("dados registrado");
        setAutor("");
        setTitulo("");
      })
      .catch((error) => {
        console.log("gerou erro" + error);
      });
  };

  const handleBuscarPost = async () => {
    // buscando um post especifico
    // const postRef = doc(db, "posts", "12345");
    // await getDoc(postRef)
    //   .then((snapshot) => {
    //     setAutor(snapshot.data().autor);
    //     setTitulo(snapshot.data().titulo);
    //   })
    //   .catch((error) => {
    //     console.log("gerou erro" + error);
    //   });
    const postsRef = collection(db, "posts");
    await getDocs(postsRef)
      .then((snapshot) => {
        let lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          });
        });
        setPosts(lista);
      })
      .catch((error) => {
        console.log("gerou erro" + error);
      });
  };

  const handleEditarPost = async () => {
    const docRef = doc(db, "posts", idPost);
    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor,
    }).then(() => {
      setAutor("");
      setTitulo("");
      setIdPost("");
    });
  };

  const handleExcluir = async (id) => {
    const docRef = doc(db, "posts", id);
    await deleteDoc(docRef).then(() => {
      console.log("deletado");
    });
  };
  return (
    <>
      <div>
        <h1>Firebase</h1>
      </div>

      <div className="container">
        <label htmlFor="">Id do Post:</label>
        <input
          type="text"
          placeholder="Digite o ID"
          value={idPost}
          onChange={(e) => setIdPost(e.target.value)}
        />

        <label htmlFor="">Titulo</label>
        <textarea
          placeholder="Digite o titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        ></textarea>

        <label htmlFor="">Autor:</label>
        <input
          type="text"
          placeholder="Autor do Post"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={handleBuscarPost}>Buscar Post</button>
        <button onClick={handleEditarPost}>Atualizar Post</button>

        <ul>
          {posts.map((item) => {
            return (
              <li key={item.id}>
                <strong>ID: {item.id}</strong> <br />
                <span>Titulo: {item.titulo}</span> <br />
                <span>Autor: {item.autor}</span> <br />
                <button onClick={() => handleExcluir(item.id)}>
                  Excluir
                </button>{" "}
                <br /> <br />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
