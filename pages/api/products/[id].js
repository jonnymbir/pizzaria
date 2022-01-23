import dbConnect from "../../../utils/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).send(product);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).send(product);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  if(method === "DELETE"){
    try {
      await Product.findByIdAndDelete(id);
      res.status(201).send("Product deleted successfully");
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}
