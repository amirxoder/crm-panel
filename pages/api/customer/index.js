import Customer from "../../../models/Cotumer";
import { connectDB } from "../../../utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "failed",
      message: "error in connecting to datbase or bad request",
    });
  }

  if (req.method === "POST") {
    const data = req.body.data;

    if (!data.name || !data.lastName || !data.email) {
      return res.status(400).json({
        status: "failed",
        message: "invalid data",
      });
    }

    try {
      const customer = await Customer.create(data);
      res.status(201).json({
        status: "success",
        message: "store data in DB successfull",
        data: customer,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        status: "failed",
        message: "Error in storing data in db ",
      });
    }
  }
}
