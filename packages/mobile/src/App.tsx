import "./mobile.scss";
import { Navigate } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cafeteria from "./page/Cafeteria";
import Calendar from "./page/Calendar";
import Category from "./page/Category";
import Home from "./page/Home";
import Map from "./page/Map";
import Notification from "./page/Notification";

function App() {

  const routes = [
    { id: 1, path: "/notification", element: <Notification /> },
    { id: 2, path: "/calendar", element: <Calendar /> },
    { id: 3, path: "/home", element: <Home /> },
    { id: 4, path: "/cafeteria", element: <Cafeteria /> },
    { id: 5, path: "/map", element: <Map /> },
    { id: 6, path: "/category", element: <Category /> },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App