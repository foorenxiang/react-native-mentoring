import React from "react";
import PropTypes from "prop-types";

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

Description.propTypes = {
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
};

export default Description;
