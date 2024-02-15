import TimeLineBox from "./TimeLineBox";

export default function TimeLine() {
  return (
    <div className="w-full tracking-tighter px-8 py-4 xl:px-24 gap-2 flex flex-col justify-start items-start">
      <h2 className="underline underline-offset-8 decoration-yellow-500 font-bold text-3xl">
        TIME LINE
      </h2>

      <div className="w-full h-2 rounded-full bg-yellow-500 mt-24 relative">
        <div className="w-6 h-6 rounded-full border-4 bg-black border-yellow-500 absolute -top-2 -bottom-2">
          <TimeLineBox
            date={"2019.07"}
            image={"photo_pol.jpg"}
            regdate={"2017.11 ~ 2019.07"}
            mainText={"의무경찰 만기전역"}
            paragrah={"1093기 성동경찰서\n모범대원 수상"}
          />
        </div>
        <div className="w-6 h-6 rounded-full border-4 bg-black border-yellow-500 absolute -top-2 -bottom-2 left-1/4">
          <TimeLineBox
            date={"2023.02"}
            image={"photo_seoil_2.jpg"}
            regdate={"2016.03 ~ 2023.02"}
            mainText={"서일대학교 학사 졸업"}
            paragrah={"컴퓨터 전자공학과\n4년제 학사 취득"}
          />
        </div>
        <div className="w-6 h-6 rounded-full border-4 bg-black border-yellow-500 absolute -top-2 -bottom-2 left-2/4">
          <TimeLineBox
            date={"2023.07"}
            image={"photo_kb.jpg"}
            regdate={"2023.07 ~ 2023.10"}
            mainText={"KB IT아카데미 4기"}
            paragrah={
              "국민은행 주최\nIT 아카데미 수료\nSpring, Oracle, Servlet...\n동적 웹서비스 구현"
            }
          />
        </div>
        <div className="w-6 h-6 rounded-full border-4 bg-black border-yellow-500 absolute -top-2 -bottom-2 left-3/4">
          <TimeLineBox
            date={"2023.12"}
            image={"photo_sqld.jpg"}
            regdate={"2023.12"}
            mainText={"SQLD 자격증 취득"}
            paragrah={
              "제 51회 SQLD 자격증\n Database 및 Oracle\n데이터 분석능력 함양"
            }
          />
        </div>
      </div>
    </div>
  );
}
