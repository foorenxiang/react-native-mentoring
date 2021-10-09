/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import UpdateCourseButton from './UpdateCourseButton';
import Title from './Title';
import Description from './Description';
import { mockedAuthorsList } from '../../../utils/data';
import MetadataContainer from './MetadataContainer';
import { backendURL } from '../../../utils';

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
    const endpoint = `${backendURL}/courses/add`;
    const responseObject = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(formValues),
    });
    const response = await JSON.parse(responseObject.json);
    // eslint-disable-next-line no-constant-condition
    if (true) {
      setIsSubmitted(true);
    }
    return response;
  };

  return isSubmitted ? (
    <Redirect to="/courses/" />
  ) : (
    <div>
      <Title titleHandler={titleHandler} title={title} />
      <UpdateCourseButton updateCourse={submitFormHandler} />
      <Description description={description} setDescription={setDescription} />
      <MetadataContainer metadata={metadata} setMetadata={setMetadata} />
    </div>
  );
};

export default CreateCourse;
