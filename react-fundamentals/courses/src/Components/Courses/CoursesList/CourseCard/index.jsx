/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { mockedAuthorsList } from '../../../../utils/data';
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

CourseCard.propTypes = {
  courseData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    creationDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

CourseCard.defaultProps = {
  courseData: {
    id: null,
    title: null,
    duration: null,
    creationDate: null,
    description: null,
    authors: [],
  },
};

export default CourseCard;
