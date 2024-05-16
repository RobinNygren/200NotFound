import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.tsx";
import NotFound from "./routes/NotFound.tsx";
import { MainCategory } from "./routes/MainCategory.tsx";
import { SubCategory } from "./routes/SubCategory.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/:page",
        element: <MainCategory />,
      },
      {
        //params för vald kategori?
        path: "/:page/:choice",
        element: <SubCategory />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <GlobalStateProvider> */}
    <RouterProvider router={router} />
    {/*  </GlobalStateProvider> */}
  </React.StrictMode>
);
