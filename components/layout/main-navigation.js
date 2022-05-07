import Link from 'next/link';

function MainNavigation() {
  return (
    <header className='flex items-center border'>
      <Link href='/'>
        <a>
          <div className='text-2xl'>Next Auth</div>
        </a>
      </Link>
      <nav className='mx-auto'>
        <ul className='flex items-center justify-center gap-4 px-4 py-2'>
          <li>
            <Link href='/auth'>Login</Link>
          </li>
          <li>
            <Link href='/profile'>Profile</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
