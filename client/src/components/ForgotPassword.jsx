import { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const [identifier, setIdentifier] = useState("");
  const [question, setQuestion] = useState("");

  const handleResetPasswrod = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:3000/api/user/${identifier}`
      );
      const data = response.data;
      if (response.status === 200) {
        setQuestion(data.data.securityQuestion);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <form
        className="bg-green-600 h-[300px] flex flex-col justify-center w-[400px] flex p-4"
        onSubmit={handleResetPasswrod}
      >
        <h1 className="text-center text-3xl my-4 text-white">
          Forgot Password
        </h1>
        

        <div className="flex flex-col justify-center items-center">
        <label
            className="text-center text-white text-[24px] mb-2"
            htmlFor="usernameoremail"
          >
            Username
          </label>
          <input
            type="text"
            placeholder="Enter Username or Email"
            className="mt-1 w-[300px] text-center p-2 border border-gray-300 rounded mb-4"
          />
          <label htmlFor="identifier" className="text-[24px] text-white ">
            {question}
          </label>
          <input
            type="text"
            id="identifier"
            className="mt-1 w-[300px] text-center p-2 border border-gray-300 rounded mb-4"
            placeholder="Enter the answer"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <button
            className="bg-red-600 w-[50%] rounded py-2 uppercase text-white hover:bg-red-700"
            type="submit"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
}
