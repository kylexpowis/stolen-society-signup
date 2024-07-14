import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://stolensociety-mailchimp-server-7v8m-pwmiiqtsy.vercel.app/addSubscriber",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setMessage("Thank you for signing up!");
        navigate("/thankyoupage");
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.title}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-80 max-w-sm"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="p-2 mb-4 w-full text-white"
      />
      <button
        type="submit"
        className="p-2 w-full bg-white text-black hover:bg-gray-300"
      >
        Submit
      </button>
      {message && <p className="mt-4">{message}</p>}
    </form>
  );
};

export default EmailForm;
