import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import * as React from "react";
// import * as ReactDOM from "react-dom/client";

// import { createHashRouter, RouterProvider } from "react-router-dom";

// import Home from "./pages/Home/Home";
// import Projetos from "./pages/Projetos/Projetos";
// import Xodotopia from "./pages/Projetos/Xodotopia/Xodotopia";
// import Contato from "./pages/Contato/Contato";
// import Sobre from "./pages/Sobre/Sobre";
// import ErrorPage from "./pages/Error/ErrorPage";

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/projetos",
//     element: <Projetos />,
//   },
//   {
//     path: "/projetos/xodotopia",
//     element: <Xodotopia />,
//   },
//   {
//     path: "/contato",
//     element: <Contato />,
//   },
//   {
//     path: "/sobre",
//     element: <Sobre />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
