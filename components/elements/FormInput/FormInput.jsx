import React from "react";

import styles from "./FormInput.module.css";

const FormInput = ({ name, label, type, value, onChange }) => {
  return (
    <div className={styles.form}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
};

export default FormInput;
