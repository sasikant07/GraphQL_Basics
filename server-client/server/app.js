const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./schema/schema");

const app = express();

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log(`App running for request on port 4000`);
})