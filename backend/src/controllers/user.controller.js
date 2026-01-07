import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // basic validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All filed are important!" });
    }

    // check if user exist
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ message: "User ALready exist" });
    }
    // create user
    const user =await User.create({
        username,
        email:email.toLowerCase(),
        password,
        // LoggedIn:false,
    })
    res.status(201).json({
        message:"user Register",
        user:{email:user.email,username:user.username}
    })

  } catch (error) {
    res.status(500).json({message:"Internal server error",error:error.message})
  }
};

export{
    registerUser
}