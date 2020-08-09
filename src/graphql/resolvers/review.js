module.exports = {
  photos: async (parent, args, { models }) => {
    try {
      const photos = await models.Reviews_Photo.find({
        review_id: parent.id,
      });

      // for (const reviewPhotos of photos) {
      //   let i = 0;
      //   for (const urlObj in reviewPhotos) {
      //     if (urlObj.id) urlObj.id = ++i;
      //   }
      // }
      // console.log(photos);
      return photos;
    } catch (e) {
      throw e;
    }
  },
};
