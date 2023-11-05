import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";
const PostedDate = ({ date }) => {
  const postDate = parseISO(date);
  const timePeriod = formatDistanceToNow(postDate);
  return <div>{`${timePeriod } `} ago </div>;
};

export default PostedDate;
