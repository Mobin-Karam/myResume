import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const success = document.getElementById("success");

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3307/books", book);
      success.style.display = "block";
      window.onload = setInterval(() => (success.style.display = "none"), 5000);
    } catch (err) {
      alert("Book NOT Added WE have Error 🛑!");
      // console.log(err)
    }
  };

  const handleBackClick = async (e) => {
    e.preventDefault();
    try {
      navigate("/");
    } catch (err) {
      navigate("/");
    }
  };

  return (
    <div className="form">
      <div className="show " id="success">
        Book Added Successfully !
      </div>
      <button className="formButton" onClick={handleBackClick}>
        ‌Home
      </button>
      <h1>Add New Book</h1>
      <div className="inputform">
        <input
          type="text"
          placeholder="اسم محصول"
          onChange={handleChange}
          name="title"
        />
        <input
          type="text"
          placeholder="درباره محصول"
          onChange={handleChange}
          name="desc"
        />
        <input
          type="number"
          placeholder="قیمت"
          onChange={handleChange}
          name="price"
        />
        <input
          type="text"
          placeholder="عکس نمونه"
          onChange={handleChange}
          name="cover"
        />
      </div>
      <button className="formButton" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default Add;
