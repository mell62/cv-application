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
  });

  const handleSubmit = (data) => {
    setUserData(data);
  };

  return (
    <>
      <Form onFormSubmit={handleSubmit} />
      <CV data={userData} />
    </>
  );
}

export default App;
