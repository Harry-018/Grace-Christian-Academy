import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { User, Lock } from "lucide-react";
import LoginButton from "./Components/GreenButton.jsx";

import AuthStore from "./Store/AuthStore.js";
import { AuthLogin } from "./services/service/authLogin.jsx";

function Login() {
  const navigate = useNavigate();

  const login = AuthStore((state) => state.login);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await AuthLogin(formData);

      login(response.data.token, response.data.user);

      const roleRoutes = {
        admin: "/admin",
        // teacher: "/teacher",
        // parent: "/parent",
      };

      const route = roleRoutes[response.data.user.role] || "/Login";

      navigate(route);
    } catch (error) {
      setErrorMessage("Wrong Email or Password");
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-egg font-[Poppins]">
      <div className="flex h-[50%] w-auto flex-col items-center justify-between rounded-2xl bg-bone p-5 inset-shadow-med">
        <div className="flex items-center justify-center gap-2 font-[PoppinsBold]">
          <img
            src="/assets/logowbg.png"
            alt="Logo"
            className="h-10 rounded-full"
          />
          <h1 className="text-sm leading-4">
            Grace Christian <br /> Academy of Cavite Inc.
          </h1>
        </div>
        <div className="font-[PoppinsBold] text-swamp-green xs:text-2xl">
          Login
        </div>

        <div className="flex flex-col gap-y-3">
          <h1 className="text-center text-xs text-ashlight">
            Login with your grace christian academy account
          </h1>
          {errorMessage && (
            <p className="w-full rounded-lg border border-reject bg-reject/10 py-2 text-center text-xs text-reject">
              {errorMessage}
            </p>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-y-2">
              <input
                onChange={handleChange}
                name="email"
                type="email"
                className="text-bg-egg-dark w-full rounded-md border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
                placeholder="Email"
              />
              <input
                onChange={handleChange}
                name="password"
                type="password"
                className="text-bg-egg-dark w-full rounded-md border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
                placeholder="password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full cursor-pointer rounded-md bg-swamp-green p-2 font-[PoppinsBold] text-sm text-egg inset-shadow-small duration-200 active:scale-95"
              >
                Enter
              </button>

              <Link to="/">
                <button
                  type="button"
                  className="w-full cursor-pointer rounded-md p-2 text-sm text-egg-dark duration-200 active:scale-95"
                >
                  Go Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
