import { useState } from "react";
import "../styles/styles.css";
import "../styles/modern-normalize.css";

export default function Form({ onFormSubmit }) {
  return (
    <>
      <GeneralInfo onFormSubmit={onFormSubmit} />
      <About onFormSubmit={onFormSubmit} />
      <Education onFormSubmit={onFormSubmit} />
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

  const toggleFormVisibility = () => {
    const formEle = document.querySelector(".about-form");
    formEle.classList.toggle("form-show");
  };

  return (
    <>
      <div className="about-form-header">
        <h1>About</h1>
        <button onClick={toggleFormVisibility}>Edit</button>
      </div>
      <form action="" className="about-form form-hide" onSubmit={handleSubmit}>
        <textarea
          id="about"
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

function Education({ onFormSubmit }) {
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit((prevData) => ({ ...prevData, education }));
  };

  const toggleFormVisibility = () => {
    const formEle = document.querySelector(".education-form");
    formEle.classList.toggle("form-show");
  };

  return (
    <>
      <div className="education-form-header">
        <h1>Education</h1>
        <button onClick={toggleFormVisibility}>Edit</button>
      </div>
      <form
        action=""
        className="education-form form-hide"
        onSubmit={handleSubmit}
      >
        <div className="school-container">
          <label htmlFor="school">School</label>
          <div className="school-input-container">
            <input
              type="text"
              id="school"
              onChange={(e) =>
                setEducation({ ...education, school: e.target.value })
              }
            />
          </div>
        </div>
        <div className="degree-container">
          <label htmlFor="degree">Degree</label>
          <div className="degree-input-container">
            <input
              type="text"
              id="degree"
              onChange={(e) =>
                setEducation({ ...education, degree: e.target.value })
              }
            />
          </div>
        </div>
        <div className="start-date-container">
          <label htmlFor="start-date">Start Date</label>
          <div className="start-date-input-container">
            <input
              type="text"
              id="start-date"
              onChange={(e) =>
                setEducation({ ...education, startDate: e.target.value })
              }
            />
          </div>
        </div>
        <div className="end-date-container">
          <label htmlFor="end-date">End Date</label>
          <div className="end-date-input-container">
            <input
              type="text"
              id="end-date"
              onChange={(e) =>
                setEducation({ ...education, endDate: e.target.value })
              }
            />
          </div>
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
}
