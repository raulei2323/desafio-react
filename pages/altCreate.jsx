import { useForm } from 'react-hook-form';
import { createAccount } from '@/api';
import { toast, Toaster } from 'sonner';
import { useRouter } from 'next/router';

export default function CreateAccount() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError
  } = useForm();

  async function onSubmit(data) {
    try {
        const newAccount = await createAccount(data.profilePicture, data.firstName, data.email, data.password)
      if (newAccount ) {
        toast.success('Account created ');
        router.push('/');
        return;
      } else {
        toast.error('Invalid data');
        setError('root.credentials', {
          type: 'manual',
          message: 'Invalid data'
        });
      }
    } catch (error) {
      toast.error('Error al crear cuenta');
      console.error('[createAccount error]', error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='p-9 flex flex-col items-center '
    >
      <p className='p-5 w-1/3  flex flex-col items-center font-bold text-3xl'>
        Join de DEV Community
      </p>
      <p className='p-5 w-1/3 flex flex-col items-start '>
        DEV community is a community of 1,710,931 amazing developers
      </p>
      <p>Create account!!!</p>

      <p className='p-3 w-1/3 flex flex-col items-start'>Profile Picture</p>
      <p className='p-0 w-1/3 flex flex-col items-start text-xs'>
        Link to your profile picture, family friendly please or will be banned
      </p>
      <input
        type='text'
        placeholder='Enter image url'
        className='w-1/3 border-[1px] border-gray-400 rounded-md cursor-text '
        {...register('profilePicture', {
          required: {
            value: true,
            message: 'Link de imagen requerido'
          }
        })}
      />
      <p className='p-5 w-1/3 flex flex-col items-start'>Name</p>
      <input type='text' placeholder='Enter your name'
      className='w-1/3 border-[1px] border-gray-400 rounded-md cursor-text '
      {...register('firstName', {
        required: {
          value: true,
          message: 'Nombre requerido'
        }
      })} />
      <p className='p-5 w-1/3 flex flex-col items-start'>Email</p>
      <input
        className='w-1/3 border-[1px] border-gray-400 rounded-md cursor-text '
        type='text'
        {...register('email', {
          required: { value: true, message: 'Email requerido' }
        })}
      />
      <p className='p-5 w-1/3 flex flex-col items-start'>Password</p>
      <input
        className='w-1/3 border-[1px] border-gray-400 rounded-md cursor-text '
        type='password'
        {...register('password', {
          required: {
            value: true,
            message: 'Contrasena requerida'
          }
        })}
      />
      <button className='h-10 m-4 w-1/3 bg-sky-600 text-white text-lg '>
        Create Account
      </button>
      {errors.root?.credentials && (
        <p className='text-red-500 text-center'>Invalid data, fill all required camps</p>
      )}
      <Toaster />
    </form>
  );
}