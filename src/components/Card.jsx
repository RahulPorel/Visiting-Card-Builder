import { useState } from "react";
import staticData from "./staticData";
import guideData from "./guideData";

export default function Card(props) {
  const [loadStaticData, setLoadStaticData] = useState(
    props.clearStaticData ? true : false
  );
  const [loadGuideData, setLoadGuideData] = useState(
    props.clearStaticData ? true : false
  );

  const handleStaticData = () => {
    setLoadStaticData(!loadStaticData);
  };

  const handleGuideData = () => {
    setLoadStaticData(loadStaticData === false);
    setLoadGuideData(!loadGuideData);
  };

  // useEffect(() => {});

  return (
    <div className="center-container">
      <div className="inner-card-container">
        <div className="bizzy-card-container">
          <div className="biz-card-a">
            <div className="biz-headshot biz-pic-drew">
              <div className="biz-words-container">

                // idhar baki hain
                {loadStaticData ? (
                  <div className="biz-name">{props.form.name}</div>
                ) : (
                  <div className="biz-name">{guideData.guidedData.name}</div>
                )}

                {loadStaticData ? (
                  <div className="biz-title">{props.form.proffession}</div>
                ) : (
                  <div className="biz-title">
                    {staticData.perosnalInfo.proffession}
                  </div>
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
                </div>

                <div className="biz-cell">
                  {loadStaticData ? (
                    <a href={props.form.phone_no}>{props.form.phone_no}</a>
                  ) : (
                    <a href={staticData.perosnalInfo.phone_no}>
                      {staticData.perosnalInfo.phone_no}
                    </a>
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
                </div>
              </div>
            </div>
          </div>

          <button onClick={handleStaticData}>Load Example</button>
          <button onClick={handleGuideData}>Guide Example</button>
        </div>
      </div>
    </div>
  );
}
