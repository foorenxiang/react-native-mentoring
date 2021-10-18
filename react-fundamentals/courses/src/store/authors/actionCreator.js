import { ADD_AUTHOR, REMOVE_AUTHOR, CLEAR_AUTHORS } from './actionTypes';

export const addAuthor = (author) => ({ type: ADD_AUTHOR, payload: author });
export const removeAuthor = (authorId) => ({ type: REMOVE_AUTHOR, payload: authorId });
export const clearAuthors = () => ({ type: CLEAR_AUTHORS });
