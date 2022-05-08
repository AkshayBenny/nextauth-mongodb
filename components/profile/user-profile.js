import ProfileForm from './profile-form';
import { useState, useEffect } from 'react';
import { useSession, getSession } from 'next-auth/client';

function UserProfile() {
  const [isLoading, setIsLoading] = useState(true);
  // const [loadedSession, setLoadedSession] = useState();

  useEffect(() => {
    getSession().then((session) => {
      // setLoadedSession(session);

      if (!session) {
        window.location.href = '/auth';
      } else {
        setIsLoading(false);
      }
    });
  }, []);
  // Redirect away if NOT auth

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <section>
      <h1 className='text-center text-3xl font-light pt-12'>
        Your User Profile
      </h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
