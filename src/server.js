const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const bodyParser = require("body-parser");
require("dotenv").config();

const db = require("./db");
const models = require("./db/models");
const typeDefs = require("./graphql/schema.js");
const resolvers = require("./graphql/resolvers");

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
} = process.env;

const port = process.env.GRAPHQL_PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  tracing: true,
  engine: {
    reportSchema: true,
    graphVariant: "current",
  },
  context: () => {
    return { models };
  },
});

const app = express();
app.use(bodyParser.json());

db.connect(
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
);

server.applyMiddleware({ app, path: `/reviews` });

app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
