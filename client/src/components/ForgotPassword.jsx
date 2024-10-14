import { useState } from "react";

export default function ForgotPassword() {
  const [identifier, setIdentifier] = useState("");

  const handleRequestOtp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/api/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ identifier }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || `Request failed with status ${response.status}`
        );
      }

      alert("OTP sent to your email");
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <form
        className="bg-green-600 h-[300px] w-[400px] flex p-4"
        onSubmit={handleRequestOtp}
      >
        <h1 className="text-center text-3xl my-4 text-white">
          Forgot Password
        </h1>
        <div className="flex flex-col justify-center items-center">
          <label htmlFor="identifier" className="text-[24px] text-white ">
            Username / Email
          </label>
          <input
            type="text"
            id="identifier"
            className="mt-1 w-[300px] text-center p-2 border border-gray-300 rounded mb-4"
            placeholder="Enter your username or email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <button
            className="bg-red-600 w-[50%] rounded py-2 uppercase text-white hover:bg-red-700"
            type="submit"
          >
            Request OTP
          </button>
        </div>
      </form>
    </div>
  );
}
