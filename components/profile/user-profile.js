import ProfileForm from './profile-form';

function UserProfile() {
  // Redirect away if NOT auth

  return (
    <section>
      <h1 className='text-center text-3xl font-light pt-12'>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
