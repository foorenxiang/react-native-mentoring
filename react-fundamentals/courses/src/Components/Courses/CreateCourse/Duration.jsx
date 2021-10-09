import React from 'react';
import PropTypes from 'prop-types';

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

Duration.propTypes = {
  duration: PropTypes.number.isRequired,
  setDuration: PropTypes.func.isRequired,
};

export default Duration;
