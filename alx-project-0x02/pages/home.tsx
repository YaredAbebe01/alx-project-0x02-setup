import { useState } from "react";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";
import Header from "../components/layout/Header";

export default function HomePage() {
  const [posts, setPosts] = useState([
    { title: "Card One", content: "This is the first card component." },
    { title: "Card Two", content: "This is the second card with different content." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNewPost = (data: { title: string; content: string }) => {
    setPosts([...posts, data]);
  };

  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Home Page</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 px-4 py-2 bg-green-600 text-white rounded"
        >
          + Add New Post
        </button>

        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={addNewPost}
        />
      </div>
    </div>
  );
}
