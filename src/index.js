import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { AppProvider } from "./store/AppContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Newsletter from "./components/Newsletter.jsx";
import Hero from "./components/Hero.jsx";
import Analytics from "./components/Analytics.jsx";
import Login from "./loginAndSignup/pages/Login.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router}></RouterProvider>
    </AppProvider>
  </React.StrictMode>
);
// bhary naice
