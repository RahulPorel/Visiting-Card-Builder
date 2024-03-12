import { useState } from "react";
import Card from "./components/Card";
import "./styles/EditorForm.css";
import EditBtn from "./components/EditBtn";
import Notice from "./components/Notice";
import "./index.css";

// import ImgUpload from "./components/ImgUpload";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    proffession: "",
    email: "",
    phone_no: "",
    website: "",
  });

  const [isEdit, setIsEdit] = useState(false);
  const [clearStaticData, setClearStaticData] = useState(false);
  const [clearGuideData, setclearGuideData] = useState(true);
  const [clearImg, setClearImg] = useState(false);

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
    setclearGuideData(true);
    // setClearImg(true);
  };

  // const [imgFile, setImageFile] = useState();
  // const [isStaticImg, setIsStaticImg] = useState(false);
  // console.log(imgFile);
  // const getImg = (e) => {
  //   setImageFile(URL.createObjectURL(e.target.files[0]));
  // };
  // const handleFileChanges = () => {
  //   setIsStaticImg(!isStaticImg);
  // };

  return (
    <>
      {isEdit ? (
        <div onSubmit={handleSubmit} className="form-container">
          <form className="form">
            {/* <input onClick={handleFileChanges} type="file" onChange={getImg} /> */}
            <Notice />
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
            <button className="form--submit" onClick={handlePreview}>
              Preview
            </button>
          </form>
        </div>
      ) : (
        <>
          <Card
            form={form}
            clearStaticData={clearStaticData}
            clearGuideData={clearGuideData}
            clearImg={clearImg}
          />
          <EditBtn setIsEdit={setIsEdit} />
          {/* <button className="form--edit" onClick={() => setIsEdit(true)}>
            <i className="fa-regular fa-pen-to-square"></i> &nbsp; Edit
          </button> */}
        </>
      )}
    </>
  );
}
