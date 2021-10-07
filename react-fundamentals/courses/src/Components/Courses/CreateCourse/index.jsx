/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { mockedAuthorsList } from '../data';

const Title = ({ title, titleHandler }) => (
  <>
    <div>Title</div>
    <input type="text" onChange={titleHandler} value={title} />
  </>
);

const UpdateCourseButton = ({ updateCourse }) => (
  <button type="button" onMouseDown={updateCourse}>
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
      typeof authorInput === 'string' &&
      authorInput.length >= 2 &&
      !allAuthors.includes(authorInput);

    if (validateInput()) {
      setAllAuthors([...allAuthors, authorInput]);
    }
    setAuthorInput('');
    if (!mockedAuthorsList.includes(authorInput)) {
      mockedAuthorsList.push({
        id: uuidv4(),
        name: authorInput,
      });
    }
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
        onChange={({ target: { value: durationValue } }) => {
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

const MetadataContainer = ({ setMetadata, resetMetaData }) => {
  const [duration, setDuration] = useState(0);
  const [allAuthors, setAllAuthors] = useState([]);
  const [courseAuthors, setCourseAuthors] = useState([]);

  useEffect(() => {
    setMetadata({ duration, allAuthors, courseAuthors });
  }, [duration, allAuthors, courseAuthors]);

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
  const defaultMetaData = {
    allAuthors: [],
    courseAuthors: [],
    setCourseAuthors: [],
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [metadata, setMetadata] = useState(defaultMetaData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetMetaData = () => setMetadata(defaultMetaData);

  const getAuthorId = (authorName) =>
    authorName
      ? mockedAuthorsList.filter((authorObject) => authorObject.name === authorName).id
      : null;

  const formValues = {
    id: uuidv4(),
    title,
    description,
    creationDate: 'string',
    duration: metadata.duration,
    authors: metadata?.allAuthors.map((authorName) => getAuthorId(authorName)),
  };

  const titleHandler = ({ target: { value: newTitle } }) => setTitle(newTitle);

  const submitFormHandler = async () => {
    const endpoint = '';
    const response = await fetch(endpoint, { method: 'POST', body: JSON.stringify(formValues) });
    // return response.json;
    // eslint-disable-next-line no-constant-condition
    if (true) {
      setIsSubmitted(true);
    }
  };

  return isSubmitted ? (
    <Redirect to="/courses/" />
  ) : (
    <div>
      <Title titleHandler={titleHandler} title={title} />
      <UpdateCourseButton updateCourse={submitFormHandler} />
      <Description description={description} setDescription={setDescription} />
      <MetadataContainer
        metadata={metadata}
        setMetadata={setMetadata}
        resetMetaData={resetMetaData}
      />
    </div>
  );
};

export default CreateCourse;
