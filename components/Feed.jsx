import { getPosts } from '@/api';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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
        <article key={`post-${idx}`} className='p-10'>
          <Link href={"/post"}>
          <img src={posts.thumbnail} className='border-[1px] border-blue-700 rounded-full w-10 h-10'  />
          <p>{posts.user.firstName}</p>
          <p className='text-2xl font-bold'>
          {posts.title}
          </p>
          <p className='text-sm text-gray-600'>{posts.hashtags}</p>
          </Link>

        </article>);
      })}
    </section>
  );
}
