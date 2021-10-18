import { ADD_COURSE, REMOVE_COURSE } from './actionTypes';
const coursesInitialState = { courses: [] };

const coursesReducer = (state = coursesInitialState, action) => {
  switch (action.type) {
    case ADD_COURSE: {
      const { courses } = state;
      const courseToAdd = action.payload;
      return { courses: [...courses, courseToAdd] };
    }
    case REMOVE_COURSE: {
      const { courses } = state;
      const courseIdToRemove = action.payload;
      return { courses: courses.filter((course) => course.id !== courseIdToRemove) };
    }
    default:
      return state;
  }
};

export default coursesReducer;
