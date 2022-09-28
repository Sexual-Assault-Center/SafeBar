import { useState, useMemo } from 'react';
import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from '@react-google-maps/api';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function Map({ bars }) {
  const [libraries] = useState(['places']);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const mapPosition = {
    center: { lat: 35.8074465, lng: -86.2042552 },
    zoom: 7.3,
  };

  const setCenter = (lat, lng, zoom) => {
    mapPosition.center = {
      lat,
      lng,
    };
    mapPosition.zoom = zoom;
  };

  const handleActiveMarker = (markerUuid) => {
    if (markerUuid === activeMarker) {
      return;
    }
    if (markerUuid === null) {
      setCenter(35.8074465, -86.2042552, 7.3);
    } else {
      setActiveMarker(markerUuid);
    }
  };

  if (bars.length === 1) {
    setCenter(Number(bars[0].latitude), Number(bars[0].longitude), 15);
  } else if (activeMarker) {
    const markerBar = bars.find((bar) => bar.uuid === activeMarker);
    setCenter(Number(markerBar.latitude), Number(markerBar.longitude), 10);
  }

  const options = useMemo(
    () => ({
      mapId: '4d30dafbddd30916',
      disableDefaultUI: true,
      zoomControl: true,
      streetViewControl: true,
      clickableIcons: false,
      keyboardShortcuts: false,
      gestureHandling: 'greedy',
    }),
    [],
  );

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div
      style={{
        height: '20rem',
      }}
      className="align-items-center m-3"
    >
      <GoogleMap
        zoom={mapPosition.zoom}
        center={mapPosition.center}
        mapContainerClassName="h-100"
        options={options}
        onClick={() => setActiveMarker(null)}
      >
        {bars.map((bar) => (
          <Marker
            key={bar.uuid}
            position={{ lat: Number(bar.latitude), lng: Number(bar.longitude) }}
            onClick={() => handleActiveMarker(bar.uuid)}
            title={bar.name}
          >
            {activeMarker === bar.uuid ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>
                  Name: {bar.name}
                  <br />
                  <Link href={`/bar/${bar.uuid}`}>Details</Link>
                </div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
    </div>
  );
}

Map.defaultProps = {
  bars: [],
};
Map.propTypes = {
  bars: PropTypes.arrayOf(
    PropTypes.shape([
      {
        name: PropTypes.string,
        street_address: PropTypes.string,
        phone_number: PropTypes.number,
        city: PropTypes.string,
        website: PropTypes.string,
        description: PropTypes.string,
        latitude: PropTypes.string,
        longitude: PropTypes.string,
      },
    ]),
  ),
};
