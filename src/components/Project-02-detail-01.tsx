export default function ProjectBSBZDetail01() {
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
          <span className="text-xl font-bold text-amber-300">시연 영상</span>
        </div>

        <div className="mt-12 flex flex-row gap-2 w-full justify-center items-center">
          <a href="https://www.youtube.com/watch?v=WQcnG25WcMw">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/WQcnG25WcMw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="shadow-2xl"
            ></iframe>
          </a>
        </div>
      </div>
    </div>
  );
}
