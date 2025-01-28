import { useState } from "react";
import "../styles/styles.css";
import "../styles/modern-normalize.css";
import expandIcon from "../assets/expand-icon.svg";
import minimizeIcon from "../assets/minimize-icon.svg";
import editIcon from "../assets/edit-icon.svg";

export default function Form({ onFormSubmit, deleteData }) {
  return (
    <>
      <GeneralInfo onFormSubmit={onFormSubmit} />
      <div className="form-about-education-row">
        <About onFormSubmit={onFormSubmit} />
        <Education onFormSubmit={onFormSubmit} />
      </div>
      <Experience onFormSubmit={onFormSubmit} deleteExp={deleteData} />
      <Project onFormSubmit={onFormSubmit} deleteProj={deleteData} />
      <Skills onFormSubmit={onFormSubmit} deleteSkill={deleteData} />
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
      <div className="general-form-container">
        <div className="full-name-container individual-input-container">
          <label htmlFor="full-name">Full Name</label>
          <div className="full-name-input-container">
            <input
              type="text"
              id="full-name"
              className="general-form-input"
              maxLength={30}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        </div>
        <div className="email-container individual-input-container">
          <label htmlFor="email">Email ID</label>
          <div className="email-input-container">
            <input
              type="email"
              id="email"
              className="general-form-input"
              maxLength={30}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="phone-container individual-input-container">
          <label htmlFor="phone">Phone</label>
          <div className="phone-input-container">
            <input
              type="tel"
              id="phone"
              className="general-form-input"
              maxLength={20}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="linkedin-container individual-input-container">
          <label htmlFor="linkedin">Linkedin</label>
          <div className="linkedin-input-container">
            <input
              type="text"
              id="linkedin"
              className="general-form-input"
              maxLength={30}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </div>
        </div>
        <div className="github-container individual-input-container">
          <label htmlFor="github">Github</label>
          <div className="github-input-container">
            <input
              type="text"
              id="github"
              className="general-form-input"
              maxLength={30}
              onChange={(e) => setGithub(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button type="submit" className="submit-btn">
        SAVE
      </button>
    </form>
  );
}

function About({ onFormSubmit }) {
  const [about, setAbout] = useState("");
  const [editFlag, setEditFlag] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit((prevData) => ({ ...prevData, about }));
  };

  return (
    <div className="about-form-container">
      <div className="about-form-header">
        <h1>About</h1>
        <button
          onClick={() => {
            setEditFlag(!editFlag);
          }}
          className="expand-btn"
        >
          {editFlag ? (
            <img src={minimizeIcon} alt="Minimize card button" />
          ) : (
            <img src={expandIcon} alt="Expand card button" />
          )}
        </button>
      </div>
      <form action="" className="about-form" onSubmit={handleSubmit}>
        <div
          className={`about-input-container form-hide ${
            editFlag ? "form-show" : ""
          }`}
        >
          <textarea
            id="about"
            className="about-form-input"
            maxLength={200}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
          <button type="submit" className="submit-btn">
            SAVE
          </button>
        </div>
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
  const [editFlag, setEditFlag] = useState(false);

  const checkStartDateValidity = (startDateString) => {
    const startDate = new Date(startDateString);
    const startDateEle = document.querySelector(".education-start-date");
    const endDateEle = document.querySelector(".education-end-date");

    if (endDateEle.value) {
      const endDate = new Date(endDateEle.value);
      if (endDate < startDate) {
        startDateEle.setCustomValidity(
          "Start date cannot be later than end date"
        );
      } else {
        startDateEle.setCustomValidity("");
      }
    } else {
      startDateEle.setCustomValidity("");
    }
  };

  const checkEndDateValidity = (endDateString) => {
    const endDate = new Date(endDateString);
    const startDateEle = document.querySelector(".education-start-date");

    if (startDateEle.value) {
      const startDate = new Date(startDateEle.value);
      if (endDate < startDate) {
        startDateEle.setCustomValidity(
          "Start date cannot be later than end date"
        );
      } else {
        startDateEle.setCustomValidity("");
      }
    } else {
      startDateEle.setCustomValidity("");
    }
  };

  const setPresentDate = () => {
    const endDateEle = document.querySelector(".education-end-date");
    const todayDate = new Date();
    const todayDateStr = todayDate.toISOString().split("T")[0];

    endDateEle.value = todayDateStr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit((prevData) => ({ ...prevData, education }));
  };
  return (
    <div className="education-form-container">
      <div className="education-form-header">
        <h1>Education</h1>
        <button
          onClick={() => {
            setEditFlag(!editFlag);
          }}
          className="expand-btn"
        >
          {editFlag ? (
            <img src={minimizeIcon} alt="Minimize card button" />
          ) : (
            <img src={expandIcon} alt="Expand card button" />
          )}
        </button>
      </div>
      <form action="" className="education-form" onSubmit={handleSubmit}>
        <div
          className={`education-input-container form-hide ${
            editFlag ? "form-show" : ""
          }`}
        >
          <div className="education-input-sub-container">
            <div className="school-container individual-input-container">
              <label htmlFor="school">School</label>
              <div className="school-input-container">
                <input
                  type="text"
                  id="school"
                  className="education-form-input"
                  required={true}
                  maxLength={50}
                  onChange={(e) =>
                    setEducation({ ...education, school: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="degree-container individual-input-container">
              <label htmlFor="degree">Degree</label>
              <div className="degree-input-container">
                <input
                  type="text"
                  id="degree"
                  className="education-form-input"
                  maxLength={50}
                  onChange={(e) =>
                    setEducation({ ...education, degree: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="start-date-container individual-input-container">
              <label htmlFor="start-date">Start Date</label>
              <div className="start-date-input-container">
                <input
                  type="date"
                  id="start-date"
                  className="education-form-input education-start-date"
                  max={new Date().toISOString().split("T")[0]}
                  onChange={(e) => {
                    setEducation({ ...education, startDate: e.target.value });
                    checkStartDateValidity(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="end-date-container individual-input-container">
              <label htmlFor="end-date">End Date</label>
              <div className="end-date-input-container">
                <input
                  type="date"
                  id="end-date"
                  className="education-form-input education-end-date"
                  max={new Date().toISOString().split("T")[0]}
                  onChange={(e) => {
                    setEducation({ ...education, endDate: e.target.value });
                    checkEndDateValidity(e.target.value);
                  }}
                />
                <div className="present-checkbox-container">
                  <input
                    type="checkbox"
                    id="present-education"
                    className="present-checkbox"
                    onClick={() => {
                      setEducation({
                        ...education,
                        isPresentEducation: !education.isPresentEducation,
                      });
                      setPresentDate();
                    }}
                  />
                  <label htmlFor="present-education">Current</label>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="submit-btn">
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
}

function Experience({ onFormSubmit, deleteExp }) {
  const [experience, setExperience] = useState([]);
  const [editFlag, setEditFlag] = useState(false);

  const overviewEdit = editFlag === "overview";
  const individualEdit = editFlag === "individual";

  const checkStartDateValidity = (startDateString) => {
    const startDate = new Date(startDateString);
    const startDateEle = document.querySelector(".experience-start-date");
    const endDateEle = document.querySelector(".experience-end-date");
    const presentCheckbox = document.querySelector(
      ".experience-present-checkbox"
    );

    if (endDateEle.value && !presentCheckbox.checked) {
      const endDate = new Date(endDateEle.value);
      if (endDate < startDate) {
        startDateEle.setCustomValidity(
          "Start date cannot be later than end date"
        );
      } else {
        startDateEle.setCustomValidity("");
      }
    } else {
      startDateEle.setCustomValidity("");
    }
  };

  const checkEndDateValidity = (endDateString) => {
    const endDate = new Date(endDateString);
    const startDateEle = document.querySelector(".experience-start-date");
    const presentCheckbox = document.querySelector(
      ".experience-present-checkbox"
    );

    if (startDateEle.value && !presentCheckbox.checked) {
      const startDate = new Date(startDateEle.value);
      if (endDate < startDate) {
        startDateEle.setCustomValidity(
          "Start date cannot be later than end date"
        );
      } else {
        startDateEle.setCustomValidity("");
      }
    } else {
      startDateEle.setCustomValidity("");
    }
  };

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
        isPresentWork: false,
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

  const deleteExperience = (attribute, id) => {
    setExperience((prevExp) =>
      prevExp
        .filter((exp) => exp.id !== id)
        .map((exp, index) => ({
          ...exp,
          id: index + 1,
        }))
    );
    deleteExp(attribute, id);
    setEditFlag("overview");
  };

  return (
    <div className="experience-form-container">
      <div className="experience-form-header">
        <h1>Professional Experience</h1>
        <button
          className="expand-btn"
          onClick={() => {
            editFlag ? setEditFlag(false) : setEditFlag("overview");
          }}
        >
          {editFlag ? (
            <img src={minimizeIcon} alt="Minimize card button" />
          ) : (
            <img src={expandIcon} alt="Expand card button" />
          )}
        </button>
      </div>
      <div className="experience-form-super-container">
        {experience
          .filter((item) => item.editing === true)
          .map((item) => (
            <form
              action=""
              key={item.id}
              className={`experience-form ${
                individualEdit ? "show-display" : "no-display"
              }`}
              onSubmit={(e) => {
                e.preventDefault();
                onFormSubmit((prevData) => ({ ...prevData, experience }));
                item.editing = false;
                setEditFlag("overview");
              }}
            >
              <div className="experience-input-container">
                <div className="experience-input-sub-container">
                  <div className="individual-input-container">
                    <label htmlFor="company-name-input">Company Name</label>
                    <div className="company-name-input-container">
                      <input
                        type="text"
                        id="company-name-input"
                        className="experience-form-input"
                        value={item.company}
                        required={true}
                        maxLength={50}
                        onChange={(e) =>
                          updateExperience(item.id, "company", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="individual-input-container">
                    <label htmlFor="company-position-input">Position</label>
                    <div className="company-position-input-container">
                      <input
                        type="text"
                        id="company-position-input"
                        className="experience-form-input"
                        value={item.position}
                        maxLength={50}
                        onChange={(e) =>
                          updateExperience(item.id, "position", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="individual-input-container">
                    <label htmlFor="company-responsibilities-input">
                      Responsibilities
                    </label>
                    <div className="company-responsibilities-input-container">
                      <textarea
                        id="company-responsibilities-input"
                        value={item.responsibilities}
                        className="experience-form-input"
                        maxLength={400}
                        onChange={(e) =>
                          updateExperience(
                            item.id,
                            "responsibilities",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="individual-input-container">
                    <label htmlFor="company-start-date-input">Start Date</label>
                    <div className="company-start-date-input-container">
                      <input
                        type="date"
                        id="company-start-date-input"
                        max={new Date().toISOString().split("T")[0]}
                        className="experience-form-input experience-start-date"
                        value={item.startDate}
                        onChange={(e) => {
                          updateExperience(
                            item.id,
                            "startDate",
                            e.target.value
                          );
                          checkStartDateValidity(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="individual-input-container">
                    <label htmlFor="company-end-date-input">End Date</label>
                    <div className="company-end-date-input-container end-date-input-container">
                      <input
                        type="date"
                        id="company-end-date-input"
                        max={new Date().toISOString().split("T")[0]}
                        className="experience-form-input experience-end-date"
                        value={item.endDate}
                        onChange={(e) => {
                          updateExperience(item.id, "endDate", e.target.value);
                          checkEndDateValidity(e.target.value);
                        }}
                      />
                      <div className="present-checkbox-container">
                        <input
                          type="checkbox"
                          id="present-experience"
                          checked={item.isPresentWork}
                          className="present-checkbox experience-present-checkbox"
                          onChange={() => {}}
                          onClick={() => {
                            updateExperience(
                              item.id,
                              "isPresentWork",
                              !item.isPresentWork
                            );
                          }}
                        />
                        <label htmlFor="present-experience">Current</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience-individual-btns-container">
                  <button
                    type="button"
                    onClick={() => deleteExperience("experience", item.id)}
                    className="delete-btn"
                  >
                    DELETE
                  </button>
                  <button type="submit" className="submit-btn">
                    SAVE
                  </button>
                </div>
              </div>
            </form>
          ))}
        <div
          className={`experience-overview-super-container ${
            experience.filter((exp) => exp.company).length === 0
              ? "no-display"
              : overviewEdit
              ? "form-show"
              : individualEdit
              ? "no-display"
              : "form-hide"
          }`}
        >
          {experience.map((item) => (
            <div key={item.id} className="experience-overview-container">
              <div className="company-name">{item.company}</div>
              {item.company ? (
                <button
                  className="edit-btn"
                  onClick={() => {
                    item.editing = true;
                    setEditFlag("individual");
                  }}
                >
                  <img src={editIcon} alt="Edit button" className="edit-icon" />
                </button>
              ) : null}
            </div>
          ))}
        </div>
        <div
          className={`add-experience-btn-container form-hide ${
            overviewEdit ? "form-show" : individualEdit ? "no-display" : ""
          }`}
        >
          <button onClick={addExperienceInput} className="add-experience-btn">
            ADD EXPERIENCE
          </button>
        </div>
      </div>
    </div>
  );
}

function Project({ onFormSubmit, deleteProj }) {
  const [project, setProject] = useState([]);
  const [editFlag, setEditFlag] = useState(false);

  const overviewEdit = editFlag === "overview";
  const individualEdit = editFlag === "individual";

  const addProject = () => {
    setProject((prevProject) => [
      ...prevProject,
      {
        id: prevProject.length + 1,
        editing: true,
        projectName: "",
        projectSummary: "",
      },
    ]);
    setEditFlag("individual");
  };

  const updateProject = (id, field, newProject) => {
    setProject((prevProject) =>
      prevProject.map((proj) =>
        proj.id === id ? { ...proj, [field]: newProject } : proj
      )
    );
  };

  const deleteProject = (attribute, id) => {
    setProject((prevProject) =>
      prevProject
        .filter((proj) => proj.id !== id)
        .map((proj, index) => ({
          ...proj,
          id: index + 1,
        }))
    );
    deleteProj(attribute, id);
    setEditFlag("overview");
  };

  return (
    <div className="project-form-container">
      <div className="project-form-header">
        <h1>Projects</h1>
        <button
          className="expand-btn"
          onClick={() => {
            editFlag ? setEditFlag(false) : setEditFlag("overview");
          }}
        >
          {editFlag ? (
            <img src={minimizeIcon} alt="Minimize card button" />
          ) : (
            <img src={expandIcon} alt="Expand card button" />
          )}
        </button>
      </div>
      <div className="project-form-super-container">
        {project
          .filter((proj) => proj.editing === true)
          .map((proj) => (
            <form
              key={proj.id}
              action=""
              className={`project-form ${
                individualEdit ? "show-display" : "no-display"
              }`}
              onSubmit={(e) => {
                e.preventDefault();
                onFormSubmit((prevData) => ({ ...prevData, project }));
                proj.editing = false;
                setEditFlag("overview");
              }}
            >
              <div className="project-input-container">
                <div className="project-input-sub-container">
                  <div className="individual-input-container">
                    <label htmlFor="project-name-input">Name</label>
                    <div className="project-name-input-container">
                      <input
                        type="text"
                        id="project-name-input"
                        value={proj.projectName}
                        className="project-form-input"
                        required={true}
                        maxLength={40}
                        onChange={(e) =>
                          updateProject(proj.id, "projectName", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="individual-input-container">
                    <label htmlFor="project-summary-input">Summary</label>
                    <div className="project-summary-input-container">
                      <textarea
                        id="project-summary-input"
                        value={proj.projectSummary}
                        className="project-form-input"
                        maxLength={200}
                        onChange={(e) =>
                          updateProject(
                            proj.id,
                            "projectSummary",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="project-individual-btns-container">
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => deleteProject("project", proj.id)}
                  >
                    DELETE
                  </button>
                  <button type="submit" className="submit-btn">
                    SAVE
                  </button>
                </div>
              </div>
            </form>
          ))}
        <div
          className={`project-overview-super-container ${
            project.filter((proj) => proj.projectName).length === 0
              ? "no-display"
              : overviewEdit
              ? "form-show"
              : individualEdit
              ? "no-display"
              : "form-hide"
          }`}
        >
          {project
            .filter((proj) => proj.projectName)
            .map((proj) => (
              <div key={proj.id} className="project-overview-container">
                <div className="project-name">{proj.projectName}</div>
                {proj.projectName ? (
                  <button
                    className="edit-btn"
                    onClick={() => {
                      setEditFlag("individual");
                      proj.editing = true;
                    }}
                  >
                    <img
                      src={editIcon}
                      alt="Edit button"
                      className="edit-icon"
                    />
                  </button>
                ) : null}
              </div>
            ))}
        </div>
        <div
          className={`add-project-btn-container form-hide ${
            overviewEdit ? "form-show" : individualEdit ? "no-display" : ""
          } `}
        >
          <button onClick={addProject} className="add-project-btn">
            ADD PROJECT
          </button>
        </div>
      </div>
    </div>
  );
}

function Skills({ onFormSubmit, deleteSkill }) {
  const [skills, setSkills] = useState([]);
  const [editFlag, setEditFlag] = useState(false);

  const addSkill = () => {
    setSkills((prevSkills) => [
      ...prevSkills,
      {
        id: prevSkills.length + 1,
        skillName: "",
      },
    ]);
  };

  const updateSkill = (id, newSkill) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.id === id ? { ...skill, skillName: newSkill } : skill
      )
    );
  };

  const deleteSkills = (id) => {
    setSkills((prevSkills) =>
      prevSkills
        .filter((skill) => skill.id !== id)
        .map((skill, index) => ({ ...skill, id: index + 1 }))
    );
    deleteSkill("skills", id);
  };

  return (
    <div className="skills-form-container">
      <div className="skills-form-header">
        <h1>Skills</h1>
        <button
          className="expand-btn"
          onClick={() => {
            editFlag ? setEditFlag(false) : setEditFlag(true);
          }}
        >
          {editFlag ? (
            <img src={minimizeIcon} alt="Minimize card button" />
          ) : (
            <img src={expandIcon} alt="Expand card button" />
          )}
        </button>
      </div>
      <form
        action=""
        className="skills-form"
        onSubmit={(e) => {
          e.preventDefault();
          onFormSubmit((prevData) => ({
            ...prevData,
            skills: skills,
          }));
        }}
      >
        <div
          className={`skills-input-super-container ${
            editFlag && skills.length > 0
              ? "form-show"
              : skills.length === 0
              ? "no-display"
              : "form-hide"
          }`}
        >
          {skills.map((skill, index) => (
            <div key={skill.id} className="skills-input-container">
              <div className="skills-input-sub-container">
                <div className="individual-input-container">
                  <label htmlFor={`skill-${index + 1}-input`}>
                    Skill {index + 1}
                  </label>
                  <div className="skill-name-input-container">
                    <input
                      type="text"
                      id={`skill-${index + 1}-input`}
                      value={skill.skillName}
                      className="skills-form-input"
                      maxLength={30}
                      onChange={(e) => updateSkill(skill.id, e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="skills-individual-btns-container">
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => deleteSkills(skill.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`skills-overview-btns-container form-hide ${
            editFlag ? "form-show" : ""
          }`}
        >
          {skills.length < 8 && (
            <button type="button" className="add-skill-btn" onClick={addSkill}>
              Add Skill
            </button>
          )}
          {skills.length > 0 && (
            <button type="submit" className="submit-btn">
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
