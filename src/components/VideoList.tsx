import React from "react";
import Video from "./Video";

interface VideoItem {
  url: string;
  date: string;
}

interface VideoListProps {
  list: VideoItem[];
}

const VideoList: React.FC<VideoListProps> = ({ list }) => {
  return (
    <>
      {list.map((item, index) => (
        <Video key={index} url={item.url} date={item.date} />
      ))}
    </>
  );
};

export default VideoList;
