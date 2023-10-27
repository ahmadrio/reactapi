import { NavLink, Link, useNavigate } from "react-router-dom";
import { auth, axios } from "../utils/auth";
import { useEffect } from "react";

export default function Main({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/auth/login");
    }

    auth().catch(() => navigate("/auth/login"));
  }, [navigate]);

  const handleLogout = async (e) => {
    e.preventDefault();

    await axios.post("/logout").then(() => {
      localStorage.removeItem("token");
      navigate("/auth/login");
    });
  };

  return (
    <>
      <div className="min-h-screen bg-slate-100">
        <nav className="bg-slate-800 text-white p-4 flex justify-between shadow-md">
          <div className="grid place-content-center">
            <Link to="/" className="text-lg uppercase tracking-wide">
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
                  to="/users"
                  className="hover:bg-cyan-700 px-4 py-2 rounded-md transition-all"
                >
                  Users
                </NavLink>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleLogout}
                  className="hover:bg-red-700 px-4 py-2 rounded-md transition-all"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <section>{children}</section>
      </div>
    </>
  );
}
