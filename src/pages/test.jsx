// src/pages/test.jsx
import { Link } from "react-router-dom";

export default function Test() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">InterTicket 프로젝트</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        이 페이지는 프로젝트 메인 홈입니다.
        지금 할인 중인 공연을 확인하려면 아래 버튼을 눌러주세요!
      </p>
      <Link
        to="/discount"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
      >
        할인 공연 보러가기 →
      </Link>
    </div>
  );
}
