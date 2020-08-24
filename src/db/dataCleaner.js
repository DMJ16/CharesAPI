const csv = require("csv-parser");
const fs = require("fs");
const CSV = require("csv-string");
const path = require("path");

const csvCleaner = (csvName) => {
  const readStream = fs.createReadStream(
    path.resolve(__dirname, `../data`, `${csvName}.csv`)
  );
  const writeStream = fs.createWriteStream(
    path.resolve(__dirname, `../cleanData`, `${csvName}Clean.csv`)
  );

  readStream.pipe(csv()).on("data", (data) => {
    let cleanData = {};
    for (const key in data) {
      if (data[key] === null) {
        cleanData[key] = "";
      }
      if (csvName === "reviews") {
        if (key === "recommend" || key === "reported") {
          if (data[key] === "true") {
            cleanData[key] = 1;
          } else if (data[key] === "false") {
            cleanData[key] = 0;
          } else {
            cleanData[key] = data[key];
          }
        } else if (key === "response") {
          if (
            data[key] === null ||
            data[key] === undefined ||
            data[key] === "null" ||
            data[key] === ""
          ) {
            cleanData[key] = "";
          } else {
            cleanData[key] = data[key];
          }
        } else {
          cleanData[key] = data[key];
        }
      } else {
        cleanData[key] = data[key];
      }
    }
    writeStream.write(CSV.stringify(cleanData));
  });
};

csvCleaner("reviews");
csvCleaner("reviews_photos");
csvCleaner("characteristics");
csvCleaner("characteristic_reviews");
