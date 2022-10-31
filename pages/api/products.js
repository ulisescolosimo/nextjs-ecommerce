import { initMongoose } from "../../lib/mongoose";
import Product from "../../models/Product";

export default async function handler(req, res) {
  const { method } = req;
  await initMongoose();

  switch (method) {
    case "GET":
      try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const products = await Product.create(req.body);
        res.status(200).json({ success: true, data: products });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
