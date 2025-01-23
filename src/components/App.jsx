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
    about: "",
    education: {},
    experience: [],
  });

  const handleSubmit = (data) => {
    setUserData(data);
  };

  const deleteExperience = (attribute, id) => {
    setUserData((prevData) => ({
      ...prevData,
      [attribute]: prevData[attribute]
        .filter((exp) => exp.id !== id)
        .map((exp, index) => ({
          ...exp,
          id: index + 1,
        })),
    }));
  };

  return (
    <div id="content">
      <section className="form-section">
        <Form onFormSubmit={handleSubmit} deleteExp={deleteExperience} />
      </section>
      <section className="cv-section">
        <CV data={userData} />
      </section>
    </div>
  );
}

export default App;
