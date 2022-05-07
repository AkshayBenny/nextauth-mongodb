import { useState } from 'react';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  return (
    <section>
      <h1 className='text-2xl pt-12 text-center'>
        {isLogin ? 'Login' : 'Sign Up'}
      </h1>
      <div className='flex justify-center items-center'>
        <form className='border space-y-4 rounded px-12 py-6'>
          <div className='flex flex-col'>
            <input
              className='border rounded px-4 py-2'
              placeholder='Email'
              type='email'
              id='email'
              required
            />
          </div>
          <div className='flex flex-col'>
            <input
              className='border rounded px-4 py-2'
              placeholder='Password'
              type='password'
              id='password'
              required
            />
          </div>
          <div className='flex flex-col'>
            <button className='bg-black px-4 py-2 border border-black rounded text-white hover:text-black hover:bg-white transition'>
              {isLogin ? 'Login' : 'Create Account'}
            </button>
            <button
              type='button'
              className='bg-white mt-2 px-4 py-2 border border-black rounded text-black hover:text-white hover:bg-black transition'
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AuthForm;
