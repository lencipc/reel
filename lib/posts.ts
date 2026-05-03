export type Post = {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  createdAt: number;
};

let posts: Post[] = [];

export function addPost(post: Post) {
  posts.push(post);
}

export function getPost(id: string) {
  return posts.find(p => p.id === id);
}

export function getAllPosts() {
  return posts;
}