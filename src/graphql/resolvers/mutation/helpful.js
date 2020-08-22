module.exports = {
  helpful: async (_, { review_id }, { models }) => {
    try {
      const review = await models.Review.findOne({ id: review_id }).select(
        "helpfulness"
      );
      const helpfulness = review.helpfulness;

      if (helpfulness === "NaN") helpfulness = 0;

      const newHelpfulness = parseInt(helpfulness) + 1;
      const stringify = newHelpfulness.toString();

      await models.Review.findOneAndUpdate(
        { id: review_id },
        { helpfulness: stringify }
      );

      if (parseInt(helpfulness) < newHelpfulness) return true;
    } catch {
      throw new Error();
    }
  },
};
