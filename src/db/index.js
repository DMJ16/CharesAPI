require("dotenv").config();
const mongoose = require("mongoose");

module.exports = {
  connect: (
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
  ) => {
    const options = {
      useNewUrlParser: true,
      connectTimeoutMS: 10000,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
    mongoose
      .connect(url, options)
      .then(function () {
        console.log("MongoDB is connected");
      })
      .catch(function (err) {
        console.log(err);
        process.exit();
      });
  },
};
