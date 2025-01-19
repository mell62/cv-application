import "../styles/styles.css";
import "../styles/modern-normalize.css";

export default function CV({ data }) {
  return (
    <div className="cv-sheet">
      <GeneralInfo data={data} />
      <About data={data} />
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
    <div className="main-info-cv">
      <div className="about-cv">
        <h1 className="about-header">About</h1>
        {data.about}
      </div>
    </div>
  );
}
