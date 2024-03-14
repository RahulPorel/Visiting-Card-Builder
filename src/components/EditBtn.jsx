import "../styles/EditorForm.css";

function EditBtn(props) {
  const handleEditBtn = () => {
    props.setIsEdit(true);
  };

  return (
    <div
      className="button button-for-mobile"
      id="button-3"
      onClick={handleEditBtn}
    >
      <div id="circle"></div>
      <button className="edit-card-btn rm-default-btn-styles mobile-styling-copy-btn">
        <i className="fa-regular fa-pen-to-square"></i>
        &nbsp; Edit Card
      </button>
    </div>
  );
}

export default EditBtn;
