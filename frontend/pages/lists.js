import { PropTypes } from 'prop-types';
import HeadDetails from '../components/HeadDetails';
import Signin from '../components/SignIn';

export default function Lists({ user }) {
  return (
    <>
      <HeadDetails title="Your Lists" description="Making Nightlife Safer for Everyone" />
      <h1>Lists Page</h1>
      {user ? (
        <h1>Lists</h1>
      ) : (
        <Signin />
      )}
    </>
  );
}

Lists.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
};

Lists.defaultProps = {
  user: {},
};
