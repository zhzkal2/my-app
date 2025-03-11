'use client';

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "16.75rem",
};




const center = {
  lat: 35.66680824442341,
  lng: 139.7421143576228,
};

interface MyMapProps extends React.HTMLProps<HTMLDivElement> { }

export default function MyMap(props: MyMapProps) {
  return (
    <div {...props}>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        language="ja"
      >
        <GoogleMap mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
          mapTypeId="roadmap"

          options={{
            disableDefaultUI: true,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            rotateControl: false,
          }}

        >

          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}