function ProfileForm() {
  return (
    <form className='flex flex-col justify-center items-center space-y-4'>
      <div>
        <input
          type='password'
          className='border rounded px-4 py-2'
          id='new-password'
          placeholder='New password'
        />
      </div>
      <div>
        <input
          type='password'
          className='border rounded px-4 py-2'
          id='old-password'
          placeholder='Old password'
        />
      </div>
      <div>
        <button className='bg-black px-4 py-2 border border-black rounded text-white hover:text-black hover:bg-white transition'>
          Change Password
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;
