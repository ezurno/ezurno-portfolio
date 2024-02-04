interface IContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: IContainerProps) {
  return <div className="flex flex-col justify-start">{children}</div>;
}
