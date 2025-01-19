import { useState } from "react";
import "../styles/styles.css";
import "../styles/modern-normalize.css";

export default function Form({ onFormSubmit }) {
  return (
    <>
      <GeneralInfo onFormSubmit={onFormSubmit} />
      <About onFormSubmit={onFormSubmit} />
    </>
  );
}

function GeneralInfo({ onFormSubmit }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit((prevData) => ({
      ...prevData,
      fullName,
      email,
      phone,
      linkedin,
      github,
    }));
  };
  return (
    <form action="" onSubmit={handleSubmit} className="general-form">
      <div className="full-name-container">
        <label htmlFor="full-name">Full Name</label>
        <div className="full-name-input-container">
          <input
            type="text"
            id="full-name"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
      </div>
      <div className="email-container">
        <label htmlFor="email">Email ID</label>
        <div className="email-input-container">
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="phone-container">
        <label htmlFor="phone">Phone</label>
        <div className="phone-input-container">
          <input
            type="tel"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="linkedin-container">
        <label htmlFor="linkedin">Linkedin</label>
        <div className="linkedin-input-container">
          <input
            type="text"
            id="linkedin"
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>
      </div>
      <div className="github-container">
        <label htmlFor="github">Github</label>
        <div className="github-input-container">
          <input
            type="text"
            id="github"
            onChange={(e) => setGithub(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="general-submit">
        Save
      </button>
    </form>
  );
}

function About({ onFormSubmit }) {
  const [about, setAbout] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit((prevData) => ({ ...prevData, about }));
  };
  return (
    <div className="about-container">
      <h1>About</h1>
      <button>Edit</button>
      <form action="" className="about-form" onSubmit={handleSubmit}>
        <textarea
          id="about"
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
