import React from 'react';
import { Link } from 'gatsby';

interface Props {
  path: string;
  title: string;
  description: string;
  date: string;
  duration: string;
}

const PostLink: React.FC<Props> = ({
  path,
  title,
  date,
  description,
  duration,
}) => (
  <Link to={path}>
    <h5 className="text-2xl font-black text-pink-900">{title}</h5>
    <time className="text-sm text-pink-900">
      {date} - {duration}
    </time>
    <p className="">{description}</p>
  </Link>
);

export default PostLink;
