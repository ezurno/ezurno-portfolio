export default function ProjectTalkDetail02() {
  return (
    <div className="bg-violet-900 text-violet-950 h-full w-full tracking-tighter gap-2 flex flex-row justify-between items-start">
      <div className="flex flex-col gap-2 bg-white justify-start items-start  ml-6 pl-2 xl:px-16 h-full py-4 w-full">
        <h2 className="underline underline-offset-8 decoration-yellow-500 font-bold text-3xl">
          PROJECT #1.
        </h2>

        <div className="flex flex-row gap-2 items-center justify-center">
          <span className="font-bold">96TALK</span>
          <span className="text-sm">- 양방향 통신 웹 메신저 서비스 📨</span>
          <span className="text-sm">- 서비스 소개 (2 / 4)</span>
        </div>
        <div>
          <span className="text-xl text-violet-400 font-bold">
            사용자 조회 및 친구 추가
          </span>
        </div>

        <div>
          사용자 검색 기능을 통해 특정 아이디와 일치하는 아이디를 찾아 친구
          추가를 할 수 있습니다.
        </div>

        <div className="mt-12 flex flex-row gap-2 w-full justify-between">
          <img
            src={`${import.meta.env.VITE_BASE_PATH}/talk/image-10.png`}
            className="w-72 shadow-2xl"
          />
          <img
            src={`${import.meta.env.VITE_BASE_PATH}/talk/image-04.png`}
            className="w-72 shadow-2xl"
          />
          <img
            src={`${import.meta.env.VITE_BASE_PATH}/talk/image-02.png`}
            className="w-72 shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
