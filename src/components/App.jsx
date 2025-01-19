import { useState } from "react";
import "../styles/styles.css";
import "../styles/modern-normalize.css";
import Form from "./Form";
import CV from "./CV";

function App() {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });

  const handleSubmit = (data) => {
    setUserData(data);
  };

  return (
    <div id="content">
      <section className="form-section">
        <Form onFormSubmit={handleSubmit} />
      </section>
      <section className="cv-section">
        <CV data={userData} />
      </section>
    </div>
  );
}

export default App;
