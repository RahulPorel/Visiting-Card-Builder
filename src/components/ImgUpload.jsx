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

  console.log(isStaticImg);

  return (
    <>
      {!props.clearImg ? (
        <div className="picture">
          <input onClick={handleFileChanges} type="file" onChange={getImg} />
          <img className="picture-src" src={imgFile} />
          <p className="inst-logo">
            Your Logo <br /> or <br /> Profile Photo
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default ImgUpload;
