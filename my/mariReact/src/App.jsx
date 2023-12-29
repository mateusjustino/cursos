import { createHashRouter, RouterProvider } from "react-router-dom";

// rotas
import Home from "./pages/Home/Home";
import Projetos from "./pages/Projetos/Projetos";
import Xodotopia from "./pages/Projetos/ProjetoIndividual/Xodotopia";
import Covil from "./pages/Projetos/ProjetoIndividual/Covil";
import Jefairy from "./pages/Projetos/ProjetoIndividual/Jefairy";
import Sitka from "./pages/Projetos/ProjetoIndividual/Sitka";
import Hakuna from "./pages/Projetos/ProjetoIndividual/Hakuna";
import Vital from "./pages/Projetos/ProjetoIndividual/Vital";
import Contato from "./pages/Contato/Contato";
import Sobre from "./pages/Sobre/Sobre";
import ErrorPage from "./pages/Error/ErrorPage";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projetos",
    element: <Projetos />,
  },
  {
    path: "/projetos/xodotopia",
    element: <Xodotopia />,
  },
  {
    path: "/projetos/covil-do-cha",
    element: <Covil />,
  },
  {
    path: "/projetos/jefairy",
    element: <Jefairy />,
  },
  {
    path: "/projetos/sitka",
    element: <Sitka />,
  },
  {
    path: "/projetos/hakuna",
    element: <Hakuna />,
  },
  {
    path: "/projetos/vital",
    element: <Vital />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2000, // Duração das animações em milissegundos
      delay: 1000,
      once: true,
      anchorPlacement: "top-top",
    });

    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
