import Head from 'next/head';
import PropTypes from 'prop-types';

export default function HeadDetails({ title, description }) {
  return (
    <Head>
      <title>{`${title} | Safe Bar App`}</title>
      <meta name="description" content={description} />
    </Head>
  );
}

HeadDetails.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

HeadDetails.defaultProps = {
  title: 'Safe Bar App',
  description: 'Making Nightlife Safer for Everyone',
};
