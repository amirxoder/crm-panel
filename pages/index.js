import React from "react";
import { connectDB } from "../utils/connectDB";
import Customer from "../models/Cotumer";
import Home from "../components/template/HomePage/Home";

const Index = ({ customers }) => {
  return <Home customers={customers} />;
};

export default Index;

export const getServerSideProps = async () => {
  try {
    await connectDB();
    const customers = await Customer.find();
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers)),
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
