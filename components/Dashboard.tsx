'use client';

import { useEffect, useState } from 'react';
import PostCard from './PostCard';

export default function DashboardView() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(r => r.json())
      .then(setPosts);
  }, []);

  return (
    <div style={{ display: 'flex', gap: 20 }}>
      {posts.map((p: any) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}