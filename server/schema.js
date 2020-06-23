// const { gql } = require("apollo-server-express");

// // create type definitions for schema
// const typeDefs = gql`
//   type Review {
//     review_id: ID!
//     product_id: Int
//     rating: Int
//     date: String
//     summary: String
//     body: String
//     recommend: Int
//     reported: Int
//     reviewer_name: String
//     reviewer_email: String
//     response: String
//     helpfulness: String
//     photos: [ReviewPhoto]
//   }

//   type ReviewPhoto {
//     id: ID!
//     review_id: Int!
//     url: String!
//   }

//   type Characteristic {
//     id: ID!
//     product_id: Int!
//     name: String!
//   }

//   type CharacteristicReview {
//     id: ID!
//     characteristic_id: Int!
//     review_id: Int!
//     value: Float!
//   }

//   type Query {
//     reviews(product_id: ID!, page: Int, count: Int, sort: String): [Review]
//     photos(review_id: Int!): [ReviewPhoto]
//   }
// `;

// module.exports = typeDefs;
