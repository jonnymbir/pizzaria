import dbConnect from "../../../utils/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    try {
        const products = await Product.find();
        res.status(200).send(products);
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
}
