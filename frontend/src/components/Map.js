import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GEOCODING_API_KEY);
const containerStyle = {
  width: "400px",
  // '@media(minWidth:480px)': { 
  //   width: '700px'
  // },
  height: "400px",
  margin: "10px",
};

function Maps(props) {
  const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 });
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    // ...otherOptions
  });
  const [zoom, setZoom] = useState(4);

  useEffect(() => {
    const getPosition = () => {
      //default country is Japan. when world is selected, zoom down
      let countryName = "Japan";
      if (props.location === "World") setZoom(1);
      else {
        countryName = props.location;
        setZoom(4);
      }
      Geocode.fromAddress(countryName).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setCenter((previousState) => {
            return { lat: lat, lng: lng };
          });
        },
        (error) => {
          console.error(error);
        }
      );
    };
    getPosition();
  }, [props]);

  const GMap = () => {
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      />
    );
  };

  if (!isLoaded) return <div>Loading...</div>;
  return GMap();
}



export default Maps;
