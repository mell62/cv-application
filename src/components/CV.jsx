import "../styles/styles.css";
import "../styles/modern-normalize.css";

export default function CV({ data }) {
  return <div className="full-name-cv">{data.fullName}</div>;
}
