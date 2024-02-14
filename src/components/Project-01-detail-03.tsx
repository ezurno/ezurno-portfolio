import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProjectTalkDetail03() {
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
      <div className="flex bg-white h-full flex-col gap-2 justify-start items-start ml-6 pl-2 xl:px-16 py-4 w-full">
        <h2 className="underline underline-offset-8 decoration-yellow-500 font-bold text-3xl">
          PROJECT #1.
        </h2>

        <div className="flex flex-row gap-2 items-center justify-center">
          <span className="font-bold">96TALK</span>
          <span className="text-sm">- 양방향 통신 웹 메신저 서비스 📨</span>
          <span className="text-sm">- 서비스 소개 (3 / 4)</span>
        </div>
        <div>
          <span className="text-xl font-bold text-violet-400">
            1 대 1 채팅 서비스 구현
          </span>
        </div>

        <div>채팅하기 버튼을 활성화 시켜 채팅방을 생성 할 수 있습니다.</div>
        <div>
          생성 된 채팅방에서 WebSocket 을 활용한 실시간 채팅서비스를 구현
          하였으며
        </div>
        <div>
          읽지 않은 메세지는 버블으로 전체 읽지 않은 메세지 수를 나타냅니다.
        </div>

        <div className="mt-12 flex flex-row gap-2 w-full justify-between">
          <img src="/talk/image-04.png" className="w-72 shadow-2xl" />
          <img src="/talk/image-03.png" className="w-72 shadow-2xl" />
          <img src="/talk/image-06.png" className="w-72 shadow-2xl" />
        </div>
      </div>
    </motion.div>
  );
}
