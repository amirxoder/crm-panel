import React from "react";
import Customer from "../../modules/Customer/Customer";
import styles from "./Home.module.css";

const Home = ({ customers }) => {
  if (!customers.length) return <h1 className={styles.home}>
    Not Customer
  </h1>;

  return (
    <div>
      {customers &&
        customers.map((item) => <Customer {...item} key={item._id} />)}
    </div>
  );
};

export default Home;
