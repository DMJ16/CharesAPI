module.exports = {
  list: async (_, args, { models }) => {
    try {
      const reviews = await models.Review.find({
        product_id: args.product_id,
        reported: false,
      });

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
    } catch (e) {
      throw e;
    }
  },
};
