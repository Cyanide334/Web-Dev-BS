import React from "react";

const TagList = ({tags}) => {
  return (
    <div>
      {tags.map((element) => <a href="/" className="me-2">{element}</a>)}
    </div>
  );
};

export default TagList;
