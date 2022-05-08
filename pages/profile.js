import UserProfile from '../components/profile/user-profile';
import { getSession } from 'next-auth/client';

function ProfilePage() {
  return <UserProfile />;
}

export function getServerSideProps() {}

export default ProfilePage;
