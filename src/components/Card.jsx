import { forwardRef, useState } from "react";
import staticData from "./staticData";
import guideData from "./guideData";
import ImgUpload from "./ImgUpload";
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

  function printThisFuckingCard() {
    window.frames["print_frame"].document.body.innerHTML =
      document.getElementById("fuckingCard").innerHTML;
    window.frames["print_frame"].window.focus();
    window.frames["print_frame"].window.print();
  }
  return (
    <>
      {/* <ReactToPrint
        trigger={() => {
          return <button>print</button>;
        }}
        content={() => this.componentRef}
        documentTitle="New document"
        pageStyle="print"
      /> */}
      <iframe
        name="print_frame"
        width="0"
        height="0"
        frameBorder="0"
        src="about:blank"
      ></iframe>
      <div className="center-container" id="fuckingCard">
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
        <div className="edit-button-ws">
          <button className="form--edit" onClick={handleStaticData}>
            Load Example
          </button>

          <button className="form--edit" onClick={handleGuideData}>
            Guide Example
          </button>
          <button className="form--edit" onClick={printThisFuckingCard}>
            Print
          </button>
        </div>
      </div>{" "}
    </>
  );
}
