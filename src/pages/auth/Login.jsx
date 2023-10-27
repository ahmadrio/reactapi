import { useEffect, useState } from "react";
import { axios } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValidation, setEmailValidation] = useState("");
  const [validationMessage, setValidationMessage] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  const handlerSubmit = async (event) => {
    event.preventDefault();
    setEmailValidation("");
    setValidationMessage([]);

    await axios
      .post("/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.data.token_access);

        setEmail("");
        setPassword("");

        // pastikan setelah login berhasil menggunakan window.location.href agar keload semua halaman
        window.location.href = "/";
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setEmailValidation(err.response.data.message);
        }

        if (err.response.status === 422) {
          setValidationMessage(err.response.data.errors);
        }

        alert("Error: Invalid form submit");
      });
  };

  return (
    <div className="min-h-screen grid place-content-center bg-cyan-400">
      <div className="border p-4 rounded-lg shadow-lg bg-white border-slate-600">
        <h1 className="text-3xl text-center mb-5">Login</h1>
        <div>
          <form onSubmit={handlerSubmit} className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter your email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              {emailValidation && (
                <span className="text-red-400 text-sm">{emailValidation}</span>
              )}
              <span className="text-red-400 text-sm">
                {validationMessage?.email?.[0]}
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Enter your password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <span className="text-red-400 text-sm">
                {validationMessage?.password?.[0]}
              </span>
            </div>
            <div>
              <button type="submit" className="btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
