import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Greetings() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const h2Variants = {
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeInOut", delay },
    }),
    // hidden: { opacity: 0, y: 50 },
  };

  const figureVariants = {
    visible: (delay: number) => ({
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut", delay },
    }),
    // hidden: { opacity: 0 },
  };

  const imageVariants = {
    visible: (delay: number) => ({
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut", delay },
    }),
    // hidden: { opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative h-full w-full tracking-tighter px-8 py-8 xl:px-24 font-bold text-6xl gap-2 flex flex-row justify-between items-center"
    >
      <div className="relative z-20">
        <motion.h2
          custom={1.5}
          variants={h2Variants}
          className="relative z-50 leading-tight"
        >
          안녕하세요
        </motion.h2>
        <motion.h2
          custom={2.5}
          variants={h2Variants}
          className="relative z-50 leading-tight"
        >
          프론트엔드 개발자
        </motion.h2>
        <motion.h2
          custom={3.5}
          variants={h2Variants}
          className="relative z-50 leading-tight"
        >
          <span className="text-yellow-500">이 준 모</span> 입니다
        </motion.h2>

        {/* <motion.div
          custom={0.2}
          variants={figureVariants}
          className="border-4 z-0 border-gray-500 h-56 w-56 rotate-3 rounded-full absolute bottom-0 right-0"
        /> */}
        <motion.div
          custom={0.75}
          variants={figureVariants}
          className="border-8 z-0 border-emerald-500 h-28 w-28 rotate-12 absolute -top-16 -right-12"
        />
        <motion.div
          custom={1.0}
          variants={figureVariants}
          className="border-8 z-0 border-red-500 h-24 w-24 rotate-3 absolute -bottom-20 right-12 rounded-full"
        />
        <motion.div
          custom={1.25}
          variants={figureVariants}
          className="absolute z-0 inset-0 bg-blue-500 w-2 h-32 transform left-4 -top-28 rotate-45"
        />
        <motion.div
          custom={1.25}
          variants={figureVariants}
          className="absolute z-0 inset-0 bg-blue-500 w-2 h-32 transform left-4 -top-28 -rotate-45"
        />
      </div>

      <motion.div
        custom={2.0}
        variants={imageVariants}
        className="bg-gray-500 h-full top-0 right-0 w-2/5 absolute object-cover bg-cover"
        style={{
          backgroundImage: `url(${
            import.meta.env.VITE_BASE_PATH
          }/photo_me.jpg)`,
        }}
      />
    </motion.div>
  );
}
