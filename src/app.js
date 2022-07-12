const express = require("express");
const path = require("path");
const {graphqlHTTP} = require("express-graphql");
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");
const cors = require("cors");
const {makeExecutableSchema} = require("@graphql-tools/schema");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
// connect to atlas database (mongodb)

mongoose
  .connect(
    "mongodb+srv://yCompany:skumar05@cluster0.qamca2q.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Mongodb connection success");
  })
  .catch((err) => {
    console.log(err);
  });
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

//app.use('/.netlify/functions',router);
//app.use(express.static(__dirname + "/../client/drgupta/dist"));

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "/../client/drgupta/dist", "index.html"));
//   //  res.sendFile(__dirname + "/../client/drgupta/dist/index.html");
// });

var server = app.listen(process.env.PORT || 4000, function () {
  console.log("Listening on port " + server.address().port);
});