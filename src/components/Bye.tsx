export default function Bye() {
  return (
    <div className="relative h-full  flex flex-col justify-center items-center w-full tracking-tighter px-8 py-8 xl:px-24 font-bold text-6xl gap-2 ">
      <div className="relative z-20">
        <h2 className="relative z-50 leading-tight">감사합니다!</h2>

        {/* <div
          custom={0.2}
          variants={figureVariants}
          className="border-4 z-0 border-gray-500 h-56 w-56 rotate-3 rounded-full absolute bottom-0 right-0"
        /> */}
        <div className="border-8 z-0 border-emerald-500 h-28 w-28 rotate-12 absolute -top-16 -right-12" />
        <div className="border-8 z-0 border-red-500 h-24 w-24 rotate-3 absolute -bottom-20 right-12 rounded-full" />
        <div className="absolute z-0 inset-0 bg-blue-500 w-2 h-32 transform left-4 -top-28 rotate-45" />
        <div className="absolute z-0 inset-0 bg-blue-500 w-2 h-32 transform left-4 -top-28 -rotate-45" />
      </div>
    </div>
  );
}
