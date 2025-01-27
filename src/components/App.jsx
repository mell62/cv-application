import { useState } from "react";
import "../styles/styles.css";
import "../styles/modern-normalize.css";
import Form from "./Form";
import CV from "./CV";
import html2pdf from "html2pdf.js";

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
    project: [],
    skills: [],
  });

  const handleSubmit = (data) => {
    setUserData(data);
  };

  const deleteData = (attribute, id) => {
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
        <Form onFormSubmit={handleSubmit} deleteData={deleteData} />
      </section>
      <section className="cv-section">
        <CV data={userData} />
      </section>
    </div>
  );
}

const downloadBtn = document.querySelector(".download-cv-btn");

const options = {
  filename: "cv.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: {
    unit: "mm",
    format: "a4",
    orientation: "portrait",
  },
};

downloadBtn.addEventListener("click", () => {
  const cvSheet = document.querySelector(".cv-sheet"); //query selector is here so that js gets enough time to select the element once react renders it
  cvSheet.classList.add("no-transform");
  html2pdf()
    .set(options)
    .from(cvSheet)
    .save()
    .then(() => {
      cvSheet.classList.remove("no-transform");
    });
});

export default App;
