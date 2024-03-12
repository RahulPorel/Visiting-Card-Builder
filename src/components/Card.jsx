import { useState } from "react";
import staticData from "./staticData";
import guideData from "./guideData";
import ImgUpload from "./ImgUpload";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// import EditBtn from "./EditBtn";
// import PrintCard from "./PrintCard";

// import GuideImg from "./GuideImg";

export default function Card(props) {
  const [loadStaticData, setLoadStaticData] = useState(
    props.clearStaticData ? true : false
  );
  const [loadGuideData, setLoadGuideData] = useState(
    props.clearGuideData ? false : true
    // props.clearStaticData ? true : false
  );

  const handleStaticData = () => {
    setLoadStaticData(!loadStaticData);
    setLoadGuideData(false);
  };

  const handleGuideData = () => {
    setLoadGuideData(!loadGuideData);

    setLoadStaticData(true);
  };

  function genPDF() {
    const element = document.querySelector("#pdf");
    html2canvas(element).then((canvas) => {
      const pdf = new jsPDF();

      const imgData = canvas.toDataURL("image/png");

      pdf.addImage(imgData, "PNG", 0, 0);

      pdf.save("download.pdf");
    });
  }

  return (
    <>
      <div className="center-container cssInp">
        <div className="inner-card-container" id="pdf">
          <div className="bizzy-card-container">
            <div className="biz-card-a">
              <div className="biz-headshot biz-pic-drew">
                <ImgUpload clearImg={props.clearImg} />
                <div className="biz-words-container">
                  {loadStaticData ? (
                    <div className="biz-name">{props.form.name}</div>
                  ) : (
                    <div className="biz-name">
                      {staticData.perosnalInfo.name}
                    </div>
                  )}

                  {loadGuideData ? (
                    <div className="biz-name">{guideData.guidedData.name}</div>
                  ) : (
                    ""
                  )}

                  {loadStaticData ? (
                    <div className="biz-title">{props.form.proffession}</div>
                  ) : (
                    <div className="biz-title">
                      {staticData.perosnalInfo.proffession}
                    </div>
                  )}
                  {loadGuideData ? (
                    <div className="biz-title">
                      {guideData.guidedData.proffession}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            <div className="biz-card-b">
              <div className="biz-shape">
                <div className="biz-contact-box">
                  <div className="biz-email">
                    <i className="fa-solid fa-envelope"></i>
                    {loadStaticData ? (
                      <a href={props.form.email}>{props.form.email}</a>
                    ) : (
                      <a href={staticData.perosnalInfo.email}>
                        {staticData.perosnalInfo.email}
                      </a>
                    )}
                    {loadGuideData ? (
                      <a href={staticData.perosnalInfo.email}>
                        {guideData.guidedData.email}
                      </a>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="biz-cell">
                    <i className="fa-solid fa-phone"></i>
                    {loadStaticData ? (
                      <a href={props.form.phone_no}>{props.form.phone_no}</a>
                    ) : (
                      <a href={staticData.perosnalInfo.phone_no}>
                        {staticData.perosnalInfo.phone_no}
                      </a>
                    )}
                    {loadGuideData ? (
                      <a href={guideData.guidedData.phone_no}>
                        {guideData.guidedData.phone_no}
                      </a>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="biz-portfolio">
                    <i className="fa-brands fa-chrome"></i>
                    {loadStaticData ? (
                      <a target="_blank" href={props.form.website}>
                        {props.form.website}
                      </a>
                    ) : (
                      <a target="_blank" href={staticData.perosnalInfo.website}>
                        {staticData.perosnalInfo.website}
                      </a>
                    )}
                    {loadGuideData ? (
                      <a target="_blank" href={guideData.guidedData.website}>
                        {guideData.guidedData.website}
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="edit-button-ws">
        <button className="form--edit" onClick={handleStaticData}>
          Load Example
        </button>

        <button className="form--edit" onClick={handleGuideData}>
          Guide Example
        </button>
        <button className="form--edit" onClick={genPDF}>
          Print
        </button>
      </div>
    </>
  );
}
