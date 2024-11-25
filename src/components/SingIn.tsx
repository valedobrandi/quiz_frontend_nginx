import { useState } from "react";
import validatePassword from "../utils/validPassword";
import validateUsername from "../utils/validUsername";
import GoogleSignInButton from "./GoogleSignInButton";
import { useNavigate } from "react-router-dom";

type ReactEvent = React.FormEvent<HTMLFormElement>;

const ACCESS_URL = `${import.meta.env.VITE_BACKEND_URL}/auth/access`;
const REGISTER_URL = `${import.meta.env.VITE_BACKEND_URL}/auth/register`;

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [warning, setWarning] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
    }
  };

  const fetchData = async (URL: string) => {
    const response = await fetch(`${URL}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();
        
    if (response.statusText.toUpperCase() === 'CREATED') {
      navigate("/");  
      return;
    }
    
    setWarning(data.message);
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleFormSubmit = () => {
    const checkUsernameRule = validateUsername(username);
    const checkPasswordRule = validatePassword(password);
    setWarning(checkUsernameRule ? checkUsernameRule : checkPasswordRule);
    if (checkPasswordRule) return;
    setWarning("");
  };

  const register = async (event: ReactEvent) => {
    event.preventDefault();
    handleFormSubmit();
    fetchData(REGISTER_URL);
  };

  const logIn = async (event: React.MouseEvent) => {
    event.preventDefault();
    handleFormSubmit();
    fetchData(ACCESS_URL);
  };

  return (
    <>
      <form
        onSubmit={register}
        className="flex flex-col max-w-[400px] justify-center 
        item-center m-auto gap-3 p-10"
      >
        <div className="label">
          <span className="label-text text-white font-bold">USERNAME</span>
        </div>
        <input
          autoComplete="true"
          type="text"
          className="
          input input-bordered text-black
          rounded p-2 text-sm input-sm
          placeholder:font-bold"
          placeholder="username"
          name="username"
          value={username}
          onChange={handleFormChange}
        />
        <div className="label">
          <span className="label-text text-white font-bold">EMAIL</span>
        </div>
        <input
          autoComplete="true"
          type="text"
          className="
          input input-bordered text-black
          rounded p-2 text-sm input-sm
          placeholder:font-bold"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleFormChange}
        />
        <div className="label">
          <span className="label-text text-white font-bold">PASSWORD</span>
        </div>
        <div className="relative flex items-center shrink-0">
          <input
            autoComplete="true"
            type={showPassword ? "text" : "password"}
            className="
            input input-bordered text-black
            rounded p-2 text-sm input-sm w-full
            placeholder:font-bold"
            placeholder="password"
            name="password"
            value={password}
            onChange={handleFormChange}
          />
          <button type="button" onClick={toggleShowPassword}>
            <img
              src={showPassword ? "eye-open.png" : "eye-close.png"}
              alt="show password"
              className="h-5 w-5 absolute right-3 top-1.5"
            />
          </button>
        </div>
        <p
          className="
            text-red-500 
            font-semibold 
            text-sm 
            text-center 
            md:text-left 
            md:ml-5 
            md:text-base"
        >
          {warning && warning}
        </p>
        <button
          type="button"
          className="
            btn 
            btn-primary 
            btn-sm 
            bg-[#641ae6] 
            font-black 
            text-[#f1f3f5] 
            uppercase"
          onClick={logIn}
        >
          enter
        </button>
        <button
          className="
            font-md 
            btn 
            btn-primary 
            btn-sm 
            bg-[#641ae6] 
            font-black uppercase"
          type="submit"
          name="button"
          value="submit"
        >
          register
        </button>
        <GoogleSignInButton />
      </form>
      <button
        className="btn btn-active btn-xs h-fit m-4 bg-[#641ae6] text-[#f1f3f5] uppercase"
        onClick={() => navigate(-1)}
      >
        <img
          src="icons8-arrow-48.png"
          alt="back"
          className="h-8 w-8 transform rotate-180"
        />
        back
      </button>
    </>
  );
}
