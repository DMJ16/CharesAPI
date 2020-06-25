module.exports = {
  list: async (_, args, { models }) => {
    try {
      const reviews = await models.Review.find({
        product_id: args.product_id,
        reported: false,
      });
      // construct list object;
      const list = {
        product: args.product_id.toString(),
        page: args.page || 1,
        count: args.count || 5,
        results:
          args.sort === "newest"
            ? reviews.sort((a, b) => {
                let d1 = new Date(a.date);
                let d2 = new Date(b.date);
                return d2 - d1;
              })
            : args.sort === "helpful"
            ? reviews.sort((a, b) => {
                let h1 = a.helpfulness;
                let h2 = b.helpfulness;
                return h2 - h1;
              })
            : args.sort === "relevant"
            ? reviews.sort((a, b) => {
                let d1 = new Date(a.date);
                let d2 = new Date(b.date);
                let h1 = a.helpfulness;
                let h2 = b.helpfulness;
                return d2 * h2 - d1 * h1;
              })
            : reviews,
      };
      return list;
    } catch (err) {
      console.error(err);
    }
  },
  metadata: async (_, args, { models }) => {
    try {
      const reviews = await models.Review.find({
        product_id: args.product_id,
        reported: false,
      });
      let ratings = {};
      let recommended = {};
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
      // construct metadata object;
      const metadata = {
        product_id: args.product_id.toString(),
        ratings,
        recommended,
      };
      // console.log(metadata);
      return metadata;
    } catch (err) {
      console.error(err);
    }
  },
};
