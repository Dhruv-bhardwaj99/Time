import { GET_STORY, GET_STORY_ERROR, GET_STORY_LOADING } from "./action";

const initState = {
  story: [],
  loading: false,
  error: false,
};

export const storyReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_STORY:
      return { ...store, story: payload, loading: false };

    case GET_STORY_LOADING:
      return { ...store, loading: true };

    case GET_STORY_ERROR:
      return { ...store, error: true };

    default:
      return store;
  }
};
