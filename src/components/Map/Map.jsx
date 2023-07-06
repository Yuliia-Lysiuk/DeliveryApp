import { FaLocationArrow, FaTimes } from 'react-icons/fa';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';
import {
  BoxMap,
  BoxDistance,
  Origin,
  BoxCalculate,
  BoxButton,
  BoxInput,
} from './Map.styled';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import shops from 'data_base/shops_list';

const center = { lat: 49.233382566375624, lng: 28.456147917712542 };

export default function Map({ setAddress }) {
  const shop = useSelector(state => state.shop.value);
  const choosenShop = shops.find(({ name }) => shop === name);

  const [map, setMap] = useState(/** @type google.maps.Map */ null);
  const [errorMessage, setErrorMessage] = useState('');
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const destiantionRef = useRef();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  async function calculateRoute() {
    if (destiantionRef.current.value === '') {
      setErrorMessage('gfjfgjh');
      return;
    }

    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: choosenShop.street,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);

    setErrorMessage('');
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    setErrorMessage('');
    destiantionRef.current.value = '';
    setAddress();
  }

  if (!isLoaded) {
    return <h1>payload</h1>;
  }

  return (
    <BoxMap>
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{
          width: '100%',
          height: '90%',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          marginBottom: '10px',
        }}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
        }}
        onLoad={map => setMap(map)}
      >
        <Marker position={center} />
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>

      <BoxDistance>
        <Origin>Adress: {choosenShop.street}</Origin>
        <Origin>Distance: {distance}</Origin>
        <Origin>Duration: {duration}</Origin>
      </BoxDistance>
      <BoxCalculate>
        <Autocomplete
          onPlaceChanged={() => setAddress(destiantionRef.current.value)}
        >
          <BoxInput>
            <Input
              type="address"
              label="Address *"
              inputRef={destiantionRef}
              helperText={errorMessage}
            />
          </BoxInput>
        </Autocomplete>
        <FaTimes onClick={clearRoute} />
        <BoxButton>
          <FaLocationArrow
            onClick={() => {
              map.panTo(center);
            }}
          />
          <Button type="submit" text="See the way" onClick={calculateRoute} />
        </BoxButton>
      </BoxCalculate>
    </BoxMap>
  );
}
