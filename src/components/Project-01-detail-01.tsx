export default function ProjectTalkDetail01() {
  return (
    <div className="bg-violet-900 text-violet-950 h-full w-full tracking-tighter gap-2 flex flex-row justify-between items-start">
      <div className="flex flex-col bg-white gap-2 justify-start items-start ml-6 pl-2 h-full xl:px-16 py-4 w-full">
        <h2 className="underline underline-offset-8 decoration-yellow-500 font-bold text-3xl">
          PROJECT #1.
        </h2>

        <div className="flex flex-row gap-2 items-center justify-center">
          <span className="font-bold">96TALK</span>
          <span className="text-sm">- 양방향 통신 웹 메신저 서비스 📨</span>
          <span className="text-sm">- 서비스 소개 (1 / 4)</span>
        </div>
        <div>
          <span className="text-xl font-bold text-violet-400">
            로그인 및 사용자 정보 수정
          </span>
        </div>

        <div>회원 가입 및 로그인 후 프로필을 추가로 설정 할 수 있습니다.</div>

        <div className="mt-12 flex flex-row gap-2 w-full justify-between">
          <img
            src={`${import.meta.env.VITE_BASE_PATH}/talk/image-09.png`}
            className="w-72 shadow-2xl"
          />
          <img
            src={`${import.meta.env.VITE_BASE_PATH}/talk/image-01.png`}
            className="w-72 shadow-2xl"
          />
          <img
            src={`${import.meta.env.VITE_BASE_PATH}/talk/image-08.png`}
            className="w-72 shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
