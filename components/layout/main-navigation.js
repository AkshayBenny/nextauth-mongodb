import Link from 'next/link';
import { useSession, signOut } from 'next-auth/client';

function MainNavigation() {
  const [session, loading] = useSession();

  const logoutHandler = () => {
    signOut();
  };

  return (
    <header className='flex items-center border'>
      <Link href='/'>
        <a>
          <div className='text-2xl'>Next Auth</div>
        </a>
      </Link>
      <nav className='mx-auto'>
        <ul className='flex items-center justify-center gap-4 px-4 py-2'>
          {!session && !loading && (
            <li>
              <Link href='/auth'>Login</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href='/profile'>Profile</Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
