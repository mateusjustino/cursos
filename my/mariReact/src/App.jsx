import { createHashRouter, RouterProvider } from "react-router-dom";

// rotas
import Home from "./pages/Home/Home";
import Projetos from "./pages/Projetos/Projetos";
import Xodotopia from "./pages/Projetos/Xodotopia/Xodotopia";
import Contato from "./pages/Contato/Contato";
import Sobre from "./pages/Sobre/Sobre";
import ErrorPage from "./pages/Error/ErrorPage";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

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
    path: "/contato",
    element: <Contato />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
]);

import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";

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
