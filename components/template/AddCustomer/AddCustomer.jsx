import React, { useState } from "react";
import styles from "./AddCustomer.module.css";
import Form from "../../modules/Form/Form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { toastObj } from "../../../utils/toast";

const AddCustomer = () => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  });

  const { push } = useRouter();

  const cancelHandler = () => {
    setForm({
      name: "",
      lastName: "",
      email: "",
      address: "",
      postalCode: "",
      date: "",
      products: [],
    });
    push("/");
  };

  const saveHandler = async () => {
    const res = await fetch("/api/customer", {
      method: "POST",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.status === "failed") {
      toast.error("Feaild!", toastObj);
      console.log(data);
    } else {
      toast.success("Success!", toastObj);
      push("/");
      console.log(data);
    }
  };

  return (
    <div className={styles.addCustomer}>
      <h4>Add New Customer</h4>
      <Form form={form} setForm={setForm} />
      <div className={styles.btns}>
        <button className={styles.btn} onClick={cancelHandler}>
          Cancel
        </button>
        <button className={styles.btn} onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddCustomer;
