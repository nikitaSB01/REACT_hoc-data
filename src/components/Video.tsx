import React from "react";
import DateTime from "./DateTime";
import withPrettyDate from "./DateTimePretty";

interface VideoProps {
  url: string;
  date: string;
}

// Оборачиваем DateTime в HOC, чтобы преобразовать дату
const DateTimePretty = withPrettyDate(DateTime);

const Video: React.FC<VideoProps> = ({ url, date }) => {
  return (
    <div className="video">
      <iframe
        src={url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTimePretty date={date} />
    </div>
  );
};

export default Video;
