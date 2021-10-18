import { AUTHENTICATED, UNAUTHENTICATED } from './actionTypes';
// import { emailRegex } from '../../utils';

const userInitialState = {
  isAuth: false, /// default value - false. After success login - true
  name: '', /// default value - empty string. After success login - name of user
  email: '', /// default value - empty string. After success login - email of user
  token: '', /// default value - empty string or token value from localStorage.
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return action.payload;
    // try {
    //   const { isAuth, name, email, token } = action.payload;
    //   const testConditions = [
    //     isAuth === true,
    //     name,
    //     typeof name === 'string',
    //     emailRegex.test(String(email).toLowerCase()),
    //     token,
    //     typeof token === 'string',
    //   ];
    //   if (testConditions.every((condition) => !!condition)) {
    //     return action.payload;
    //   }
    //   return state;
    // } catch (e) {
    //   return state;
    // }
    case UNAUTHENTICATED:
      return userInitialState;
    default:
      return state;
  }
};

export default userReducer;
