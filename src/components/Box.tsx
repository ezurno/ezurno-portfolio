import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface IBoxProps {
  children: React.ReactNode;
}

export default function Box({ children }: IBoxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);
  return (
    <section className="w-full">
      <div ref={ref}></div>
      <motion.div style={{ y }} className="w-full h-screen">
        {children}
      </motion.div>
    </section>
  );
}
