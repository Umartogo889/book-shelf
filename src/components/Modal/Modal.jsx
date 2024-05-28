import "./Modal.css";
import { selectOpt } from "../../context/Context";
const Modal = ({
  addnewBookType,
  setnewbook,
  setbookpage,
  setbookimg,
  changeNewbookType,
  showModal,
}) => {
  function hideModal(e) {
    if (e.target.className === "backdrop-modal") {
      showModal(false);
    }
  }
  return (
    <div className="backdrop-modal" onClick={hideModal}>
      <div className="modal">
        <form action="" onSubmit={addnewBookType}>
          <label>
            <span>kitob nomi</span>
            <input
              type="text"
              required
              onChange={(e) => setnewbook(e.target.value)}
            />
          </label>
          <label>
            <span>kitob beti</span>
            <input
              type="number"
              required
              onChange={(e) => setbookpage(e.target.value)}
            />
          </label>
          <label>
            <span>kitob rasmi</span>
            <input
              type="url"
              required
              onChange={(e) => setbookimg(e.target.value)}
            />
          </label>
          <select onChange={changeNewbookType}>
            {selectOpt.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button>Saqlamoq</button>
        </form>
      </div>
    </div>
  );
};
export default Modal;
