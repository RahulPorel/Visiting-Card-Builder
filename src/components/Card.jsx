import { useState } from "react";
import staticData from "./staticData";
import guideData from "./guideData";
import ImgUpload from "./ImgUpload";
import html2canvas from "html2canvas";
import "../styles/EditorForm.css";
import "../styles/ImgUpload.css";
import "../index.css";
import jsPDF from "jspdf";

// import EditBtn from "./EditBtn";
// import PrintCard from "./PrintCard";

// import GuideImg from "./GuideImg";

export default function Card(props) {
  // const handlePrint = (e) => {
  //   e.preventDefault();
  //   window.print();
  // };

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
    // console.log(setLoadGuideData(!loadGuideData));
    setLoadStaticData(true);
  };

  // const generatePDF = () => {
  //   // const report = new JsPDF("p", "pt", "a4");
  //   // report.html(document.querySelector(".inner-card-container")).then(() => {
  //   //   report.save("visiting-card.pdf");
  //   // });

  //   var pdf = new jsPDF("p", "pt", "letter");
  //   pdf.addHTML(
  //     document.querySelector(".inner-card-container")[0],
  //     function () {
  //       pdf.save("Test.pdf");
  //     }
  //   );
  // };

  // function generatePdf() {
  //   let jsPdf = new jsPDF("p", "pt", "letter");
  //   var htmlElement = document.getElementById("rendering-section");
  //   // you need to load html2canvas (and dompurify if you pass a string to html)
  //   const opt = {
  //     callback: function (jsPdf) {
  //       jsPdf.save("Test.pdf");
  //       // to open the generated PDF in browser window
  //       // window.open(jsPdf.output('bloburl'));
  //     },
  //     margin: [72, 72, 72, 72],
  //     autoPaging: "text",
  //     html2canvas: {
  //       allowTaint: true,
  //       dpi: 300,
  //       letterRendering: true,
  //       logging: false,
  //       scale: 0.8,
  //     },
  //   };
  // }

  const printPDF = () => {
    const domElement = document.getElementById("rendering-section");
    html2canvas(domElement, {
      onclone: (document) => {
        document.getElementById("print").style.visibility = "hidden";
      },
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPdf();
      pdf.addImage(imgData, "JPEG", 10, 10);
      pdf.save(`${new Date().toISOString()}.pdf`);
    });

    return (
      <div className="App">
        <h1>Generate PDF</h1>
        <p>Create a screenshot from the page, and put it in a PDF file.</p>
        <p style={{ color: "red" }}>
          *Open this page in new window and press the button.
        </p>
        <button id="print" onClick={printPDF}>
          PRINT
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="center-container cssInp" id="rendering-section">
        <div className="inner-card-container">
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
        <button className="form--edit" onClick={printPDF}>
          Print
        </button>
      </div>
    </>
  );
}
