import "../styles/EditorForm.css";

function EditBtn(props) {
  const handleEditBtn = () => {
    props.setIsEdit(true);
  };

  return (
    <div className="edit-button">
      <button className="form--edit" onClick={handleEditBtn}>
        <i className="fa-regular fa-pen-to-square"></i> &nbsp; Edit Card
      </button>
    </div>
  );
}

export default EditBtn;
