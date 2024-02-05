import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Info() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="h-full w-full tracking-tighter px-8 py-2 xl:px-24 gap-2 flex flex-col justify-start items-start"
    >
      <h2 className="underline underline-offset-8 decoration-yellow-500 font-bold text-3xl">
        ABOUT ME #1
      </h2>
      <div className="w-full h-full flex flex-col xl:flex-row justify-between items-start pt-6">
        <div className="flex flex-row xl:flex-col justify-center items-center">
          <div className="bg-gray-500 border-4 border-gray-900 h-48 w-36 xl:h-60 xl:w-48 bg-profile-image object-cover bg-cover rounded-3xl" />
          <div className="p-4">
            <h2 className="font-bold text-3xl mb-4 text-center">이 준 모</h2>
            <h2 className="text-base pl-4 text-slate-300"> - 1997.07.22</h2>
            <h2 className="text-base pl-4 text-slate-300">
              - 서일대학교 컴퓨터전자공학 학사
            </h2>
            <h2 className="text-base pl-4 text-slate-300">
              - 서울 강동구 상일동
            </h2>
            <h2 className="text-base pl-4 text-slate-300"> - INTP</h2>
          </div>
        </div>

        <div className="w-full xl:w-2/3">
          <div>
            <h2 className="font-bold xl:text-2xl text-yellow-500 mb-2">
              "소통과 꾸준함으로 성장하는 개발자입니다."
            </h2>
            <p className="xl:text-lg text-base">
              또한 친화력을 바탕으로 팀원들의 의견을 존중하고
            </p>
            <p className="xl:text-lg text-base">
              구성원들과의 생산성을 증대시키고 기여하는데에 관심이 많습니다.
            </p>
          </div>

          <div className="hidden xl:flex flex-row gap-2 mt-2">
            <div className="bg-white flex flex-col w-1/3 h-40 pt-2 px-2 p-0">
              <div className="bg-black w-full h-full bg-github-image object-cover bg-center bg-no-repeat bg-contain" />
              <p className="text-black my-2 text-xs">@2023년도_GitHub_잔디</p>
            </div>

            <div className="bg-white flex flex-col w-1/3 h-40 pt-2 px-2 p-0">
              <div className="bg-black w-full h-full bg-christ-image object-cover bg-cover" />
              <p className="text-black my-2 text-xs">@연말_KB_4기_송년회</p>
            </div>

            <div className="bg-white flex flex-col w-1/3 h-40 pt-2 px-2 p-0">
              <div className="bg-black w-full h-full bg-alg-image object-cover bg-cover" />
              <p className="text-black my-2 text-xs">
                @알고리즘_스터디_팀원들과
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-start mt-2 xl:mt-8">
            <span className="bg-yellow-500 size-fit px-4 py-1 rounded-full">
              <h2 className="font-bold text-base xl:text-base">S K I L L S</h2>
            </span>
            <div className="flex flex-col">
              <div className="ml-12 mt-2 flex flex-row">
                <div className="border-l-2 p-4 min-w-28 border-yellow-500">
                  <p>Frontend</p>
                </div>
                <div className="p-4 flex flex-row flex-wrap gap-2 xl:text-sm text-xs">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "NextJS",
                    "HTML5",
                    "CSS",
                    "BootStrap",
                    "Sass",
                    "Tailwind",
                    "Vite",
                  ].map((value, index) => (
                    <p
                      key={index}
                      className="px-2 py-1 border border-yellow-500 rounded-full"
                    >
                      {value}
                    </p>
                  ))}
                </div>
              </div>
              <div className="ml-12 mt-2 flex flex-row">
                <div className="border-l-2 p-4 min-w-28 border-yellow-500">
                  <p>Backend</p>
                </div>
                <div className="p-4 flex flex-row gap-1 xl:text-sm text-xs ">
                  {["JAVA", "Spring", "Oracle"].map((value, index) => (
                    <p
                      key={index}
                      className="px-2 py-1 border border-yellow-500 rounded-full"
                    >
                      {value}
                    </p>
                  ))}
                </div>
              </div>
              <div className="ml-12 mt-2 flex flex-row">
                <div className="border-l-2 p-4 min-w-28 border-yellow-500">
                  <p>Tools</p>
                </div>
                <div className="p-4 flex flex-row gap-1 xl:text-sm text-xs">
                  {[
                    "Github",
                    "Figma",
                    "Firebase",
                    "VSCode",
                    "Eclipse",
                    "InteliJ",
                  ].map((value, index) => (
                    <p
                      key={index}
                      className="px-2 py-1 border border-yellow-500 rounded-full"
                    >
                      {value}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
