const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const cors = require("cors");
const mongoose = require("mongoose");
const schema = require("./schema/schema");

const app = express();

app.use(cors());

const DB_URL =
  "mongodb+srv://node:node123@cluster0.notzu.mongodb.net/graphqlbooks";
const DBConnect = async () => {
  try {
    const data = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Mongodb connected with server running on : ${data.connection.host}`
    );
  } catch (error) {
    console.log(error.message);
  }
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

DBConnect();
app.listen(4000, () => {
  console.log(`App running for request on port 4000`);
});
