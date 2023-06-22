import React from "react";
import ProductsList from "../ItemList/ProductsList";
import FormInput from "../../elements/FormInput/FormInput";

const Form = ({ form, setForm }) => {
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      {Object.keys(form)
        .slice(0, 7)
        .map((item, index) => (
          <FormInput
            key={index}
            name={item}
            label={item}
            onChange={inputChangeHandler}
            value={Object.values(form)[index]}
            type={item === "date" ? "date" : "text"}
          />
        ))}

      <ProductsList form={form} setForm={setForm} />
    </div>
  );
};

export default Form;
