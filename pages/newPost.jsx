import { createPost } from './api/api';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'sonner';
import { useRouter } from 'next/router';

export default function CreatePost() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError
  } = useForm();

  async function onSubmit(data) {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        window.localStorage.setItem("token", token)
        await createPost({
          title: data.title,
          hashtags: data.hashtags,
          content: data.content
        });
        toast.success('Posted');
        console.log('Posted');
        router.push('/');
        return;
      } else {
        toast.error('You need to log in');
        setError('root.credentials', {
          type: 'manual',
          message: 'Invalid Credentials'
        });
      }
    } catch (error) {
      toast.error('Error al crear post');
      console.error('[createPost error]', error);
    }
  }
  return (
    <form
      className=' grid grid-cols-4 h-screen'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='h-screen p-10 grid col-start-1 col-end-3 grid-row grid-rows-12'>
        <input
          type='text'
          placeholder='New post title here...'
          className='p-10 grid row-start-1 row-end-5 text-5xl font-extrabold font-serif'
          {...register('title', {
            required: {
              value: true,
              message: 'add a title'
            },
            minLength: 10
          })}
        />
        <input
          type='text'
          placeholder='tags'
          className=' pl-10 grid row-start-6 row-end-6'
          {...register('hashtags', {
            required: {
              value: true,
              message: 'add some hashtags'
            },
            minLength: 3
          })}
        />
        <input
          type='text'
          placeholder='Write your post content here'
          className=' p-10 grid row-start-8 row-end-10 font-bold font-serif'
          {...register('content', {
            required: {
              value: true,
              message: 'add content'
            },
            minLength: 10
          })}
        />
        <button className='w-1/4 grid row-start-11 row-end-12 text-center bg-sky-600 text-white text-lg '>
          Publish
        </button>
      </div>
      <ul className='grid col-start-4 col-end-4 grid-row items-end h-1/2'>
        <li>Writing a Great Post Title</li>
        <li>
          Think of your post title as a super short (but compelling!)
          description — like an overview of the actual post in one short
          sentence.
        </li>
        <li>
          Use keywords where appropriate to help ensure people can find your
          post by search.
        </li>
      </ul>
      <Toaster />
    </form>
  );
}
