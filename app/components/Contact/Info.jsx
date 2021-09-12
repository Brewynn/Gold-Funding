import React from "react";

const Info = ({ items }) =>
  <>
    {items.map((item, index) => (
      <div
        className="contact__info-container-text"
        key={index}
      >
        <span className="contact__info-text">{item.title}</span>
        <span className="contact__info-text">{item.subTitle}</span>
      </div>
    ))}
  </>

export default Info;
