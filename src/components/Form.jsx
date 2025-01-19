import { useState } from "react";
import "../styles/styles.css";
import "../styles/modern-normalize.css";

export default function Form({ onFormSubmit }) {
  return (
    <>
      <About onFormSubmit={onFormSubmit} />
    </>
  );
}

function About({ onFormSubmit }) {
  const [fullName, setFullName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ fullName });
  };
  return (
    <>
      <h2>About</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="full-name">Full Name</label>
        <input
          type="text"
          id="full-name"
          onChange={(e) => setFullName(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
