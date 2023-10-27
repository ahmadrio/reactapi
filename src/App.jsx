import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/auth/Login";
import IndexUser from "./pages/users/Index";

export default function App() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/users" element={<IndexUser />} />
      <Route path="auth/login" element={<Login />} />
    </Routes>
  );
}
