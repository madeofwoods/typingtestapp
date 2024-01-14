// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Error from "./pages/Error.tsx";
import Game from "./pages/Game.tsx";
import GlobalContextProvider from "./context/GlobalContextProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/game",
    element: <Game />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <GlobalContextProvider>
    <RouterProvider router={router} />
  </GlobalContextProvider>
  // </React.StrictMode>,
);
