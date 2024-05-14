import React from 'react';

function LoadVideo({ video_link }) {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div>
        <div className="embed-responsive embed-responsive-16by9">
          <video
            controls
            className="embed-responsive-item"
            src={video_link}
            title="Embedded Video"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default LoadVideo;
