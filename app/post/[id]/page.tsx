import { getPost } from '@/lib/posts';

export default function PostPage({ params }: any) {
  const post = getPost(params.id);

  if (!post) return <div>Not found</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <video src={post.videoUrl} controls width="400" />
    </div>
  );
}