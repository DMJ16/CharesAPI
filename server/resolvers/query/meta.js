module.exports = {
  meta: async (_, args, { models }) => {
    try {
      //queries
      const queries = [
        models.Review.find({
          product_id: args.product_id,
          reported: false,
        }),
        models.Characteristic.find({
          product_id: args.product_id,
        }),
      ];
      const [reviews, getCharacteristics] = await Promise.all(queries);
      const getCharacteristicReviews = await models.Characteristic_Review.find({
        characteristic_id: getCharacteristics.map((characteristic) => {
          return characteristic.id;
        }),
      });

      //logic
      let ratings = {};
      let recommended = {};
      let characteristics = {};
      let names = {};
      let values = {};
      for (const obj of reviews) {
        if (!(obj.rating in ratings)) {
          ratings[obj.rating] = 0;
        }
        if (!(obj.recommend in recommended)) {
          recommended[obj.recommend] = 0;
        }
        ratings[obj.rating] += 1;
        recommended[obj.recommend] += 1;
      }
      for (const obj of getCharacteristics) {
        names[obj.id] = obj.name;
      }
      for (const obj of getCharacteristicReviews) {
        if (!(obj.characteristic_id in values)) {
          values[obj.characteristic_id] = [obj.value];
        } else {
          values[obj.characteristic_id].push(obj.value);
        }
      }
      for (const [id, val] of Object.entries(values)) {
        values[id] = val.reduce((a, b) => a + b, 0) / val.length;
      }
      for (const obj of getCharacteristics) {
        characteristics[obj.name] = {
          id: obj.id,
          value: values[obj.id],
        };
      }
      // construct metadata object
      const metadata = {
        product_id: args.product_id.toString(),
        ratings,
        recommended,
        characteristics,
      };
      return metadata;
    } catch (err) {
      console.error(err);
    }
  },
};
