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
              <div key={exp.id} className="company-name-cv">
                {exp.company}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
