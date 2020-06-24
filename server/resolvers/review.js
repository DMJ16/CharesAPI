module.exports = {
  photos: async (parent, __, { models }) => {
    try {
      const photos = await models.Reviews_Photo.find({
        review_id: parent.id,
      });
      console.log(photos);
      return photos;
    } catch (err) {
      console.error(err);
    }
  },
};
