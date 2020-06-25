const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Review {
    id: ID!
    product_id: Int
    rating: Int
    date: String
    summary: String
    body: String
    recommend: Int
    reported: Int
    reviewer_name: String
    reviewer_email: String
    response: String
    helpfulness: String
    photos: [ReviewPhoto!]
  }

  type ReviewPhoto {
    id: ID!
    review_id: Int!
    url: String!
  }

  type Characteristic {
    id: ID!
    product_id: Int!
    name: String!
  }

  type CharacteristicMetadata {
    id: ID!
    product_id: Int!
    name: CharacteristicReview
  }

  type CharacteristicReview {
    id: ID!
    characteristic_id: Int!
    review_id: Int!
    value: Float!
  }

  type List {
    product: String
    page: Int
    count: Int
    results: [Review!]
  }

  type Ratings {
    number: Int
  }

  type Recommended {
    number: Int
  }

  type Metadata {
    product_id: String
    ratings: Ratings
    recommended: Recommended
    # characteristics: Characteristic
  }

  type Query {
    list(product_id: Int!, page: Int, count: Int, sort: String): List
    metadata(product_id: Int!): Metadata
  }
`;

module.exports = typeDefs;
