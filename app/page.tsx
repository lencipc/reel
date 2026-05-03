import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Reels App</h1>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  );
}