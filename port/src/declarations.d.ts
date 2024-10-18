declare module 'react-cursor-follow' {
    import React from 'react';
  
    interface CursorFollowProps {
      size?: number;
      color?: string;
      gap?: number;
      opacity?: number;
      easingDuration?: number;
    }
  
    const CursorFollow: React.FC<CursorFollowProps>;
  
    export default CursorFollow;
  }
  