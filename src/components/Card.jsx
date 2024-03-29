import { useState, useEffect, useCallback } from "react";
import staticData from "./staticData";
import guideData from "./guideData";
import ImgUpload from "./ImgUpload";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Confetti from "react-confetti";
import "../index.css";
import "../styles/EditorForm.css";
import RandomColorTemp from "./RandomColorTemp";
import PropTypes from "prop-types";

export default function Card(props) {
  const [loadStaticData, setLoadStaticData] = useState(
    props.clearStaticData ? true : false
  );
  const [loadGuideData, setLoadGuideData] = useState(
    props.clearGuideData ? false : true,
    props.clearStaticData ? true : false
  );
  const [showConfetti, setShowConfetti] = useState(false);
  const [isCopy, setIsCopy] = useState(false);
  const [isCopyEmpty, setIsCopyEmpty] = useState(false);
  const [showCopyMsg, setShowCopyMsg] = useState(false);
  const [showPrintMsg, setShowPrintMsg] = useState(false);

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 480px)").matches
  );

  const sendEmail = () => {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "rahulporel51@gmail.com",
      Password: "F604614B137B7E802C9E721C21A4739F578F",
      To: props.form.email,
      From: "rahulporel51@gmail.com",
      Subject: "Visiting Card Builder - Rahul Porel",
      Body: `Thank you ${props.form.name} for using  visiting card builder  `,
      Attachments: [
        {
          name: `${props.form.name}-visting-card.pdf`,
        },
      ],
    }).then((message) => alert(message));
  };

  // random color gen

  // const [color, setColor] = useState("#000");
  // const getRgb = () => Math.floor(Math.random() * 256);

  // const rgbToHex = (r, g, b) =>
  //   "#" +
  //   [r, g, b]
  //     .map((x) => {
  //       const hex = x.toString(16);
  //       return hex.length === 1 ? "0" + hex : hex;
  //     })
  //     .join("");

  // const handleColorGenerate = () => {
  //   const color = {
  //     r: getRgb(),
  //     g: getRgb(),
  //     b: getRgb(),
  //   };

  //   setColor(rgbToHex(color.r, color.g, color.b));
  // };

  // if ((props.form.name = "")) {
  //   setIsCopyEmpty(false);
  // } else {
  //   setIsCopyEmpty(true);
  // }

  const copyToClip = useCallback(() => {
    props.form.name === "" ? setIsCopyEmpty(false) : setIsCopyEmpty(true);
    props.form.name === "" ? setShowCopyMsg(true) : setShowCopyMsg(false);
    props.nameRef.current?.select(), props.proffessionRef.current?.select();
    props.emailRef.current?.select();
    props.noRef.current?.select();
    props.websiteRef.current?.select();

    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 3000);

    setTimeout(() => {
      setShowCopyMsg(false);
    }, 3000);
    window.navigator.clipboard.writeText(
      ` Name: ${props.form.name} \n Profession: ${props.form.proffession} \n Email-Id: ${props.form.email} \n Phone-No: ${props.form.phone_no} \n Website-Url: ${props.form.website}`
    );
  }, [
    `Name: ${props.form.name}   Proffession: ${props.form.proffession}  Email ID: ${props.form.email} Phone-no: ${props.form.phone_no} Website-URL: ${props.form.website}`,
  ]);

  useEffect(() => {
    window
      .matchMedia("(min-width: 480px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const handleStaticData = () => {
    setLoadStaticData(!loadStaticData);
    setLoadGuideData(false);
    setShowConfetti(false);
  };

  const handleGuideData = () => {
    setLoadStaticData(true);
    setLoadGuideData(!loadGuideData);
    setShowConfetti(false);
  };

  // convert fucking code to pdf
  function genPDF() {
    if (props.form.name === "") {
      setShowPrintMsg(true);
      setTimeout(() => {
        setShowPrintMsg(false);
      }, 4000);
    } else {
      const element = document.querySelector("#pdf");
      html2canvas(element).then((canvas) => {
        const pdf = new jsPDF();
        const imgData = canvas.toDataURL("image/png");
        sendEmail();
        pdf.addImage(imgData, "PNG", 10, 10);
        pdf.save(`${props.form.name}-visting-card.pdf`);

        setShowConfetti(!showConfetti);
        setTimeout(() => {
          setShowConfetti(false);
        }, 5000);
      });
    }
  }

  return (
    <>
      {showConfetti && matches && <Confetti />}
      <div className="center-container cssInp" id="pdf">
        {showConfetti ? (
          <h1
            className="gradient-text"
            style={{
              fontSize: "15px",
              color: "aliceblue",
              textAlign: "center",
            }}
          >
            ` Thank you {props.form.name} for using are service`
          </h1>
        ) : (
          ""
        )}
        {isCopy && isCopyEmpty ? (
          <h1
            className="gradient-text"
            style={{
              fontSize: "15px",
              color: "aliceblue",
              textAlign: "center",
            }}
          >
            {props.form.name} your card text copied to clipboard
          </h1>
        ) : (
          ""
        )}
        {showCopyMsg ? (
          <h1
            className="gradient-text"
            style={{
              fontSize: "15px",
              color: "aliceblue",
              textAlign: "center",
            }}
          >
            first edit then copy
          </h1>
        ) : (
          ""
        )}
        {showPrintMsg ? (
          <h1
            className="gradient-text"
            style={{
              fontSize: "15px",
              color: "aliceblue",
              textAlign: "center",
            }}
          >
            First enter your details to card then print
          </h1>
        ) : (
          ""
        )}

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
              {/* // color  */}
              <div
                className="biz-shape"
                // random color gen
                //  style={{ backgroundColor: color ,  color: color }}
              >
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
      <div className="wrap-btn">
        <div className="upper-container ">
          {/* loadex btn */}
          <div
            className="button hide-btn"
            id="button-2"
            onClick={handleStaticData}
          >
            <div id="slide"></div>
            <button className="instructed-btn rm-default-btn-styles">
              {loadStaticData ? "Load Example" : "Clear Example"}
            </button>
          </div>

          <div className="wrap-down-btn">
            <div className="uper-container hide-btn">
              {/* Instruction btn */}
              {props.rmGuideBtn ? (
                ""
              ) : (
                <div
                  className="button  hide-btn"
                  id="button-2"
                  onClick={handleGuideData}
                >
                  <div id="slide"></div>
                  <button className="instructed-btn rm-default-btn-styles">
                    {!loadGuideData ? "Load Instruction" : "Clear Instruction"}
                  </button>
                </div>
              )}
            </div>
            <div className="upper-container hide-btn">
              {/* copy btn */}
              <div className="button " id="button-7" onClick={copyToClip}>
                <div id="dub-arrow">
                  <i className="fa-regular fa-copy"></i>
                </div>
                <button className="print-btn rm-default-btn-styles mobile-styling-copy-btn ">
                  Copy
                </button>
              </div>
            </div>
            <div className="upper-container">
              {/* printPdf btn */}
              <div
                className="button button-for-mobile"
                id="button-7"
                onClick={genPDF}
              >
                <div id="dub-arrow">
                  <i className="fa-solid fa-print"></i>
                </div>
                <button className="print-btn rm-default-btn-styles mobile-styling-copy-btn">
                  Print
                </button>
              </div>
            </div>
            {/* <div className="upper-container">
        // random color gen
              <div
                className="button button-for-mobile"
                id="button-7"
                onClick={handleColorGenerate}
              >
                <div id="dub-arrow">
                  <i className="fa-solid fa-print"></i>
                </div>
                <button className="print-btn rm-default-btn-styles mobile-styling-copy-btn">
                  Ramdom
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

// TODO:
// 1 add color pallete
// 2. add diffrent styles
