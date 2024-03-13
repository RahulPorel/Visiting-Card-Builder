import { useState } from "react";
import "../styles/ImgUpload.css";

const ImgUpload = (props) => {
  const [imgFile, setImgFile] = useState();
  const [isStaticImg, setIsStaticImg] = useState(false);

  const getImg = (e) => {
    setImgFile(URL.createObjectURL(e.target.files[0]));
  };
  const handleFileChanges = () => {
    setIsStaticImg(!isStaticImg);
  };

  return (
    <>
      {!props.clearImg ? (
        <div className="picture">
          <input onClick={handleFileChanges} type="file" onChange={getImg} />

          {isStaticImg ? (
            <img className="picture-src" src={imgFile} alt="your-image" />
          ) : (
            <p className="inst-logo">
              <b> Your Logo </b> <br /> or <br /> <b> Profile Photo </b>
            </p>
          )}
        </div>
      ) : (
        <img
          className="picture-src"
          src="./assests/static_assests/logo_sample.png"
        />
      )}
    </>
  );
};
export default ImgUpload;