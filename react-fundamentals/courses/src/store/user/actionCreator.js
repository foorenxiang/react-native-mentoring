// actions
import { AUTHENTICATED, UNAUTHENTICATED } from './actionTypes';

const authenticate = (name, email, token) => ({
  type: AUTHENTICATED,
  payload: {
    isAuth: true, /// default value - false. After success login - true
    name, /// default value - empty string. After success login - name of user
    email, /// default value - empty string. After success login - email of user
    token, /// default value - empty string or token value from localStorage.
  },
});

const unauthenticate = { type: UNAUTHENTICATED };

export { authenticate, unauthenticate };
