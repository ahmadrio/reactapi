import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/auth/Login";
import IndexUser from "./pages/users/Index";
import auth from "./mixins/auth";

export default function App() {
  let logged = auth();

  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/users" element={<IndexUser />} />
      <Route
        path="auth/login"
        element={logged ? <Navigate to="/" /> : <Login />}
      />
    </Routes>
  );
}
