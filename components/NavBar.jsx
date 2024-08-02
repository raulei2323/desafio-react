import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className='w-full min-h-max col-start-1 col-end-2 grid grid-cols-[60%_1fr]'>
      <div className='flex flex-row items-center gap-1 pl-2'>
        <button href='https://dev.to'>
          <img
            className='h-9 w-12 '
            src='https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png'
          />
        </button>
        <input
          className='w-full border-[1px] p-1 border-gray-400'
          type='text'
          placeholder='Search...'
        />
      </div>

      <div className='grid grid-cols-4 '>
        <Link
          href='/login'
          className='col-start-3 p-2 text-sky-600 cursor-pointer text-m hover:bg-pink-50 hover:underline hover:underline-offset-1'
        >
          Log In
        </Link>
        <Link
          href='/createAccount'
          className='col-start-4 p-0 m-1 text-sky-600 border-2 text-center border-sky-600 rounded-xl cursor-pointer hover:underline hover:bg-sky-600 hover:text-white'
        >
          Create account
        </Link>
      </div>
    </nav>
  );
}
