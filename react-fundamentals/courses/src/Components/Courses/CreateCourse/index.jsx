/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const updateCourse = () => {};

const Title = () => (
  <>
    <div>Title</div>
    <input type="text" />
  </>
);

const UpdateCourseButton = () => (
  <button type="submit" onMouseDown={updateCourse}>
    Update course
  </button>
);

const Description = ({ setDescription }) => (
  <>
    <div>Description</div>
    <input type="text" onChange={({ target: { value } }) => setDescription(value)} />
  </>
);

const AddAuthor = ({ authorsInfo: { setAllAuthors, allAuthors } }) => (
  <>
    <div>Add authors</div>
    <input type="text" />
    <button
      type="button"
      onMouseDown={({ target: { value } }) => setAllAuthors([allAuthors, ...value])}
    >
      Create Author
    </button>
  </>
);

const Duration = ({ duration, setDuration }) => (
  <>
    <div>Duration</div>
    <input
      type="text"
      onBlur={({ target: { value: durationValue } }) => {
        setDuration(durationValue);
      }}
    />
    <div>Duration: {duration} hours</div>
  </>
);

const Author = ({ authorHandlers: { allAuthors, courseAuthors, setCourseAuthors } }) => (
  <>
    <div>Authors</div>
    {allAuthors
      .filter((author) => !!courseAuthors.indexOf(author))
      .map((author) => (
        <>
          <span>{author}</span>
          <button type="button" onMouseDown={() => setCourseAuthors([...courseAuthors, author])}>
            Add author
          </button>
        </>
      ))}
  </>
);

const CourseAuthors = ({ authorHandlers: { allAuthors, courseAuthors, setCourseAuthors } }) => (
  <>
    <div>Course Authors</div>
    {allAuthors
      .filter((author) => !!courseAuthors.indexOf(author))
      .map((author) => (
        <>
          <span>{author}</span>
          <button
            type="button"
            onMouseDown={() =>
              setCourseAuthors(allAuthors.filter((authorInList) => authorInList !== author))
            }
          >
            Delete author
          </button>
        </>
      ))}
  </>
);

const AuthorHandler = ({ authorHandlers }) => (
  <>
    <Author authorHandlers={authorHandlers} />
    <CourseAuthors authorHandlers={authorHandlers} />
  </>
);

const MetadataContainer = () => {
  const [duration, setDuration] = useState(0);
  const [allAuthors, setAllAuthors] = useState([]);
  const [courseAuthors, setCourseAuthors] = useState([]);
  return (
    <>
      <AddAuthor authorsInfo={{ allAuthors, setAllAuthors }} />
      <Duration duration={duration} setDuration={setDuration} />
      <AuthorHandler
        authorHandlers={{
          allAuthors,
          courseAuthors,
          setCourseAuthors,
        }}
      />
    </>
  );
};

const CreateCourse = () => {
  const [description, setDescription] = useState('');
  const formValues = { description };

  const submitFormHandler = async () => {
    const endpoint = '';
    const response = await fetch(endpoint, { method: 'POST', body: JSON.stringify(formValues) });
    return response.json;
  };

  return (
    <div>
      <Title />
      <UpdateCourseButton submitFormHandler={submitFormHandler} />
      <Description description={description} setDescription={setDescription} />
      <MetadataContainer />
    </div>
  );
};

export default CreateCourse;
