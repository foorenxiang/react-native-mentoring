import { ADD_AUTHOR, REMOVE_AUTHOR, CLEAR_AUTHORS } from './actionTypes';

const authorsInitialState = { authors: [] };

const authorsReducer = (state = authorsInitialState, action) => {
  switch (action.type) {
    case ADD_AUTHOR: {
      const { authors } = state;
      const newAuthor = action.payload;
      return { authors: [...authors, newAuthor] };
    }
    case REMOVE_AUTHOR: {
      const { authors } = state;
      const authorToRemove = action.payload;
      return { authors: authors.filter((author) => author.id !== authorToRemove) };
    }
    case CLEAR_AUTHORS:
      return authorsInitialState;
    default:
      return state;
  }
};

export default authorsReducer;
