import "../styles/styles.css";
import "../styles/modern-normalize.css";
import emailIcon from "../assets/email-icon.svg";
import phoneIcon from "../assets/phone-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import githubIcon from "../assets/github-icon.svg";

export default function CV({ data }) {
  return (
    <div className="cv-sheet">
      <GeneralInfo data={data} />
      <div className="main-info-cv">
        <About data={data} />
        <Education data={data} />
        <Experience data={data} />
        <Project data={data} />
        <Skills data={data} />
      </div>
    </div>
  );
}

function GeneralInfo({ data }) {
  return (
    <div className="general-info-cv">
      <h1 className="full-name-cv">{data.fullName}</h1>
      <div className="general-sub">
        <div className="general-sub-1">
          <div className="email-cv-container">
            {data.email ? (
              <img
                src={emailIcon}
                alt="Email Icon"
                className="general-cv-icon"
              />
            ) : null}
            <div className="email-cv">{data.email}</div>
          </div>
          <div className="phone-cv-container">
            {data.phone ? (
              <img
                src={phoneIcon}
                alt="Phone Icon"
                className="general-cv-icon"
              />
            ) : null}
            <div className="phone-cv">{data.phone}</div>
          </div>
        </div>
        <div className="general-sub-2">
          <div className="linkedin-cv-container">
            {data.linkedin ? (
              <img
                src={linkedinIcon}
                alt="Linkedin Icon"
                className="general-cv-icon"
              />
            ) : null}
            <div className="linkedin-cv">{data.linkedin}</div>
          </div>
          <div className="github-cv-container">
            {data.github ? (
              <img
                src={githubIcon}
                alt="Github Icon"
                className="general-cv-icon"
              />
            ) : null}
            <div className="github-cv">{data.github}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function About({ data }) {
  return (
    data.about && (
      <div className="about-cv">
        <h1 className="about-header">About</h1>
        <div className="about-info-cv">{data.about}</div>
      </div>
    )
  );
}

function Education({ data }) {
  return (
    Object.entries(data.education).find(
      (arr) => arr[0] === "school" && arr[1] !== ""
    ) && (
      <div className="education-cv">
        <h1 className="education-header">Education</h1>
        <div className="education-info-cv">
          <div className="education-main-info-cv">
            <div className="school-name-cv">{data.education.school}</div>
            <div className="degree-cv">{data.education.degree}</div>
          </div>
          <div className="education-timeline-info-cv">
            <div className="start-date-cv">{data.education.startDate}</div>
            {data.education.startDate &&
              (data.education.endDate || data.education.isPresentEducation) && (
                <span> - </span>
              )}
            <div className="end-date-cv">
              {data.education.isPresentEducation
                ? "Present"
                : data.education.endDate}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

function Experience({ data }) {
  return (
    data.experience.length > 0 && (
      <div className="experience-cv">
        <h1 className="experience-header">Experience</h1>
        <div className="experience-info-cv">
          {data.experience.length > 0
            ? data.experience.map((exp) => (
                <div key={exp.id} className="experience-container-cv">
                  <div className="experience-main-info-cv">
                    <div className="experience-main-info-cv-row">
                      <div className="company-name-cv">{exp.company}</div>
                      <div className="experience-timeline-info-cv">
                        <div className="start-date-cv">{exp.startDate}</div>
                        {exp.startDate &&
                          (exp.endDate || exp.isPresentWork) && (
                            <span> - </span>
                          )}
                        <div className="end-date-cv">
                          {exp.isPresentWork ? "Present" : exp.endDate}
                        </div>
                      </div>
                    </div>
                    <div className="company-position-cv">{exp.position}</div>
                    <div className="responsibilities-container">
                      {exp.responsibilities.split(".").map(
                        (resp) =>
                          resp ? (
                            <div key={exp.id} className="responsibilities-cv">
                              <span className="bullet-point">&#8226;</span>{" "}
                              {resp}
                            </div>
                          ) : null
                        //this is to split each responsibility that ends with fullstop into bullet points
                      )}
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    )
  );
}

function Project({ data }) {
  return (
    data.project.length > 0 && (
      <div className="project-cv">
        <h1 className="project-header">Projects</h1>
        <div className="project-info-cv">
          {data.project.length > 0
            ? data.project.map((proj) => (
                <div key={proj.id} className="project-main-info-cv">
                  <div className="project-name-cv">
                    <span className="bullet-point">&#8226;</span>{" "}
                    {proj.projectName}
                  </div>
                  <div className="project-summary-cv">
                    {proj.projectSummary}
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    )
  );
}

function Skills({ data }) {
  return (
    data.skills.filter((skill) => skill.skillName).length > 0 && (
      <div className="skills-cv">
        <h1 className="skills-header">Skills</h1>
        <div className="skills-info-cv">
          {data.skills.length > 0
            ? data.skills.map(
                (skill) =>
                  skill.skillName && (
                    <div key={skill.id} className="skills-container-cv">
                      <span className="bullet-point">&#8226;</span>{" "}
                      {skill.skillName}
                    </div>
                  )
              )
            : null}
        </div>
      </div>
    )
  );
}
