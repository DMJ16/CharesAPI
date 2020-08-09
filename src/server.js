const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const bodyParser = require("body-parser");
require("dotenv").config();

const db = require("./db");
const models = require("./db/models");
const typeDefs = require("./graphql/schema.js");
const resolvers = require("./graphql/resolvers");

const port = process.env.GRAPHQL_PORT || 4000;
const DB_HOST = process.env.DB_HOST;

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

db.connect(DB_HOST);

server.applyMiddleware({ app, path: `/reviews` });

app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
