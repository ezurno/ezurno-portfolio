export default function ProjectBSBZDetail02() {
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
          <span className="text-xl text-amber-400 font-bold">기획</span>
        </div>

        <div className="mt-6">
          <ul>
            <li>
              투자의 세계에 첫발을 디디고 싶지만 자본이 부족할 때 조각투자를
              통해 소액으로도 큰 시장에 참여할 수 있는 서비스
            </li>
            <li>
              학생에게도 단 몇 천 원으로도 시작할 수 있는 조각투자는 예비
              투자자에게 시장의 다양성을 경험하고 자산을 성장시킬 수 있는 기회를
              제공
            </li>
            <li>
              시계열 분석, 텍스트마이닝, word-cloud 를 통해 가격 예측, 대중의
              심리 등 투자상품에 대한 다양한 AI 서비스를 제공
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-row gap-2 w-full justify-between">
          <img
            src={`${import.meta.env.VITE_BASE_PATH}/bsbz/image-01.png`}
            className="w-72 shadow-2xl"
          />
          <img
            src={`${import.meta.env.VITE_BASE_PATH}/bsbz/image-02.png`}
            className="w-72 shadow-2xl"
          />
          <img
            src={`${import.meta.env.VITE_BASE_PATH}/bsbz/image-03.png`}
            className="w-72 shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
