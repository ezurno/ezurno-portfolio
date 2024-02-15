import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProjectTalkDetail04() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-violet-900 text-violet-950 h-full w-full tracking-tighter gap-2 flex flex-row justify-between items-start"
    >
      <div className="flex flex-col gap-2 justify-start items-start  ml-6 pl-2 xl:px-16 h-full bg-white py-4 w-full">
        <h2 className="underline underline-offset-8 decoration-yellow-500 font-bold text-3xl">
          PROJECT #1.
        </h2>

        <div className="flex flex-row gap-2 items-center justify-center">
          <span className="font-bold">96TALK</span>
          <span className="text-sm">- 양방향 통신 웹 메신저 서비스 📨</span>
          <span className="text-sm">- 서비스 소개 (4 / 4)</span>
        </div>
        <div>
          <span className="text-xl font-bold text-violet-400">알람 기능</span>
        </div>

        <div>알람 버튼으로 알람 상태를 알 수 있으며</div>
        <div>
          알람 상태가 켜져 있을 시 브라우저를 닫아두어도 알람이 가도록 구현
        </div>

        <div className="mt-12 flex flex-row gap-2 w-full justify-between">
          <img
            src={`${import.meta.env.VITE_BASE_PATH}/talk/image-07.png`}
            className="h-72 shadow-2xl"
          />
        </div>
      </div>
    </motion.div>
  );
}
