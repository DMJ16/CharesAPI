const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar JSON

  type Review {
    id: Int
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
    photos: [ReviewPhoto]
  }

  type ReviewPhoto {
    id: Int
    review_id: Int
    url: String
  }

  type Characteristic {
    id: Int
    product_id: Int
    name: String
  }

  type CharacteristicReview {
    id: Int
    characteristic_id: Int
    review_id: Int
    value: Float
  }

  type List {
    product: String
    page: Int
    count: Int
    results: [Review]
  }

  type Metadata {
    product_id: String
    ratings: JSON
    recommended: JSON
    characteristics: JSON
  }

  type Query {
    list(product_id: Int, page: Int, count: Int, sort: String): List
    meta(product_id: Int!): Metadata
  }

  type Mutation {
    add(
      product_id: Int!
      rating: Int
      date: String
      summary: String
      body: String
      recommend: Boolean
      name: String
      email: String
      photos: [String]
      characteristics: JSON
    ): Boolean
    helpful(review_id: Int!): Boolean
    report(review_id: Int!): Boolean
  }
`;

module.exports = typeDefs;
