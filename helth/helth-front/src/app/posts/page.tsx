// pages/posts.tsx
'use client';

import { useEffect, useState } from 'react';
import { fetchPosts } from '../../apis/postService';
import { useRouter } from 'next/navigation';
import React from 'react';

const PostsPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          게시글 목록
        </h1>
        <ul>
          {posts.map((post) => (
            <li
              key={post.id}
              className="p-4 border-b cursor-pointer hover:bg-gray-100 transition"
              onClick={() => router.push(`/posts/${post.id}`)}
            >
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostsPage;
