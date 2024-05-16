import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.tsx";
import NotFound from "./routes/NotFound.tsx";
import { MainSubject } from "./routes/MainSubject.tsx";
import { SubSubjects } from "./routes/SubSubjects.tsx";

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
        element: <MainSubject />,
      },
      {
        //params för vald kategori?
        path: "/",
        element: <SubSubjects />,
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
