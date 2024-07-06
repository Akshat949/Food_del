import userModel from "../models/userModel.js";

const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId });
    let cardData = await userData.cardData;
    if (!cardData[req.body.itemId]) {
      cardData[req.body.itemId] = 1;
    } else {
      cardData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cardData });
    res.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

// remove items from user cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cardData = await userData.cardData;
    if (cardData[req.body.itemId] > 0) {
      cardData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cardData });
    res.json({ success: true, message: "remove to Cart" });
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "remove to Cart"})
  }
};

// fetch user data
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cardData = await userData.cardData;
        res.json({success:true,cardData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
};

export { addToCart, removeFromCart, getCart };
