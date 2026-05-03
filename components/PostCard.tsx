'use client';

import Link from 'next/link';

export default function PostCard({ post }: any) {
  return (
    <Link href={`/post/${post.id}`} className="card">
      <img src={post.thumbnail} className="img" />

      <div className="play">▶</div>

      <style jsx>{`
        .card {
          position: relative;
          width: 250px;
        }

        .img {
          width: 100%;
        }

        .play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0,0,0,0.6);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </Link>
  );
}