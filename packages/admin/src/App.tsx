import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./admin.scss";
import AdminManagementPage from "./pages/AdminManagementPage";
import BoardPage from "./pages/BoardPage/Board.route";
import LoginPage from "./pages/Login";
import PlaceManagementPage from "./pages/PlaceManagementPage/Place.route";
import { store } from "./store";

function App() {
  // useSocket();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/board/*" element={<BoardPage />} />
          <Route path="/manage/*" element={<AdminManagementPage />} />
          <Route path="/place/*" element={<PlaceManagementPage />} />
          <Route path="*" element={<Navigate to="/board" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function ProviderApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default ProviderApp;
