import dbConnect from "../../../utils/mongo";
import Order from "../../../models/Order";

const handler = async (req, res) => {
    const { method } = req;
  
    dbConnect();
  
    if (method === "GET") {
      try {
          const orders = await Order.find();
          res.status(200).send(orders);
      } catch (error) {
        return res.status(500).send(error);
      }
    }
  
    if (method === "POST") {
      try {
        const product = await Order.create(req.body);
        res.status(201).send(product);
      } catch (error) {
        return res.status(500).send(error);
      }
    }
  }
  
  export default handler;