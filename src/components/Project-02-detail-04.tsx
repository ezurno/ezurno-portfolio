export default function ProjectBSBZDetail04() {
  return (
    <div className="bg-amber-500 text-amber-950 h-full w-full tracking-tighter gap-2 flex flex-row justify-between items-start">
      <div className="flex flex-col gap-2 justify-start items-start ml-6 pl-2 bg-white h-full xl:px-16 py-4 w-full">
        <h2 className="underline underline-offset-8 decoration-cyan-200 font-bold text-3xl">
          PROJECT #2.
        </h2>

        <div className="flex flex-row gap-2 items-center justify-center">
          <span className="font-bold">벌써부자</span>
          <span className="text-sm">- 조각투자 멀티 플랫폼 🐝 </span>
          <span className="text-sm">- 서비스 소개</span>
        </div>
        <div>
          <span className="text-xl text-amber-400 font-bold">구현</span>
        </div>

        <div className="mt-12 flex flex-row gap-2 w-full justify-between">
          <img
            src={`${import.meta.env.VITE_BASE_PATH}/bsbz/image-10.png`}
            className="w-72 shadow-2xl"
          />
          <img
            src={`${import.meta.env.VITE_BASE_PATH}/bsbz/image-11.png`}
            className="w-72 shadow-2xl"
          />
          <img
            src={`${import.meta.env.VITE_BASE_PATH}/bsbz/image-12.png`}
            className="w-72 shadow-2xl"
          />
        </div>

        <div className="mt-12 flex flex-row gap-2 w-full justify-between">
          <img
            src={`${import.meta.env.VITE_BASE_PATH}/bsbz/image-13.png`}
            className="w-72 shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
