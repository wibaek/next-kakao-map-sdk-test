import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: "",
    libraries: ["clusterer", "drawing", "services"],
  });

  // SDK 로딩 상태를 확인하기 위한 전역 이벤트 리스너
  if (typeof window !== "undefined") {
    window.addEventListener("load", () => {
      console.log("Window loaded, checking Kakao Maps SDK...");
      if (window.kakao && window.kakao.maps) {
        console.log("Kakao Maps SDK is available");
      } else {
        console.error("Kakao Maps SDK is not available");
      }
    });
  }
}
