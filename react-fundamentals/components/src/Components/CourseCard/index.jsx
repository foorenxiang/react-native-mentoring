import React from 'react';
import { mockedCourseList, mockedAuthorsList } from './data';
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
  return authorNames.map((authorName) => <div>{authorName}</div>);
};

const CourseCard = ({ courseData: data }) => (
  <div className="CourseCard">
    <Title title={data.title} />
    <Duration duration={data.duration} />
    <CreationDate date={data.creationDate} />
    <ShowCourse description={data.description} />
    <Authors authorsId={data.authors} />
  </div>
);

export default () => mockedCourseList.map((course) => <CourseCard courseData={course} />);
