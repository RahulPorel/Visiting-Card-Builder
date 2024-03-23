import { useRef, useState } from "react";
import Card from "./components/Card";
import "./styles/EditorForm.css";
import EditBtn from "./components/EditBtn";
import Notice from "./components/Notice";
import "./index.css";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    proffession: "",
    email: "",
    phone_no: "",
    website: "",
  });



  const nameRef = useRef(null),
    proffessionRef = useRef(null),
    emailRef = useRef(null),
    noRef = useRef(null),
    websiteRef = useRef(null);

  const [isEdit, setIsEdit] = useState(false);
  const [clearStaticData, setClearStaticData] = useState(false);
  const [clearGuideData, setclearGuideData] = useState(true);
  const [rmGuideBtn, setRmGuideBtn] = useState(false);

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
    sendEmail();
  };

  const handlePreview = () => {
    setIsEdit(false);
    setRmGuideBtn(true);
    setClearStaticData(true);
    setclearGuideData(true);
    // sendEmail();
  };

  return (
    <>
      {isEdit ? (
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <Notice />
            <input
              type="text"
              placeholder="Your Name"
              onChange={handleChange}
              className="form--input"
              name="name"
              value={form.name}
              ref={nameRef}
            />

            <input
              type="text"
              placeholder="Your Proffession"
              onChange={handleChange}
              className="form--input"
              value={form.proffession}
              ref={proffessionRef}
              name="proffession"
            />

            <input
              type="email"
              placeholder="Email address"
              onChange={handleChange}
              className="form--input"
              value={form.email}
              name="email"
              ref={emailRef}
            />
            <input
              type="text"
              placeholder="Contact Number"
              onChange={handleChange}
              className="form--input"
              value={form.phone_no}
              name="phone_no"
              ref={noRef}
            />
            <input
              type="text"
              placeholder="Bussieness website url"
              onChange={handleChange}
              className="form--input"
              value={form.website}
              name="website"
              ref={websiteRef}
            />

            <div
              className="button preview-btn-container"
              id="button-7"
              onClick={handlePreview}
            >
              <div id="dub-arrow" className="dub-arrow-preview">
                <i className="fa-regular fa-eye"></i>
              </div>

              <button className="preview-btn rm-default-btn-styles">
                Preview
              </button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <Card
            form={form}
            clearStaticData={clearStaticData}
            clearGuideData={clearGuideData}
            isEdit={isEdit}
            rmGuideBtn={rmGuideBtn}
            nameRef={nameRef}
            proffessionRef={proffessionRef}
            emailRef={emailRef}
            noRef={noRef}
            websiteRef={websiteRef}
          />
          <EditBtn setIsEdit={setIsEdit} />
        </>
      )}
    </>
  );
}
