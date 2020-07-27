/**
 * back-end\app.js
 */

/* IMPORT MODULES */
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const graphqlHttp = require("express-graphql");

/* IMPORT MIDDLEWARES */
const cors = require("./middlewares/cors");
const auth = require("./middlewares/auth");

/* IMPORT GRAPHQL */
const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolvers/index");

/* CREATE REACT APP */
const app = express();
const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server started on port " + PORT));

/* DATABASE CONNECTION */
const database = process.env.DB || `mongodb://localhost:27017/${process.env.MONGO_DB}`;
mongoose.connect(database, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}, (err) => {
	if (err) throw err;
	console.log("Connected to database on " + database)
});

/* MIDDLEWARES */
app.use(logger("dev"));
app.use(express.json());
app.use(cors);
app.use(auth);

/* ROUTES */
app.use("/graphql", graphqlHttp({
	schema: graphQlSchema,
	rootValue: graphQlResolvers,
	graphiql: true
}));