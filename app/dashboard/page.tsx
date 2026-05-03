'use client';

import { useState } from 'react';
import DashboardView from '@/components/Dashboard';

export default function Dashboard() {
  const [title, setTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  async function upload() {
    await fetch('/api/upload', {
      method: 'POST',
      body: JSON.stringify({
        title,
        description: '',
        videoUrl,
        thumbnail,
      }),
    });

    location.reload();
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <input placeholder="Video URL" onChange={e => setVideoUrl(e.target.value)} />
      <input placeholder="Thumbnail" onChange={e => setThumbnail(e.target.value)} />

      <button onClick={upload}>Upload</button>

      <DashboardView />
    </div>
  );
}