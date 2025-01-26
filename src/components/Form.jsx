import { useState } from "react";
import "../styles/styles.css";
import "../styles/modern-normalize.css";
import expandIcon from "../assets/expand-icon.svg";
import minimizeIcon from "../assets/minimize-icon.svg";

export default function Form({ onFormSubmit, deleteData }) {
  return (
    <>
      <GeneralInfo onFormSubmit={onFormSubmit} />
      <About onFormSubmit={onFormSubmit} />
      <Education onFormSubmit={onFormSubmit} />
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
                  className="education-form-input"
                  max={new Date().toISOString().split("T")[0]}
                  onChange={(e) =>
                    setEducation({ ...education, startDate: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="end-date-container individual-input-container">
              <label htmlFor="end-date">End Date</label>
              <div className="end-date-input-container">
                <input
                  type="date"
                  id="end-date"
                  className="education-form-input"
                  max={new Date().toISOString().split("T")[0]}
                  onChange={(e) =>
                    setEducation({ ...education, endDate: e.target.value })
                  }
                />
                <div className="present-checkbox-container">
                  <input
                    type="checkbox"
                    id="present-education"
                    className="present-checkbox"
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
                          onChange={(e) =>
                            updateExperience(
                              item.id,
                              "position",
                              e.target.value
                            )
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
                      <label htmlFor="company-start-date-input">
                        Start Date
                      </label>
                      <div className="company-start-date-input-container">
                        <input
                          type="date"
                          id="company-start-date-input"
                          max={new Date().toISOString().split("T")[0]}
                          className="experience-form-input"
                          value={item.startDate}
                          onChange={(e) =>
                            updateExperience(
                              item.id,
                              "startDate",
                              e.target.value
                            )
                          }
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
                          className="experience-form-input"
                          value={item.endDate}
                          onChange={(e) =>
                            updateExperience(item.id, "endDate", e.target.value)
                          }
                        />
                        <div className="present-checkbox-container">
                          <input
                            type="checkbox"
                            id="present-experience"
                            checked={item.isPresentWork}
                            className="present-checkbox"
                            onChange={() => {}}
                            onClick={() =>
                              updateExperience(
                                item.id,
                                "isPresentWork",
                                !item.isPresentWork
                              )
                            }
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
            ))
        : overviewEdit
        ? experience.map((item) => (
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
                  EDIT
                </button>
              ) : null}
            </div>
          ))
        : null}
      {individualEdit ? null : overviewEdit ? (
        <div className="add-experience-btn-container">
          <button onClick={addExperienceInput} className="add-experience-btn">
            ADD EXPERIENCE
          </button>
        </div>
      ) : null}
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
      {individualEdit
        ? project
            .filter((proj) => proj.editing === true)
            .map((proj) => (
              <form
                key={proj.id}
                action=""
                className="project-form"
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
                          onChange={(e) =>
                            updateProject(
                              proj.id,
                              "projectName",
                              e.target.value
                            )
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
                      Delete
                    </button>
                    <button type="submit" className="submit-btn">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            ))
        : overviewEdit
        ? project.map((proj) => (
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
                  Edit
                </button>
              ) : null}
            </div>
          ))
        : null}
      {overviewEdit ? (
        <div className="add-project-btn-container">
          <button onClick={addProject} className="add-project-btn">
            Add Project
          </button>
        </div>
      ) : null}
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
          className={`skills-input-super-container no-display ${
            editFlag && skills.length > 0 ? "show-display" : ""
          }`}
        >
          {skills.map((skill, index) => (
            <div key={skill.id} className="skills-input-container">
              <div className="skills-input-sub-container">
                <div className="individual-input-container">
                  <label htmlFor={`skill-${index + 1}-input`}>
                    skill {index + 1}
                  </label>
                  <div className="skill-name-input-container">
                    <input
                      type="text"
                      id={`skill-${index + 1}-input`}
                      value={skill.skillName}
                      className="skills-form-input"
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
