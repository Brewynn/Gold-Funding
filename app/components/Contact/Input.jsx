import React from 'react';

const Input = ({ items }) => (
  <>
    {items.map(({
      validation = { test: () => {} }, className,
      onclick, onchange, placeholder, value, name, type
    }, index) => (
      <div className="contact__input" key={index}>
        <input
          className={className}
          name={name}
          onChange={onchange}
          onClick={onclick}
          placeholder={placeholder}
          type={type}
          value={value}
        />
        {
          (validation.showError || (!validation.isValid && !validation.test(value))) ? (
            <div className="contact__feedback--error">
              <span>
                {
                  value
                    ? validation.message
                    : 'This field is required.'
                }
              </span>
            </div>
          ) : null
        }
      </div>
    ))}
  </>
);

export default Input;
