import React, { useState } from "react";
import Form from "../../modules/Form/Form";

import styles from "./Edit.module.css";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { toastObj } from "../../../utils/toast";

const Edit = ({ data, id }) => {
  const [form, setForm] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || "",
    address: data.address || "",
    postalCode: data.postalCode || "",
    date: data.date || "",
    products: data.products || "",
  });

  const { push } = useRouter();

  const cancelHander = () => {
    push("/");
  };

  const saveHandler = async () => {
    const res = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.status === "success") {
      toast.success("Edit and save data successfully", toastObj);
      push("/");
    }
  };

  return (
    <div>
      <h4>Edit Customer</h4>
      <Form form={form} setForm={setForm} />
      <div className={styles.btns}>
        <button onClick={cancelHander}>Cancel</button>
        <button onClick={saveHandler}>Save</button>
      </div>
    </div>
  );
};

export default Edit;
