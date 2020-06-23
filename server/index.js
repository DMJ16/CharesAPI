// const express = require("express");
// const { ApolloServer } = require("apollo-server-express");
// const bodyParser = require("body-parser");
// require("dotenv").config();

// // local modules
// // const db = require("../db/mysql/index.js");
// // const CharesAPI = require("./dataSource.js");
// const typeDefs = require("./schema.js");
// const resolvers = require("./resolvers");
// const db = require("../db/mysql/models");
// // console.log(db);
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: { models: db.models },
// });

// const app = express();
// app.use(bodyParser.json());
// server.applyMiddleware({ app, path: `/reviews` });
// db.sequelize.authenticate();

// db.sequelize.sync();

// const port = process.env.GRAPHQL_PORT || 4000;

// app.listen({ port }, () =>
//   console.log(
//     `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
//   )
// );
