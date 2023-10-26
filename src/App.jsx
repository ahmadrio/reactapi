import { Routes, Route, NavLink, Link, useNavigate } from "react-router-dom";
import IndexUser from "./pages/users/Index";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/auth/Login";

export default function App() {
  let logged = false;
  const navigate = useNavigate();

  if (!logged) {
    navigate("/auth/login");
  }

  return <div>{logged ? <AuthPage /> : <Login />}</div>;
}

function AuthPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <nav className="bg-slate-800 text-white p-4 flex justify-between shadow-md">
        <div className="grid place-content-center">
          <Link to="" className="text-lg uppercase tracking-wide">
            Logo
          </Link>
        </div>
        <div>
          <ul className="flex justify-center items-center space-x-1">
            <li className="">
              <NavLink
                to="/"
                className="hover:bg-cyan-700 px-4 py-2 rounded-md transition-all"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="users"
                className="hover:bg-cyan-700 px-4 py-2 rounded-md transition-all"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <section>
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="users" element={<IndexUser />} />
          <Route path="auth/login" element={<Login />} />
        </Routes>
      </section>
    </div>
  );
}
