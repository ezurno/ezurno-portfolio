import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Detail() {
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
        ABOUT ME #2
      </h2>
      <div className=" w-full h-full flex flex-row justify-between items-start pt-6">
        <div className="w-full flex-col">
          <div className="flex flex-col justify-start">
            <span className="bg-yellow-500 size-fit px-4 py-1 rounded-full">
              <h2 className="font-bold text-base xl:text-base">
                E D U C A T I O N
              </h2>
            </span>
            <div className="flex flex-col">
              <div className="ml-12 mt-6 flex flex-row">
                <div className="border-l-2 p-4 min-w-52 border-yellow-500">
                  <p>서일대학교</p>
                  <p className="text-slate-400">2016.03 ~ 2023.02</p>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-bold text-yellow-300">
                    컴퓨터전자공학과
                  </h2>
                  <p>컴퓨터전자공학과 전공-학사</p>
                  <p>2021년 1학기 성적우수생 선발</p>
                  <p>웹개발 심화 실습, 데이터베이스 실습, 인공지능 심화 실습</p>
                  <p>평점 : 4.0 / 4.5</p>
                </div>
              </div>

              <div className="ml-12 mt-6 flex flex-row">
                <div className="border-l-2 min-w-52 p-4 border-yellow-500">
                  <p>KB 국민은행 IT 아카데미</p>
                  <p className="text-slate-400">2023.07 ~ 2023.10</p>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-bold text-yellow-300">
                    KB 국민은행 IT 아카데미 4기
                  </h2>
                  <p>KB 국민은행에서 주최하는 IT 교육 아카데미</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-8 justify-start">
            <span className="bg-yellow-500 size-fit px-4 py-1 rounded-full">
              <h2 className="font-bold text-base xl:text-base">
                C E R T I F I C A T E
              </h2>
            </span>
            <div className="flex flex-col">
              <div className="ml-12 mt-6 flex flex-row">
                <div className="border-l-2 p-4 min-w-52 border-yellow-500">
                  <p>SQLD 개발자</p>
                  <p className="text-slate-400">2023.12</p>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-bold text-yellow-300">
                    SQL 자격증 취득
                  </h2>
                  <p>한국데이터산업진흥원</p>
                  <p>제 51회 SQLD 개발자</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
