import "../styles/EditorForm.css";

function EditBtn(props) {
  const handleEditBtn = () => {
    console.log("sdasds");
    props.setIsEdit(true);
  };

  return (
    <div className="edit-button">
      <button className="form--edit" onClick={handleEditBtn}>
        <i className="fa-regular fa-pen-to-square"></i> &nbsp; Edit
      </button>{" "}
    </div>
  );
}

export default EditBtn;
