import { NextResponse } from 'next/server';
import { addPost } from '@/lib/posts';

export async function POST(req: Request) {
  const body = await req.json();

  const post = {
    id: crypto.randomUUID(),
    title: body.title,
    description: body.description,
    videoUrl: body.videoUrl,
    thumbnail: body.thumbnail,
    createdAt: Date.now(),
  };

  addPost(post);

  return NextResponse.json(post);
}