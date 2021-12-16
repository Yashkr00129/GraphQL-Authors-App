const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

// Database Connection
mongoose
  .connect("mongodb://localhost/Authors_App")
  .then(() => console.log("Connected to MongoDB.."))
  .catch(() => console.log("Connection to MongoDB failed.."));

// GraphQL Middleware
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Server running on http://localhost:${port}/graphql`);
});
