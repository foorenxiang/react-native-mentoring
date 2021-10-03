/* eslint-disable react/prop-types */
import React from 'react';
import { mockedAuthorsList } from '../data';
import './index.module.css';

const matchAuthorIdToName = (authorId) =>
  mockedAuthorsList.find((mockedAuthor) => mockedAuthor.id === authorId).name;
const getAuthorNames = (authorsId) => authorsId.map((authorId) => matchAuthorIdToName(authorId));

const Title = ({ title }) => <div>{title}</div>;
const Duration = ({ duration }) => <div>{duration} hours</div>;
const CreationDate = ({ date }) => <div>{date}</div>;
const ShowCourse = ({ description }) => <div>{description}</div>;
const Authors = ({ authorsId }) => {
  const authorNames = getAuthorNames(authorsId);
  return authorNames.map((authorName) => (
    <div key={`${authorName}_authorElement`}>{authorName}</div>
  ));
};

const CourseCard = ({ courseData: data }) => (
  <div className="CourseCard" key={`${data.id}_courseCard`}>
    <Title title={data.title} key={`${data.id}_title`} />
    <Duration duration={data.duration} key={`${data.id}_duration`} />
    <CreationDate date={data.creationDate} key={`${data.id}_creationDate`} />
    <ShowCourse description={data.description} key={`${data.id}_description`} />
    <Authors authorsId={data.authors} key={`${data.id}_author`} />
  </div>
);

export default CourseCard;
