import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TimeLineBox from "./TimeLineBox";

export default function TimeLine() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const LineVariants = {
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeInOut", delay },
    }),
    // hidden: { opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full tracking-tighter px-8 py-4 xl:px-24 gap-2 flex flex-col justify-start items-start"
    >
      <h2 className="underline underline-offset-8 decoration-yellow-500 font-bold text-3xl">
        TIME LINE
      </h2>

      <div className="w-full h-2 rounded-full bg-yellow-500 mt-24 relative">
        <motion.div
          custom={1.0}
          variants={LineVariants}
          className="w-6 h-6 rounded-full border-4 bg-black border-yellow-500 absolute -top-2 -bottom-2"
        >
          <TimeLineBox
            date={"2019.07"}
            image={"bg-pol-image"}
            regdate={"2017.11 ~ 2019.07"}
            mainText={"의무경찰 만기전역"}
            paragrah={"1093기 성동경찰서\n모범대원 수상"}
          />
        </motion.div>
        <motion.div
          custom={2.0}
          variants={LineVariants}
          className="w-6 h-6 rounded-full border-4 bg-black border-yellow-500 absolute -top-2 -bottom-2 left-1/4"
        >
          <TimeLineBox
            date={"2023.02"}
            image={"bg-seoil-image"}
            regdate={"2016.03 ~ 2023.02"}
            mainText={"서일대학교 학사 졸업"}
            paragrah={"컴퓨터 전자공학과\n4년제 학사 취득"}
          />
        </motion.div>
        <motion.div
          custom={3.0}
          variants={LineVariants}
          className="w-6 h-6 rounded-full border-4 bg-black border-yellow-500 absolute -top-2 -bottom-2 left-2/4"
        >
          <TimeLineBox
            date={"2023.07"}
            image={"bg-kb-image"}
            regdate={"2023.07 ~ 2023.10"}
            mainText={"KB IT아카데미 4기"}
            paragrah={
              "국민은행 주최\nIT 아카데미 수료\nSpring, Oracle, Servlet...\n동적 웹서비스 구현"
            }
          />
        </motion.div>
        <motion.div
          custom={4.0}
          variants={LineVariants}
          className="w-6 h-6 rounded-full border-4 bg-black border-yellow-500 absolute -top-2 -bottom-2 left-3/4"
        >
          <TimeLineBox
            date={"2023.12"}
            image={"bg-sqld-image"}
            regdate={"2023.12"}
            mainText={"SQLD 자격증 취득"}
            paragrah={
              "제 51회 SQLD 자격증\n Database 및 Oracle\n데이터 분석능력 함양"
            }
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
