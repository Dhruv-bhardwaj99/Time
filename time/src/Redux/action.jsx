import axios from "axios";

//actionTypes.js
export const GET_STORY = "GET_STORY";
export const GET_STORY_LOADING = "GET_STORY_LOADING";
export const GET_STORY_ERROR = "GET_STORY_ERROR";

//Action Creaters
export const getStory = (story) => ({ type: GET_STORY, payload: story });
export const getStoryLoading = () => ({ type: GET_STORY_LOADING });
export const getStoryError = () => ({ type: GET_STORY_ERROR });

export const getStoryData = () => async (dispatch) => {
  dispatch(getStoryLoading());
  axios
    .get("http://localhost:8080/story")
    .then(({ data }) => {
      dispatch(getStory(data));
    })
    .catch((err) => {
      dispatch(getStoryError(err));
    });
};
