import { useForm } from 'react-hook-form';
import { login } from '@/api';
import { toast, Toaster } from 'sonner';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError
  } = useForm();

  async function onSubmit(data) {
    try {
      const token = await login(data.email, data.password);
      if (token) {
        window.localStorage.setItem("token", token);
        toast.success('Logged in');
        router.push("/")
        return
      } else {
        toast.error('Usuario o contrasena incorrectos');
        setError('root.credentials', {
          type: 'manual',
          message: 'Credenciales invalidas'
        });
      }
    } catch (error) {
      toast.error('Error al iniciar sesion');
      console.error('[login error]', error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='p-9 flex flex-col items-center '
    >
      <p className='p-5 w-1/3  flex flex-col items-center font-bold text-3xl'>
        Join the DEV Community
      </p>
      <p className='p-5 w-1/3 flex flex-col items-start'>
        DEV community is a community of 1,710,931 amazing developers
      </p>
      <p className='p-5 w-1/3 flex flex-col items-start'>Email</p>
      <input
        className='w-1/3 border-[1px] border-gray-400 rounded-md cursor-text '
        type='text'
        {...register('email', {
          required: { value: true, message: 'Nombre de usuario requerido' }
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
        Log In
      </button>
      {errors.root?.credentials && (
        <p className='text-red-500 text-center'>Credenciales Invalidas</p>
      )}
      <Toaster />
    </form>
  );
}
