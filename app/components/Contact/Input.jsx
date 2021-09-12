import React from 'react';

const Input = ({ items }) => (
  <>
    {items.map((item, index) => (
      <div className="contact__input" key={index}>
        <input
          className={item.className}
          name={item.name}
          onChange={item.onchange}
          onClick={item.onclick}
          placeholder={item.placeholder}
          type={item.type}
          value={item.value}
        />
        {
          (
            item.validation &&
            (
              item.validation.showError ||
              (!item.validation.isValid && !item.validation.test(item.value))
            )
          ) ? (
            <div className="contact__feedback--error">
              <span>{item.value ? item.validation.message : 'This field is required.'}</span>
            </div>
          ) : null
        }
      </div>
    ))}
  </>
);

export default Input;
