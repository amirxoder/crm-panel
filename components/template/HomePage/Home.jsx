import React from "react";
import Customer from "../../modules/Customer/Customer";

const Home = ({ customers }) => {
  return (
    <div>
      {customers.map((item) => (
        <Customer {...item} key={item._id} />
      ))}
    </div>
  );
};

export default Home;
