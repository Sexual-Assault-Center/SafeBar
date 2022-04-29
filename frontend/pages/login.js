import { PropTypes } from 'prop-types';
import HeadDetails from '../components/HeadDetails';
import Signin from '../components/SignIn';

export default function Login({ user }) {
  return (
    <>
      <HeadDetails title="Your Lists" description="Making Nightlife Safer for Everyone" />
      <h1>Lists Page</h1>
      {Object.keys(user).length ? (
        <h1>Lists</h1>
      ) : (
        <Signin />
      )}
    </>
  );
}

Login.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
};

Login.defaultProps = {
  user: {},
};
