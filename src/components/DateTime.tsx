import React from "react";

interface DateTimeProps {
  date: string;
}

const DateTime: React.FC<DateTimeProps> = ({ date }) => {
  return <p className="date">{date}</p>;
};

export default DateTime;
