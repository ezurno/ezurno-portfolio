import { motion } from "framer-motion";

interface IBoxProps {
  children: React.ReactNode;
}

export default function Box({ children }: IBoxProps) {
  return (
    <section className="w-full">
      <motion.div className="w-full h-screen">{children}</motion.div>
    </section>
  );
}
