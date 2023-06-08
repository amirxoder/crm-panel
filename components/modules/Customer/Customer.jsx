import React from "react";
import styles from "./Customer.module.css";
import { FiTrash2, FiEdit } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

const Customer = ({ name, lastName, email, _id }) => {
  const { push, reload } = useRouter();

  const deleteHandler = async () => {
    const res = await fetch(`/api/delete/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.status === "success") {
      reload();
    }
  };

  return (
    <div className={styles.customer}>
      <div className={styles.left}>
        <p>
          {name}&nbsp;{lastName}
        </p>
        <p>{email}</p>
      </div>

      <div className={styles.right}>
        <FiTrash2 onClick={deleteHandler} />
        <FiEdit onClick={() => push(`/edit/${_id}`)} />
        <Link href={`/customer/${_id}`}>Details</Link>
      </div>
    </div>
  );
};

export default Customer;
