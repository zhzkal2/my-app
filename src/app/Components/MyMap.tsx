'use client';

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px    ",
};




const center = {
  lat: 37.5665, // 서울 위도
  lng: 126.978, // 서울 경도
};

export default function MyMap() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap mapContainerStyle={containerStyle} 
      center={center}
       zoom={15}
       mapTypeId="roadmap"

       options={{
        disableDefaultUI: true, // 기본 지도 컨트롤 비활성화
        zoomControl: true, // 확대/축소 컨트롤 활성화
        mapTypeControl: false, // 지도 유형 컨트롤 비활성화
        streetViewControl: false, // 스트리트 뷰 컨트롤 비활성화
        rotateControl: false, // 회전 컨트롤 비활성화
      }}
       
       >
        
        <Marker position={center}  />
      </GoogleMap>
    </LoadScript>
  );
}