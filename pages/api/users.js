import { initMongoose } from "../../lib/mongoose";
import User from "../../models/User";


export default async function handler(req, res) {
  const { method } = req;
  await initMongoose();

  switch (method) {

    case "GET":
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        let user = await User.findOne({email: req.body.email})
        if(user){
          res.status(200).json({ success: false, message: 'User already exists'});
        } else {
          const user = await User.create(req.body)
          res.redirect('/auth')
          res.status(200).json({ success: true, data: user });
        }
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
      
      default:
        res.status(400).json({ success: false });
        break;
  }
}
