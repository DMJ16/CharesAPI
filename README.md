# 🔮 GraphQL API

#### Node.js | GraphQL | Apollo | Express | MongoDB | AWS EC2 | Docker

API for eCommerce website’s product reviews.

🎮 GraphQL Playground http://ec2-34-204-6-123.compute-1.amazonaws.com:4000/reviews

## ❓ Queries

### 📄 List Reviews

Get a list of reviews for individual products. Reported reviews are excluded.

```GraphQL
list(
product_id: Int
page: Int
count: Int
sort: String
): List
```

```json
{
  "data": {
    "list": {
      "product": "12",
      "page": 1,
      "count": 5,
      "results": [
        {
          "id": 15,
          "product_id": 12,
          "rating": 5,
          "date": "2019-04-11",
          "summary": "Sed repellat quo recusandae.",
          "body": "Vitae reiciendis aspernatur voluptatem labore voluptatem ullam quos. Esse dolorum quas sunt unde est. Odio necessitatibus natus commodi at. Quia exercitationem aut quia sapiente harum et. Odit et hic nobis.",
          "recommend": 1,
          "reported": 0,
          "reviewer_name": "Pink.Purdy25",
          "reviewer_email": "Donny.Jacobson11@yahoo.com",
          "response": "",
          "helpfulness": "11",
          "photos": [
            {
              "id": 10,
              "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            }
          ]
        },
        // ...
```

### 📊 Review Metadata

Get review metadata for a single product.

```GraphQL
meta(product_id: Int!): Metadata
```

```json
{
  "data": {
    "meta": {
      "product_id": "8893",
      "ratings": {
        "2": 9,
        "3": 3
      },
      "recommended": {
        "1": 12
      },
      "characteristics": {
        "Fit": {
          "id": 29860,
          "value": 4
        },
        "Length": {
          "id": 29861,
          "value": 2.75
        },
        "Comfort": {
          "id": 29862,
          "value": 3.25
        },
        "Quality": {
          "id": 29863,
          "value": 3.25
        }
      }
    }
  }
}
```

## 🧬 Mutations

### 📝 Add a Review

Add a new review for a single product.

```GraphQL
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
```

### 🤝 Update Review Helpfulness

Increment a review's helpfulness rating.

```GraphQL
helpful(review_id: Int!): Boolean
```

### ⚠️ Report a Review

Report a review to the host. Review is not deleted, but it will be excluded from future get review list queries.

```GraphQL
report(review_id: Int!): Boolean
```
