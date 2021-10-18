import { ADD_COURSE, REMOVE_COURSE, CLEAR_COURSES } from './actionTypes';

export const addCourse = () => ({ type: ADD_COURSE, payload: {} });
export const removeCourse = (courseId) => ({ type: REMOVE_COURSE, payload: courseId });
export const clearCourses = () => ({ type: CLEAR_COURSES });
