import HeadDetails from '../components/HeadDetails';
import Signin from '../components/SignIn';
import { useAuth } from '../utils/context/authContext';

export default function Lists() {
  const { user } = useAuth();

  return (
    <>
      <HeadDetails
        title="Your Saved Bars"
        description="Making Nightlife Safer for Everyone"
      />
      {Object.keys(user).length ? (
        <h1 className="text-center">SAVED</h1>
      ) : (
        <>
          <Signin title="TO SEE YOUR SAVED BARS" />
        </>
      )}
    </>
  );
}
