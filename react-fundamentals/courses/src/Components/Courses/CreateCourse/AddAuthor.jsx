import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { mockedAuthorsList } from "../../../utils/data";

const AddAuthor = ({ authorsInfo: { setAllAuthors, allAuthors } }) => {
  const [authorInput, setAuthorInput] = useState("");
  const addAuthor = () => {
    const validateInput = () =>
      typeof authorInput === "string" &&
      authorInput.length >= 2 &&
      !allAuthors.includes(authorInput);

    if (validateInput()) {
      setAllAuthors([...allAuthors, authorInput]);
    }
    setAuthorInput("");
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

AddAuthor.propTypes = {
  authorsInfo: PropTypes.shape({
    setAllAuthors: PropTypes.func.isRequired,
    allAuthors: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default AddAuthor;
