import "../styles/styles.css";
import "../styles/modern-normalize.css";

export default function CV({ data }) {
  return (
    <>
      <h1 className="full-name-cv">{data.fullName}</h1>
      <div className="email-cv">{data.email}</div>
      <div className="phone-cv">{data.phone}</div>
      <div className="linkedin-cv">{data.linkedin}</div>
    </>
  );
}
