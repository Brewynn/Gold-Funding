import React from 'react';

const Title = ({ title, subTitle }) => {
  const [titleTop, titleBottom] = title.split(' ');

  return (
    <div className="contact__title">
      <span className="contact__titleTop">{titleTop}</span>
      <span className="contact__titleBottom contact__title--underline">{titleBottom}</span>
      <span className="contact__subtitle">{subTitle}</span>
    </div>
  ); 
}

export default Title;
