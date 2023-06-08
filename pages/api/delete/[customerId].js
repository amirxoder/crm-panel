import { connectDB } from "../../../utils/connectDB";
import Customer from "./../../../models/Cotumer";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "failed",
      message: "error in connect to DB",
    });
  }

  if (req.method === "DELETE") {
    const id = req.query.customerId;
    try {
      await Customer.deleteOne({ _id: id });
      res.status(200).json({
        status: "success",
        message: "user deleted!",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "failed",
        message: "error in deleting data from database. BAD REQUEST",
      });
    }
  }
}
