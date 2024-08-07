import { useForm } from 'react-hook-form';
import { createAccount } from '@/pages/api/api';
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
      await createAccount({
        profilePicture: data.profilePicture,
        firstName: data.firstName,
        email: data.email,
        password: data.password
      });
      toast.success('Logged in');
      console.log('User created');
      router.push('/loginnew');
      return;
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

      <p className='p-3 w-1/3 flex flex-row items-start'>
        Profile Picture<span className='text-red-700'>*</span>
      </p>
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
      {errors.profilePicture && (
        <span className='text-red-700'>
          Picture for your profile is required
        </span>
      )}
      <p className='p-5 w-1/3 flex flex-row items-start'>
        Name<span className='text-red-500'>*</span>
      </p>
      <input
        type='text'
        placeholder='Enter your name'
        className='w-1/3 border-[1px] border-gray-400 rounded-md cursor-text '
        {...register('firstName', {
          required: {
            value: true,
            message: 'Nombre requerido'
          }
        })}
      />
      {errors.firstName && <span className='text-red-700'>Name required</span>}
      <p className='p-5 w-1/3 flex flex-col items-start'>Last Name</p>
      <input
        type='text'
        placeholder='Enter your Last Name'
        className='w-1/3 border-[1px] border-gray-400 rounded-md cursor-text '
        {...register('lastName')}
      />
      <p className='p-5 w-1/3 flex flex-col items-start'>Birth Date</p>
      <input type='date' {...register('birthDate')} />

      <p className='p-5 w-1/3 flex flex-row items-start'>
        Email<span className='text-red-500'>*</span>
      </p>
      <input
        className='w-1/3 border-[1px] border-gray-400 rounded-md cursor-text '
        type='text'
        {...register('email', {
          required: { value: true, message: 'Email requerido' }
        })}
      />
      {errors.email && <span className='text-red-700'>Email required</span>}
      <p className='p-5 w-1/3 flex flex-row items-start'>
        Password<span className='text-red-500'>*</span>
      </p>
      <input
        className='w-1/3 border-[1px] border-gray-400 rounded-md cursor-text '
        type='password'
        {...register('password', {
          required: {
            value: true,
            message: 'Contrasena requerida'
          },
          minLength: {
            value: 6
          }
        })}
      />
      {errors.password && (
        <span className='text-red-700'>Password is required</span>
      )}
      {errors.password && (
        <span className='text-red-700'>Password minlenght 6 characters</span>
      )}
      <p className='p-5 w-1/3 flex flex-row items-start'>
        Confirm password<span className='text-red-500'>*</span>
      </p>
      <input
        className='w-1/3 border-[1px] border-gray-400 rounded-md cursor-text '
        type='password'
        {...register('confirmPassword', {
          required: {
            value: true,
            message: 'Contrasena requerida'
          },
          minLength: {
            value: 6
          }
        })}
      />
      {errors.password && (
        <span className='text-red-700'>Password confirmation is required</span>
      )}
      {errors.password && (
        <span className='text-red-700'>Password minlenght 6 characters</span>
      )}
      {errors.passwordConfirm && (
        <span className='text-red-700'>Not matching</span>
      )}
      <button className='h-10 m-4 w-1/3 bg-sky-600 text-white text-lg '>
        Create Account
      </button>
      {errors.root?.credentials && (
        <p className='text-red-500 text-center'>
          Invalid data, fill all required camps
        </p>
      )}
      <Toaster />
    </form>
  );
}
