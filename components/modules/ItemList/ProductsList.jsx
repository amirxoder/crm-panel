import React from "react";

import styles from "./ItemList.module.css";
import FormInput from "../../elements/FormInput/FormInput";

import { FiTrash2 } from "react-icons/fi";

const ProductsList = ({ form, setForm }) => {
  const { products } = form;

  const addProductHandler = () => {
    setForm({
      ...form,
      products: [
        ...products,
        {
          name: "",
          price: "",
          qty: "",
        },
      ],
    });
  };

  const formChangeHandler = (e, index) => {
    const { value, name } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({
      ...form,
      products: newProducts,
    });
  };
  const revomeItemhander = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({
      ...form,
      products: newProducts,
    });
  };

  return (
    <div className={styles.products}>
      <h4>Purchase Products</h4>
      {products.map((item, index) => (
        <div key={index} className={styles.product}>
          <FormInput
            name="name"
            label={"name"}
            type={"text"}
            value={item.name}
            onChange={(e) => formChangeHandler(e, index)}
          />
          <div className={styles.pq}>
            <FormInput
              name="price"
              label={"Price"}
              type={"text"}
              onChange={(e) => formChangeHandler(e, index)}
              value={item.price}
            />
            <FormInput
              name="qty"
              label={"Qunatity"}
              type={"number"}
              onChange={(e) => formChangeHandler(e, index)}
              value={item.qty}
            />
          </div>
          <button
            onClick={() => revomeItemhander(index)}
            className={styles.removeBtn}
          >
            <FiTrash2 />
          </button>
        </div>
      ))}
      <button className={styles.addItem} onClick={addProductHandler}>
        Add Item
      </button>
    </div>
  );
};

export default ProductsList;
