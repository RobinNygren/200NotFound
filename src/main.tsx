import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.tsx";
import NotFound from "./routes/NotFound.tsx";
import MainSubject from "./routes/MainSubject.tsx";
import SubSubjects from "./routes/SubSubjects.tsx";
import { GlobalSubjectsProvider } from "./state/GlobalStateContext.tsx";
import SubSubjectDetail from "./components/SubSubjectDetail/SubSubjectDetail.tsx";
import MainSubjectDetail from "./components/MainSubjectDetail/MainSubjectDetail.tsx";

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
        path: "/:page/details",
        element: <MainSubjectDetail />,
      },
      {
        //params för vald kategori?
        path: "/:page/:choice",
        element: <SubSubjects />,
      },
      {
        path: "/:page/:choice/:subSubject",
        element: <SubSubjectDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalSubjectsProvider>
      <RouterProvider router={router} />
    </GlobalSubjectsProvider>
  </React.StrictMode>
);
