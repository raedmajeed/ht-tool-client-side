import { useState, useContext } from "react";
import { UserContextProvider } from "../utility/UserContext";
import { useNavigate } from "react-router-dom";

const HrJob = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContextProvider);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    setUser({
      email,
      password,
      name: "Raed",
    });
    navigate("/hr/dashboard");
  };

  return (
    <div className="login-container-hero">
      <div className="login-container">
        <h1 className="mb-4 text-7xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-0xl dark:text-black">
          Add new Job
        </h1>
        <div className="email-container">
          <label
            htmlFor="helper-text"
            className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name"
          ></input>
        </div>
        <div className="email-container">
          <label
            htmlFor="helper-text"
            className="block mb-3  text-2xl font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="description"
          ></input>
        </div>
        <button
          type="submit"
          onClick={() => submitHandler()}
          className="mt-4 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-black-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default HrJob;
