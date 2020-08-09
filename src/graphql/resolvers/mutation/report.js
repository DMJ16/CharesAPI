module.exports = {
  report: async (_, { review_id }, { models }) => {
    try {
      await models.Review.findOneAndUpdate({ id: review_id }, { reported: 1 });
      const review = await models.Review.findOne({ id: review_id });
      if (review.reported === 1) return true;
    } catch {
      throw new Error();
    }
  },
};
