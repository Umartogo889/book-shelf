// hooks
import { useState } from "react";
// componets
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const [typebook, setTypebook] = useState("hammasi");
  const [books, setbooks] = useState([
    {
      id: 1,
      name: "sariq devni minib",
      page: 100,
      img: "https://kitobxon.com/img_knigi/1546.jpg",
      type: "ertak",
    },
    {
      id: 2,
      name: "Do'st Orttirish ",
      page: 202,
      img: "https://assets.asaxiy.uz/product/items/desktop/5e15c21fa5c49.jpg.webp",
      type: "lirik",
    },
    {
      id: 3,
      name: "Adabiyot ",
      page: 220,
      img: "https://lh6.googleusercontent.com/proxy/1UiQCoMhB-HJwhEeV4PXMlJ9RA5IyZ37wI7xbUpq6BsCpj0N5pNuyOCz-MBcBUvSkWivJaY6erYM0a-NY2gAZ9m7Dba6yyQ3eyK7K6GnZIjO05Mi9Q",
      type: "badiiy",
    },
    {
      id: 5,
      name: "boy ota Kambag'al ota ",
      page: 232,
      img: "https://images.uzum.uz/cjrlt7cvutvfmkmj5cb0/original.jpg",
      type: "badiiy",
    },
    {
      id: 6,
      name: "savdo san'ati ",
      page: 170,
      img: "https://assets.asaxiy.uz/product/main_image/desktop//662c8eb85fc3b.jpg.webp",
      type: "badiiy",
    },
    {
      id: 4,
      name: "Bir Kun",
      page: 290,
      img: "https://assets.asaxiy.uz/product/items/desktop/eb160de1de89d9058fcb0b968dbbbd682023080717492755274ba9uEHlgmW.jpg.webp",
      type: "lirik",
    },
    {
      id: 7,
      name: "bank",
      page: 120,
      img: "https://assets.asaxiy.uz/product/items/desktop/4d0440738a66148ce2d179ecf87a30ea2023102415354995795jxv3MpsPrU.jpg.webp",
      type: "adabiy",
    },
  ]);

  return (
    <>
      <Navbar books={books} setbooks={setbooks} setTypebook={setTypebook} />
      <Hero books={books} setbooks={setbooks} typebook={typebook} />
    </>
  );
};

export default Home;
