import React from 'react';
import PropTypes from 'prop-types';

const authorHandlersPropTypes = PropTypes.shape({
  allAuthors: PropTypes.arrayOf(PropTypes.string).isRequired,
  courseAuthors: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCourseAuthors: PropTypes.func.isRequired,
});

const AuthorsView = ({ authorHandlers: { allAuthors, courseAuthors, setCourseAuthors } }) => (
  <>
    <div>Authors</div>
    {allAuthors
      .filter((author) => !courseAuthors.includes(author))
      .map((author) => (
        <div>
          <span>{author}</span>
          <button type="button" onMouseDown={() => setCourseAuthors([...courseAuthors, author])}>
            Add author
          </button>
        </div>
      ))}
  </>
);

AuthorsView.propTypes = {
  authorHandlers: authorHandlersPropTypes.isRequired,
};

const CourseAuthorsView = ({ authorHandlers: { allAuthors, courseAuthors, setCourseAuthors } }) => (
  <>
    <div>Course Authors</div>
    {allAuthors
      .filter((author) => courseAuthors.includes(author))
      .map((author) => (
        <>
          <span>{author}</span>
          <button
            type="button"
            onMouseDown={() =>
              setCourseAuthors(courseAuthors.filter((authorInList) => authorInList !== author))
            }
          >
            Delete author
          </button>
        </>
      ))}
  </>
);

CourseAuthorsView.propTypes = {
  authorHandlers: authorHandlersPropTypes.isRequired,
};

const Authors = ({ authorHandlers }) => (
  <>
    <AuthorsView authorHandlers={authorHandlers} />
    <CourseAuthorsView authorHandlers={authorHandlers} />
  </>
);

Authors.propTypes = {
  authorHandlers: authorHandlersPropTypes.isRequired,
};

export default Authors;
