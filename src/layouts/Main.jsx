import { NavLink, Link, Navigate } from "react-router-dom";
import { auth } from "../utils/auth";

export default function Main({ children }) {
  let logged = auth();
  logged.catch(() => (window.location.href = "/auth/login"));

  return (
    <>
      {logged ? (
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
              </ul>
            </div>
          </nav>

          <section>{children}</section>
        </div>
      ) : (
        <Navigate replace to="/auth/login" />
      )}
    </>
  );
}
