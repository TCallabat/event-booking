/**
 * back-end\models\booking.js
 */

/* IMPORT MODULES */
const mongoose = require("mongoose");

/* MODEL */
const Schema = mongoose.Schema;
const bookingSchema = new Schema(
	{
		event: {
			type: Schema.Types.ObjectId,
			ref: "Event"
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: "User"
		}
	},
	{
		timestamps: true
	}
);

/* EXPORT */
module.exports = mongoose.model("Booking", bookingSchema);
