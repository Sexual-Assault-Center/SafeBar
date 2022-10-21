import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import HeadDetails from '../../components/HeadDetails';
import BarDetails from '../../components/BarDetails';
import Map from '../../components/Map';
import { getRequest } from '../../utils/api';

function Bar({ id }) {
  const [bar, setBar] = useState([]);

  useEffect(() => {
    getRequest(`bars/${id}`).then(setBar);
  }, [id]);

  return (
    <>
      <HeadDetails
        title="Bar Details"
        description="Making Nightlife Safer for Everyone"
      />
      <h1>Bar Details - {bar.name}</h1>
      <Map bars={[bar]} />
      <BarDetails bar={bar} />;
    </>
  );
}

Bar.getInitialProps = async (ctx) => ({ id: ctx.query.id });

export default Bar;

Bar.propTypes = {
  id: PropTypes.string,
};

Bar.defaultProps = {
  id: '',
};
