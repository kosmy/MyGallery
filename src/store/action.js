import Unsplash, { toJson } from "unsplash-js";

const FETCH_PHOTOS = "FETCH_PHOTOS";

const unsplash = new Unsplash({
  accessKey: "WB5ikR_ZwUZFqDfOrGKOEhHG6whbT85cqWfFew5V76o",
});

const setImages = (images) => {
  return {
    type: FETCH_PHOTOS,
    images: images,
  };
};

const fetchImages = () => {
  return (dispatch) => {
    unsplash.photos
      .listPhotos(2, 15, "latest")
      .then(toJson)
      .then((imageObjects) => {
        dispatch(setImages(imageObjects));
      });
  };
};

export default fetchImages;
