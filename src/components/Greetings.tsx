export default function Greetings() {
  return (
    <div className="relative h-full w-full tracking-tighter px-8 py-8 xl:px-24 font-bold text-6xl gap-2 flex flex-row justify-between items-center">
      <div className="relative z-20">
        <h2 className="relative z-50 leading-tight">안녕하세요</h2>
        <h2 className="relative z-50 leading-tight">프론트엔드 개발자</h2>
        <h2 className="relative z-50 leading-tight">
          <span className="text-yellow-500">이 준 모</span> 입니다
        </h2>

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

      <div
        className="bg-gray-500 h-full top-0 right-0 w-2/5 absolute object-cover bg-cover"
        style={{
          backgroundImage: `url(${
            import.meta.env.VITE_BASE_PATH
          }/photo_me.jpg)`,
        }}
      />
    </div>
  );
}
