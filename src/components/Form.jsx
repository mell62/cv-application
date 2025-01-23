import { Fragment, useState } from "react";
import "../styles/styles.css";
import "../styles/modern-normalize.css";

const toggleFormVisibility = (className) => {
  const formEle = document.querySelector(className);
  formEle.classList.toggle("form-show");
};

export default function Form({ onFormSubmit }) {
  return (
    <>
      <GeneralInfo onFormSubmit={onFormSubmit} />
      <About onFormSubmit={onFormSubmit} />
      <Education onFormSubmit={onFormSubmit} />
      <Experience onFormSubmit={onFormSubmit} />
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
    <div className="about-form-container">
      <div className="about-form-header">
        <h1>About</h1>
        <button onClick={() => toggleFormVisibility(".about-form")}>
          Edit
        </button>
      </div>
      <form action="" className="about-form form-hide" onSubmit={handleSubmit}>
        <textarea
          id="about"
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

function Education({ onFormSubmit }) {
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    isPresentEducation: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit((prevData) => ({ ...prevData, education }));
  };
  return (
    <div className="education-form-container">
      <div className="education-form-header">
        <h1>Education</h1>
        <button onClick={() => toggleFormVisibility(".education-form")}>
          Edit
        </button>
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
              type="date"
              id="start-date"
              max={new Date().toISOString().split("T")[0]}
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
              type="date"
              id="end-date"
              max={new Date().toISOString().split("T")[0]}
              onChange={(e) =>
                setEducation({ ...education, endDate: e.target.value })
              }
            />
            <input
              type="checkbox"
              id="present-education"
              onClick={() =>
                setEducation({
                  ...education,
                  isPresentEducation: !education.isPresentEducation,
                })
              }
            />
            <label htmlFor="present-education">Current</label>
          </div>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

function Experience({ onFormSubmit }) {
  const [experience, setExperience] = useState([]);
  const [editFlag, setEditFlag] = useState(false);

  const overviewEdit = editFlag === "overview";
  const individualEdit = editFlag === "individual";

  const addExperienceInput = () => {
    setExperience((prevExperience) => [
      ...prevExperience,
      {
        id: prevExperience.length + 1,
        editing: true,
        company: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      },
    ]);
    setEditFlag("individual");
  };

  const updateExperience = (id, field, newExperience) => {
    setExperience((prevExperience) =>
      prevExperience.map((item) =>
        item.id === id ? { ...item, [field]: newExperience } : item
      )
    );
  };

  const clearExperience = (id) => {
    setExperience((prevExperience) =>
      prevExperience.map((exp) => {
        if (exp.id === id) {
          return {
            ...exp,
            editing: true,
            company: "",
            position: "",
            responsibilities: "",
            startDate: "",
            endDate: "",
          };
        }
        return exp;
      })
    );
  };

  return (
    <div className="experience-form-container">
      <div className="experience-form-header">
        <h1>Professional Experience</h1>
        <button
          onClick={() => {
            editFlag ? setEditFlag(false) : setEditFlag("overview");
          }}
        >
          Edit
        </button>
      </div>
      {individualEdit
        ? experience
            .filter((item) => item.editing === true)
            .map((item) => (
              <form
                action=""
                key={item.id}
                className="experience-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  onFormSubmit((prevData) => ({ ...prevData, experience }));
                  item.editing = false;
                  setEditFlag("overview");
                }}
              >
                <label htmlFor="company-name-input">Company Name</label>
                <div className="company-name-input-container">
                  <input
                    type="text"
                    id="company-name-input"
                    value={item.company}
                    onChange={(e) =>
                      updateExperience(item.id, "company", e.target.value)
                    }
                  />
                </div>
                <label htmlFor="company-position-input">Position</label>
                <div className="company-position-input-container">
                  <input
                    type="text"
                    id="company-position-input"
                    value={item.position}
                    onChange={(e) =>
                      updateExperience(item.id, "position", e.target.value)
                    }
                  />
                </div>
                <label htmlFor="company-responsibilities-input">
                  Responsibilities
                </label>
                <div className="company-responsibilities-input-container">
                  <textarea
                    id="company-responsibilities-input"
                    value={item.responsibilities}
                    onChange={(e) =>
                      updateExperience(
                        item.id,
                        "responsibilities",
                        e.target.value
                      )
                    }
                  />
                </div>
                <label htmlFor="company-start-date-input">Start Date</label>
                <div className="company-start-date-input-container">
                  <input
                    type="date"
                    id="company-start-date-input"
                    max={new Date().toISOString().split("T")[0]}
                    value={item.startDate}
                    onChange={(e) =>
                      updateExperience(item.id, "startDate", e.target.value)
                    }
                  />
                </div>
                <label htmlFor="company-end-date-input">End Date</label>
                <div className="company-end-date-input-container">
                  <input
                    type="date"
                    id="company-end-date-input"
                    max={new Date().toISOString().split("T")[0]}
                    value={item.endDate}
                    onChange={(e) =>
                      updateExperience(item.id, "endDate", e.target.value)
                    }
                  />
                </div>
                <button
                  type="button"
                  className="del-btn"
                  onClick={() => clearExperience(item.id)}
                >
                  Clear
                </button>
                <button type="submit">Save</button>
              </form>
            ))
        : overviewEdit
        ? experience.map((item) => (
            <Fragment key={item.id}>
              <div className="company-name">{item.company}</div>
              {item.company ? (
                <button
                  className="experience-edit-btn"
                  onClick={() => {
                    item.editing = true;
                    setEditFlag("individual");
                  }}
                >
                  Edit
                </button>
              ) : null}
            </Fragment>
          ))
        : null}
      {individualEdit ? null : overviewEdit ? (
        <button onClick={addExperienceInput}>Add Experience</button>
      ) : null}
    </div>
  );
}
