import React, { useState } from "react";
import "./App.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordian = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    //if alredy open then make null (close) or open that perticular accordin aaccording to the index
    setOpenIndex(openIndex === index ? null : index);
  };

  return !items || items.length === 0 ? (
    "No Items Found"
  ) : (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <button
            className="accordion-title"
            onClick={() => handleClick(index)}
          >
            {item.title}{" "}
            {openIndex === index ? (
              <FaChevronDown className="right" />
            ) : (
              <FaChevronUp className="right" />
            )}
          </button>
          {openIndex === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
