const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../../models/user");

module.exports = {
	createUser: async args => {
		try {
			const existingUser = await User.findOne({ email: args.userInput.email });
			if (existingUser) {
				throw new Error("User exists already");
			}
			const hashedPassword = await bcrypt.hash(args.userInput.password, 10);
			const user = new User({
				email: args.userInput.email,
				password: hashedPassword
			});
			const result = await user.save();
			return {
				...result._doc,
				password: null,
				_id: result.id
			};
		} catch (err) {
			throw err;
		}
	},
	login: async ({ email, password }) => {
		const user = await User.findOne({ email: email });
		if (!user) {
			throw new Error("User doesn't exist or password is incorrect");
		}
		const checkPassword = await bcrypt.compare(password, user.password);
		if (!checkPassword) {
			throw new Error("User doesn't exist or password is incorrect");
		}
		const token = jwt.sign({ userId: user.id, email: user.email }, process.env.SECRET_KEY, { expiresIn: "24h" });
		return {
			userId: user.id,
			token: token,
			tokenExpiration: 24
		};
	}
};
