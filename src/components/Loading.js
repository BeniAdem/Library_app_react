import React from "react";

const Loading = (props) => {
  return (
    <div
      className="spinner-border text-primary container d-flex justify-content-center my-5"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
export default Loading;
