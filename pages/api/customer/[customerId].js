import { connectDB } from "../../../utils/connectDB";
import Customer from "./../../../models/Cotumer";

export default async function handler(req, res) {
  console.log("first");
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "failed",
      message: "Error in connecting to database",
    });
  }

  if (req.method === "GET") {
    const id = req.query.customerId;
    try {
      const customer = await Customer.findOne({ _id: id });
      res.status(200).json({
        status: "success",
        data: customer,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "failed",
        message: "Error in reteriving data from DB",
      });
    }
  }
}
