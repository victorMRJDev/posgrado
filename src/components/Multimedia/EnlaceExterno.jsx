import React from "react";

const EnlaceExterno = ({ url, texto }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-800 text-base"
    >
      {texto}
    </a>
  );
};

export default EnlaceExterno;
