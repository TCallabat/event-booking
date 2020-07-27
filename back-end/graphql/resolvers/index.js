const authResolver = require("./assets/auth");
const bookingResolver = require("./assets/booking");
const eventsResolver = require("./assets/events");

const rootResolver = {
	...authResolver,
	...eventsResolver,
	...bookingResolver
};

module.exports = rootResolver;
