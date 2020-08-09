module.exports = {
  add: async (_, args, { models }) => {
    try {
      let date = new Date();
      const maxReviewId = await models.Review.findOne().sort({ id: -1 });
      const review_id = ++maxReviewId.id;
      const reviews = await models.Review.create({
        id: review_id,
        product_id: args.product_id,
        rating: args.rating,
        date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
        summary: args.summary,
        body: args.body,
        recommend: args.recommend === true ? 1 : 0,
        reported: 0,
        reviewer_name: args.name,
        reviewer_email: args.email,
        response: "test",
        helpfulness: "test",
      });

      const maxReviews_PhotosId = await models.Reviews_Photo.findOne().sort({
        id: -1,
      });
      const rev_photo_id = ++maxReviews_PhotosId.id;
      for (const url of args.photos) {
        await models.Reviews_Photo.create({
          id: rev_photo_id,
          review_id: review_id,
          url: url,
        });
      }

      const maxCharacteristicReviewId = await models.Characteristic_Review.findOne().sort(
        { id: -1 }
      );
      const char_id = ++maxCharacteristicReviewId.id;
      for (const key in args.characteristics) {
        await models.Characteristic_Review.create({
          id: char_id,
          characteristic_id: parseInt(key.substring(1)),
          review_id: review_id,
          value: args.characteristics.key,
        });
      }

      let mutationWasSuccessful = false;
      for (const item in reviews) {
        if (item === undefined || item === null)
          throw new Error("Input review item is either null or undefined");
      }
      mutationWasSuccessful = true;
      return mutationWasSuccessful;
    } catch {
      throw new Error("Unable to save data");
    }
  },
};
