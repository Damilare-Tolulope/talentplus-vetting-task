import React from "react";

const InputField = ({
  label,
  value,
  handleOnChange,
  name,
  type,
  placeholder,
  className,
}) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        value={value}
        onChange={handleOnChange}
        type={type}
        placeholder={placeholder}
        className={`w-full p-3 outline-none ${className}`}
      />
    </div>
  );
};

export default InputField;
