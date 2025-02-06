import React from "react";
import moment from "moment";

// HOC для преобразования даты
const withPrettyDate = (Component: React.FC<{ date: string }>) => {
  return (props: { date: string }) => {
    const now = moment();
    const dateMoment = moment(props.date);
    const diffMinutes = now.diff(dateMoment, "minutes");
    const diffHours = now.diff(dateMoment, "hours");
    const diffDays = now.diff(dateMoment, "days");

    let prettyDate;
    if (diffMinutes < 60) {
      prettyDate = `${diffMinutes} минут назад`;
    } else if (diffHours < 24) {
      prettyDate = `${diffHours} часов назад`;
    } else {
      prettyDate = `${diffDays} дней назад`;
    }

    return <Component date={prettyDate} />;
  };
};

export default withPrettyDate;
