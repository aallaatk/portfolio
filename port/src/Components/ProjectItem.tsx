import React, { useState, useRef } from 'react';

interface ProjectItemProps {
  video: string;
  img: string;
  title: string;
  domain: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ video, img, title, domain }) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleToggleVideo = () => {
    setShowVideo(!showVideo);
    if (!showVideo && videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="project-item">
      {showVideo ? (
        <video
          ref={videoRef}
          src={video}
          controls
          width="100%"
          height="100%"
        />
      ) : (
        <img src={img} alt={title} className="img-fluid" />
      )}

      <div className="overlay d-flex flex-column justify-content-center align-items-center">
        <h5 className="h3">{title}</h5>
        <p>{domain}</p>
        {!showVideo && (
          <button onClick={handleToggleVideo}>View</button>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;