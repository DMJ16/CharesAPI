module.exports = {
  helpful: async (_, { review_id }, { models }) => {
    try {
      const review = await models.Review.findOne({ id: review_id }).select(
        'helpfulness'
      );
      let helpfulness = review.helpfulness;
      if (helpfulness === 'NaN') helpfulness = 0;
      parseInt(helpfulness);
      const newHelpfulness = helpfulness + 1;
      await models.Review.findOneAndUpdate(
        { id: review_id },
        { helpfulness: newHelpfulness.toString() }
      );
      if (helpfulness + 1 === newHelpfulness) return true;
    } catch {
      throw new Error();
    }
  },
};
