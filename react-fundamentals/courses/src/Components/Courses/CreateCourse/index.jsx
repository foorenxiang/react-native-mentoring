/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const updateCourse = () => {};

const Title = ({ title, titleHandler }) => (
  <>
    <div>Title</div>
    <input type="text" onChange={titleHandler} value={title} />
  </>
);

const UpdateCourseButton = () => (
  <button type="submit" onMouseDown={updateCourse}>
    Update course
  </button>
);

const Description = ({ description, setDescription }) => (
  <>
    <div>Description</div>
    <input
      type="text"
      onChange={({ target: { value } }) => setDescription(value)}
      value={description}
    />
  </>
);

const AddAuthor = ({ authorsInfo: { setAllAuthors, allAuthors } }) => {
  const [authorInput, setAuthorInput] = useState('');
  const addAuthor = () => {
    const validateInput = () =>
      authorInput && typeof authorInput === 'string' && !allAuthors.includes(authorInput);

    if (validateInput()) {
      setAllAuthors([...allAuthors, authorInput]);
    }
    setAuthorInput('');
  };
  return (
    <>
      <div>Add authors</div>
      <input
        type="text"
        onChange={({ target: { value } }) => setAuthorInput(value)}
        value={authorInput}
      />
      <button type="button" onMouseDown={addAuthor}>
        Create Author
      </button>
    </>
  );
};

const Duration = ({ duration, setDuration }) => {
  const minInHours = 60;
  return (
    <>
      <div>Duration</div>
      <input
        type="text"
        onBlur={({ target: { value: durationValue } }) => {
          if (parseFloat(durationValue, 10)) {
            setDuration(durationValue / minInHours);
          }
        }}
      />
      <div>Duration: {duration} hour</div>
    </>
  );
};

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

const AuthorHandler = ({ authorHandlers }) => (
  <>
    <AuthorsView authorHandlers={authorHandlers} />
    <CourseAuthorsView authorHandlers={authorHandlers} />
  </>
);

const MetadataContainer = ({ metadata, setMetadata }) => {
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
  const [title, setTitle] = useState('');
  const [metadata, setMetadata] = useState({});
  const formValues = { description };

  const titleHandler = ({ target: { value: newTitle } }) => setTitle(newTitle);

  const submitFormHandler = async () => {
    const endpoint = '';
    const response = await fetch(endpoint, { method: 'POST', body: JSON.stringify(formValues) });
    return response.json;
  };

  return (
    <div>
      <Title titleHandler={titleHandler} title={title} />
      <UpdateCourseButton submitFormHandler={submitFormHandler} />
      <Description description={description} setDescription={setDescription} />
      <MetadataContainer metadata={metadata} setMetadata={setMetadata} />
    </div>
  );
};

export default CreateCourse;
