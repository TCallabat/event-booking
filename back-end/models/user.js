/**
 * back-end\models\user.js
 */

/* IMPORT MODULES */
const mongoose = require("mongoose");

/* MODEL */
const Schema = mongoose.Schema;
const userSchema = new Schema(
	{
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		createdEvents: [
			{
				type: Schema.Types.ObjectId,
				ref: "Event"
			}
		]
	},
	{
		timestamps: true
	}
);

/* EXPORT */
module.exports = mongoose.model("User", userSchema);