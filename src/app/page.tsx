"use client";

import { Map, MapMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "@/hooks/useKakaoLoader";
import { useEffect } from "react";

export default function Home() {
  useKakaoLoader();

  useEffect(() => {
    console.log("Map component mounted");
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Map
        center={{ lat: 37.566826, lng: 126.978656 }} // 서울시청 좌표
        style={{ width: "100%", height: "100%" }}
        level={3} // 지도의 확대 레벨
        onCreate={(map) => {
          console.log("Map created:", map);
        }}
      >
        <MapMarker position={{ lat: 37.566826, lng: 126.978656 }} />
      </Map>
    </div>
  );
}
