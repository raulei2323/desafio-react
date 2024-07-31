import { getPosts } from '@/api';
import { useEffect, useState } from 'react';

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((feedPosts) => {
        setPosts(feedPosts);
      })
      .catch((error) => {
        toast.error('Error al obtener los Posts');
        console.error('[getPosts error]', error);
      });
  }, []);

  return (
    <section>
      {posts.map((posts, idx) => {
        return (
        <article key={`post-${idx}`}>
          <p>
          {posts.content}
          </p>

        </article>);
      })}
    </section>
  );
}
