import { useState } from 'react';

export default function ForgotPassword() {
  const [identifier, setIdentifier] = useState("");

  const handleRequestOtp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `Request failed with status ${response.status}`);
      }

      alert("OTP sent to your email");
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form className="bg-green-600" onSubmit={handleRequestOtp}>
        <h1>Forgot Password</h1>
        <div className="">
          <label htmlFor="identifier">
            Username / Email
            <input
              type="text"
              id="identifier"
              placeholder="Enter your username or email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />
          </label>
        </div>
        <button className="" type="submit">
          Request OTP
        </button>
      </form>
    </div>
  );
}