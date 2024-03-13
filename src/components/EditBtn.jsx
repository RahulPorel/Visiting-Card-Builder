import "../styles/EditorForm.css";

function EditBtn(props) {
  const handleEditBtn = () => {
    props.setIsEdit(true);
  };

  return (
    <div className="button" id="button-3" onClick={handleEditBtn}>
      <div id="circle"></div>
      <button className="edit-card-btn rm-default-btn-styles">
        <i className="fa-regular fa-pen-to-square"></i>
        Edit Card
      </button>
    </div>
  );
}

export default EditBtn;
