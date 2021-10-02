import { ADD_TASK } from './types';
import { logs } from './initData';

const initialState = {
  tasks: [{ task: 'Sample task', done: true, id: '0' }],
  logs,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            task: action.payload,
            done: false,
            id: Math.random().toString(),
          },
        ],
      };
    default:
      return state;
  }
};
export default taskReducer;
