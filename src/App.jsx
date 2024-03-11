import { useState } from "react";
import Card from "./components/Card";
import "./styles/EditorForm.css";

export default function App() {
  const [form, setForm] = useState({
    img: "",
    name: "",
    proffession: "",
    email: "",
    phone_no: "",
    website: "",
  });

  const [isEdit, setIsEdit] = useState(false);
  const [clearStaticData, setClearStaticData] = useState(false);

  const handleChange = (e) => {
    setForm((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePreview = () => {
    setIsEdit(false);
    setClearStaticData(true);
  };

  return (
    <>
      {isEdit ? (
        <div onSubmit={handleSubmit} className="form-container">
          <button onClick={handlePreview}>Preview</button>
          <form className="form">
            <input
              type="text"
              placeholder="Your Name"
              onChange={handleChange}
              className="form--input"
              name="name"
              value={form.name}
            />

            <input
              type="text"
              placeholder="Your Proffession"
              onChange={handleChange}
              className="form--input"
              value={form.proffession}
              name="proffession"
            />

            <input
              type="email"
              placeholder="Email address"
              onChange={handleChange}
              className="form--input"
              value={form.email}
              name="email"
            />
            <input
              type="text"
              placeholder="Contact Number"
              onChange={handleChange}
              className="form--input"
              value={form.phone_no}
              name="phone_no"
            />
            <input
              type="text"
              placeholder="Bussieness website url"
              onChange={handleChange}
              className="form--input"
              value={form.website}
              name="website"
            />

            {/* <div className="form--marketing">
          <input id="okayToEmail" type="checkbox" name="joinedNewsLetter" />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div> */}
            <button className="form--submit">Save</button>
          </form>
        </div>
      ) : (
        <>
          <button onClick={() => setIsEdit(true)}>Edit</button>
          <Card form={form} clearStaticData={clearStaticData} />
        </>
      )}
    </>
  );
}
