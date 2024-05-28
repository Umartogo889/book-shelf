import "./Modal.css";

const ModalEdit = ({
  setShowEditModal,
  SetnewName,
  setEditpage,
  setEditimg,
  editBook,
}) => {
  function hideModal(e) {
    e.preventDefault();
    if (e.target.className === "backdrop-modal") {
      setShowEditModal(false);
    }
  }

  return (
    <div className="backdrop-modal" onClick={hideModal}>
      <form className="modal " onSubmit={editBook}>
        <label>
          <span>Kitob nomi</span>
          <input  onChange={(e) => SetnewName(e.target.value)} type="text" />
        </label>
        <label>
          <span>kitob beti </span>
          <input onChange={(e) => setEditpage(e.target.value)} type="number" />
        </label>
        <label>
          <span>kitob rasmi </span>
          <input onChange={(e) => setEditimg(e.target.value)} type="url" />
        </label>
        <button onClick={editBook}>O'zgartirmoq</button>
      </form>
    </div>
  );
};

export default ModalEdit;
