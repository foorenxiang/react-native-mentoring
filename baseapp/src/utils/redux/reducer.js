import { ADD_CATEGORY, ADD_CATEGORIES } from "./types";

const initialState = {
  categories: [
    { title: "Electronics", uri: "" },
    { title: "Cloth", uri: "" },
  ],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case ADD_CATEGORIES:
      return {
        ...state,
        categories: [...state.categories, ...action.payload],
      };

    default:
      return state;
  }
};
export default taskReducer;
