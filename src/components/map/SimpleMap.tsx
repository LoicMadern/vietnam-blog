import React from "react";
import GoogleMapReact from "google-map-react";

interface Position {
  latitude: number;
  longitute: number;
}
const initialPosition: Position = {
  latitude: 14.0583,
  longitute: 108.2772,
};

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: initialPosition.latitude,
      lng: initialPosition.longitute,
    },
    zoom: 5,
  };

  let apiKey: string;
  if (process.env.REACT_APP_APIKEY_GGMAPS) {
    apiKey = process.env.REACT_APP_APIKEY_GGMAPS!;
  } else {
    throw new Error("apiKey environment variable is not set");
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "50vh", width: "50%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: apiKey,
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
}
