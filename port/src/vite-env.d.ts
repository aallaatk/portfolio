/// <reference types="vite/client" />
declare module 'react-video-js-player' {
    const VideoPlayer: React.FC<{
      src: string;
      controls: boolean;
      width: string;
      height: string;
    }>;
    export default VideoPlayer;
  }
  