import { useState } from "react";
import "../styles/styles.css";
import "../styles/modern-normalize.css";

export default function Form({ onFormSubmit }) {
  return (
    <>
      <GeneralInfo onFormSubmit={onFormSubmit} />
    </>
  );
}

function GeneralInfo({ onFormSubmit }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ fullName, email, phone, linkedin });
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="full-name">Full Name</label>
        <input
          type="text"
          id="full-name"
          onChange={(e) => setFullName(e.target.value)}
        />
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="linkedin">Linkedin</label>
        <input
          type="text"
          id="linkedin"
          onChange={(e) => setLinkedin(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
