import React, { useState, useEffect } from "react";
import "./gallery.css";
import { galleryItems, categories } from "../../constants/constants";

const Gallery = () => {
  const [initialData, setInitialData] = useState(galleryItems);
  const [data, setData] = useState(initialData);
  const [category, setCategory] = useState("Show All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDataExpanded, setIsDataExpanded] = useState(false);
  const [dataSliceValue, setDataSliceValue] = useState(9);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", deleteImage);
    return () => document.removeEventListener("keydown", deleteImage);
  }, [selectedImage]);

  const deleteImage = (e) => {
    if (e.key === "Delete") {
      const newData = data.filter((item) => item !== selectedImage);
      setInitialData(newData);
      setData(newData);
    }
  };

  const selectImage = (item) => {
    if (item === selectedImage) {
      setSelectedImage(null);
    } else {
      setSelectedImage(item);
    }
  };

  const selectCategory = (category) => {
    if (category === "Show All") {
      setData(initialData);
      setCategory(category);
    } else {
      const newData = initialData.filter((item) => item.category === category);
      setData(newData);
      setCategory(category);
    }
    setIsSelectOpen(false);
    setSelectedImage(null);
  };

  const dataExpandToggle = () => {
    if (!isDataExpanded) {
      setDataSliceValue(data.length);
    } else {
      setDataSliceValue(9);
    }
    setIsDataExpanded((prev) => !prev);
  };

  return (
    <div className="gallery container">
      <div className="gallery-top">
        {categories.map((item, index) => (
          <div
            onClick={() => selectCategory(item.name)}
            className={`gallery-top__item ${
              item.name === category ? "active" : ""
            }`}
            key={index}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="gallery-top--adaptive">
        <div
          onClick={() => setIsSelectOpen((prev) => !prev)}
          className="select-wrapper"
        >
          {category}{" "}
          <span
            className={`${isSelectOpen ? "triangle-up" : "triangle-down"}`}
          ></span>
        </div>
        <div className={`select-list ${isSelectOpen ? "block" : ""}`}>
          {categories.map((item, index) => (
            <div
              onClick={() => selectCategory(item.name)}
              key={index}
              className={`select-list__item ${
                item.name === category ? "disabled" : ""
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className="gallery-items">
        {data.slice(0, dataSliceValue).map((item) => (
          <div
            onClick={() => selectImage(item)}
            key={item.id}
            className={`gallery-items__item ${
              item === selectedImage ? "selected" : ""
            }`}
          >
            <img src={item.url} alt="" />
            <div
              onClick={() => selectCategory(item.category)}
              className="info-category"
            >
              {item.category}
            </div>
            <div className="info-name">{item.name}</div>
            <div className="info"></div>
          </div>
        ))}
      </div>
      <div className="gallery-load__btn">
        {category === "Show All" && (
          <button onClick={dataExpandToggle}>
            {isDataExpanded ? "hide" : "load more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Gallery;
