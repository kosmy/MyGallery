const initialState = {
  images: [],
  selectedImage: null,
};

const reducer = (state = initialState, action) => {
  return {
    images: action.images,
  };
};

export default reducer;
