import "../styles/styles.css";
import "../styles/modern-normalize.css";

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
          <div className="email-cv">{data.email}</div>
          <div className="phone-cv">{data.phone}</div>
        </div>
        <div className="general-sub-2">
          <div className="linkedin-cv">{data.linkedin}</div>
          <div className="github-cv">{data.github}</div>
        </div>
      </div>
    </div>
  );
}

function About({ data }) {
  return (
    <div className="about-cv">
      <h1 className="about-header">About</h1>
      {data.about}
    </div>
  );
}

function Education({ data }) {
  return (
    <div className="education-cv">
      <h1 className="education-header">Education</h1>
      <div className="education-info-cv">
        <div className="education-main-info-cv">
          <div className="school-name-cv">{data.education.school}</div>
          <div className="degree-cv">{data.education.degree}</div>
        </div>
        <div className="education-timeline-info-cv">
          <div className="start-date-cv">{data.education.startDate}</div>
          <div className="end-date-cv">
            {data.education.isPresentEducation
              ? "Present"
              : data.education.endDate}
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience({ data }) {
  return (
    <div className="experience-cv">
      <h1 className="experience-header">Experience</h1>
      <div className="experience-info-cv">
        {data.experience.length > 0
          ? data.experience.map((exp) => (
              <div key={exp.id} className="experience-container-cv">
                <div className="experience-main-info-cv">
                  <div className="company-name-cv">{exp.company}</div>
                  <div className="company-position-cv">{exp.position}</div>
                  <div className="responsibilities-cv">
                    {exp.responsibilities}
                  </div>
                </div>
                <div className="experience-timeline-info-cv">
                  <div className="start-date-cv">{exp.startDate}</div>
                  <div className="end-date-cv">{exp.endDate}</div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

function Project({ data }) {
  return (
    <div className="project-cv">
      <h1 className="project-header">Project</h1>
      <div className="project-info-cv">
        {data.project.length > 0
          ? data.project.map((proj) => (
              <div key={proj.id} className="project-container-cv">
                <div className="project-main-info-cv">
                  <div className="project-name-cv">{proj.projectName}</div>
                  <div className="project-summary-cv">
                    {proj.projectSummary}
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

function Skills({ data }) {
  return (
    <div className="skills-cv">
      <h1 className="skills-header">Skills</h1>
      <div className="skills-info-cv">
        {data.skills.length
          ? data.skills.map((skill) => (
              <div key={skill.id} className="skills-container-cv">
                {skill.skillName}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
