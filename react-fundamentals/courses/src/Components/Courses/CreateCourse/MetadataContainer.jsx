import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AddAuthor from "./AddAuthor";
import Duration from "./Duration";
import Authors from "./Authors";

const MetadataContainer = ({ setMetadata }) => {
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
      <Authors
        authorHandlers={{
          allAuthors,
          courseAuthors,
          setCourseAuthors,
        }}
      />
    </>
  );
};

MetadataContainer.propTypes = {
  setMetadata: PropTypes.func.isRequired,
};

export default MetadataContainer;
