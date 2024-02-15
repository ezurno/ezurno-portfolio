interface IBoxProps {
  children: React.ReactNode;
}

export default function Box({ children }: IBoxProps) {
  return (
    <section className="w-full">
      <div className="w-full h-screen">{children}</div>
    </section>
  );
}
