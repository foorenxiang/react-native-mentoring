// store creation, root reducer
import { createStore, combineReducers } from 'redux';
import authorsReducer from './authors/authors';
import coursesReducer from './courses/courses';
import userReducer from './user/user';

const rootReducer = combineReducers({
  authors: authorsReducer,
  courses: coursesReducer,
  user: userReducer,
});

const buildPreloadedState = () => {
  const { name, email, token } = localStorage.getItem('authentication') ?? {};
  return token
    ? {
        user: {
          isAuth: true, /// default value - false. After success login - true
          name,
          email,
          token,
        },
      }
    : {};
};

const store = createStore(rootReducer, buildPreloadedState());
export default store;
