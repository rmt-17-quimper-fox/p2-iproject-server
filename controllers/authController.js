const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { OAuth2Client } = require('google-auth-library')
const { User } = require("../models");
const { hashPassword } = require("../helpers/bcrypt");

const postRegister = async (req, res, next) => {
  let { email, password, role } = req.body;
  try {
    role = role? role : null
    const newUser = await User.create({ email, password, role });
    res.status(201).json({ message: `New ${newUser.role} has been created`});
  } catch (err) {
    next(err);
  }
};

const postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email) throw {name: "NoEmail"}
  if (!password) throw {name: "NoPassword"}
  try {
    const foundUser = await User.findOne({ where: { email } });
    if (!foundUser) throw { name: "InvalidLogin" }
    let isValidPassword = comparePassword(password, foundUser.password);
    if (!isValidPassword) throw { name: "InvalidLogin" };
    let access_token = signToken({ id: foundUser.id, email: foundUser.email, role: foundUser.role });
    res.status(200).json({ message: "Login Success.", access_token});
  } catch (err) {
    next(err);
  }
};

const postGoogleSignIn = async (req, res, next) => {
  const { google_token } = req.body;
  try {
    client_id = process.env.GOOGLE_CLIENT_ID;
    const client = new OAuth2Client(client_id);
    const ticket = await client.verifyIdToken({ idToken: google_token, audience: client_id });
    const  { email } = ticket.getPayload();
    const [user, isCreated] = await User.findOrCreate({
      where: { email },
      defaults: {
        password: hashPassword('aafous98*HOh983rown3207'),
        role: "User",
      },
    });
    let access_token = signToken({ id: user.id, email: user.email, role: user.role });
    if (user.role !== 'User') throw {name: 'RegisteredAsEmployee', message: `This email has already been registered as ${user.role}!`}
    if (isCreated) {res.status(201).json({ message: "New User created and login with Google success.", access_token, email: user.email, role: user.role })}
    res.status(200).json({ message: "Login with Google success.", access_token });
  } catch (err) {
    next(err);
  }
};

module.exports = { postRegister, postLogin, postGoogleSignIn };
