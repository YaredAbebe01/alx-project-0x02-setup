import React, { useState } from "react";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; content: string }) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Add New Post</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="w-full border p-2 mb-3 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Content"
            className="w-full border p-2 mb-3 rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
