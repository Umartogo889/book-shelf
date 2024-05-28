// style
import "./Hero.css";
// hooks
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// icons
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "../Modal/Modal";
import ModalEdit from "../Modal/ModalEdit";

const Hero = ({ books, typebook }) => {
  const [LocalStr, setLocalStr] = useState(
    JSON.parse(localStorage.getItem("mybook")) || books
  );
  const [showModal, setshowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newbook, setnewbook] = useState("");
  const [bookpage, setbookpage] = useState("");
  const [newbooktype, setbooktype] = useState("lirik");
  const [bookimg, setbookimg] = useState("");
  const [newName, SetnewName] = useState("");
  const [Editpage, setEditpage] = useState("");
  const [Editimg, setEditimg] = useState("");

  localStorage.setItem("mybook", JSON.stringify(LocalStr));
  function editBook(id) {
    SetnewName("");
    setEditpage("");
    setEditimg("");
    const newState = LocalStr.map((obj) => {
      if (obj.id === id) {
        return { ...obj, name: newName };
      }
      return obj;
    });

    setLocalStr(newState);
  }

  // remove book
  const removeBook = (id) => {
    const Removebook = LocalStr.filter((item) => {
      return item.id !== id;
    });
    setLocalStr(Removebook);
  };

  const addnewBookType = (e) => {
    e.preventDefault();
    setshowModal(showModal ? false : true);
    setnewbook("");
    setbookpage("");

    let newBook = {
      id: uuidv4(),
      name: newbook,
      page: bookpage,
      type: newbooktype,
      img: bookimg,
    };

    if (newBook.name.length > 1) {
      let getBook = JSON.parse(localStorage.getItem("mybook"));
      setLocalStr((item) => {
        return [...getBook, newBook];
      });
    }
  };

  const changeNewbookType = (e) => {
    setbooktype(e.target.value);
  };

  return (
    <div className="Hero-container">
      <button style={{ marginTop: "20px" }} onClick={addnewBookType}>
        Kitob Qo'shish
      </button>

      <div className="Hero">
        {JSON.parse(localStorage.getItem("mybook")).map((item) => {
          return (
            <div
              className={
                item.type === typebook || typebook === "hammasi"
                  ? "book-card "
                  : "none"
              }
              key={item.id}
            >
              <img className="book-img" src={item.img} alt="" />
              <div className="info-card">
                <p className="name">{item.name}</p>
                <p>{item.page} bet</p>
                <div className="icons">
                  <div onClick={() => editBook(item.id)} className="icon">
                    <EditIcon onClick={() => setShowEditModal(true)} />
                  </div>
                  <div onClick={() => removeBook(item.id)} className="icon">
                    <DeleteIcon />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {showModal && (
          <Modal
            addnewBookType={addnewBookType}
            setnewbook={setnewbook}
            setbookpage={setbookpage}
            setbookimg={setbookimg}
            changeNewbookType={changeNewbookType}
            showModal={setshowModal}
          />
        )}
        {showEditModal && (
          <ModalEdit
            SetnewName={SetnewName}
            setEditpage={setEditpage}
            setEditimg={setEditimg}
            editBook={editBook}
            setShowEditModal={setShowEditModal}
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
