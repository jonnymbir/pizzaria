import dbConnect from "../../../utils/mongo";
import Order from "../../../models/Order";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).send(order);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(200).send(order);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  if (method === "PUT") {
  }
  if (method === "DELETE") {
  }
}
