import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      // 기타 라우트 설정
    </Routes>
  );
}
