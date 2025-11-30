import React from "react";
import { PostProps } from "../../interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, body }) => {
  return (
    <div className="border shadow rounded p-4 mb-4 bg-white">
      <h2 className="text-lg font-bold mb-1">{title}</h2>
      <p className="text-gray-700 mb-2">{body}</p>
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
};

export default PostCard;
