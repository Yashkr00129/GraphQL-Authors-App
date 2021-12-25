const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

// Database Connection
mongoose
  .connect(
    "mongodb+srv://Yashkr00129:Yashkr00129@authorsandbooks.c01oh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB.."))
  .catch((e) => console.log("Connection to MongoDB failed..", e.message));

// Allow cross origin requests
app.use(cors());

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
