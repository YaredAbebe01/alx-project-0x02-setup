import React from "react";
import Header from "../components/layout/Header";

export default function Posts() {
  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Posts Page</h1>
        <p className="mt-4">This is the posts page. All posts will appear here.</p>
      </div>
    </div>
  );
}
