import React from "react";

const StreamableVideo = ({ src }) => {
  return (
    <div className="flex justify-center mt-7">
      <div style={{ position: "relative", width: "50%", paddingTop: "25%" }}>
        <iframe
          allow="fullscreen;autoplay"
          height="100%"
          src={src}
          style={{
            border: "none",
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            overflow: "hidden",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default StreamableVideo;
