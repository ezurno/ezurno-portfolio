import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProjectBSBZ() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-amber-500 text-amber-950 h-full w-full tracking-tighter gap-2 flex flex-row-reverse justify-between items-start"
    >
      <div className="flex flex-col gap-2 justify-start items-start pr-8 xl:pr-24 py-4">
        <h2 className="underline underline-offset-8 decoration-cyan-200 font-bold text-3xl">
          PROJECT #2.
        </h2>

        <div className="flex flex-row gap-2 items-center justify-center">
          <span className="font-bold">벌써부자</span>
          <span className="text-sm">- 조각투자 멀티 플랫폼 🐝 </span>
        </div>

        <div className="text-sm">
          <p>2023 KB IT's Your Life 4기 최종 프로젝트</p>
          <p>AI 가격 예측 서비스를 제공하는 종합투자 플랫폼</p>
        </div>

        <div className="mt-12">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="">
              <tr>
                <td className="pr-8 py-1 whitespace-nowrap font-bold text-sm">
                  개발 기간
                </td>
                <td className="py-1 whitespace-nowrap text-sm">
                  2023.07. ~ 2023.10.
                </td>
              </tr>
              <tr>
                <td className="pr-8 py-1 whitespace-nowrap font-bold text-sm">
                  개발 인원
                </td>
                <td className=" py-1 whitespace-nowrap text-sm">6 명</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 max-w-[24rem]">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="">
              <tr>
                <td className="pr-8 py-1 text-amber-300 font-bold">
                  개발 환경
                </td>
              </tr>
              <tr>
                <td className="pr-8 py-1 whitespace-nowrap font-bold text-sm">
                  언어
                </td>
                <td className="py-1 whitespace-wrap flex flex-wrap">
                  <img src="https://img.shields.io/badge/java8-007396?style=flat-square&logo=java&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=000000" />
                  <img src="https://img.shields.io/badge/typescript-3178C6?style=flat-square&logo=typescript&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/python-3776AB?style=flat-square&logo=python&logoColor=FFFFFF" />
                </td>
              </tr>
              <tr>
                <td className="pr-8 py-1 whitespace-nowrap font-bold text-sm">
                  프레임워크
                </td>
                <td className=" py-1 whitespace-wrap flex flex-wrap">
                  <img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/recoil-3578E5?style=flat-square&logo=recoil&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/spring-6DB33F?style=flat-square&logo=spring&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/springboot-6DB33F?style=flat-square&logo=springboot&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/JWT-007396?style=flat-square&logo=jWT&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/django-092E20?style=flat-square&logo=django&logoColor=FFFFFF" />
                </td>
              </tr>

              <tr>
                <td className="pr-8 py-1 whitespace-nowrap font-bold text-sm">
                  DB
                </td>
                <td className=" py-1 whitespace-wrap flex flex-wrap">
                  <img src="https://img.shields.io/badge/mybatis-001202?style=flat-square&logo=mybatis&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/oracle-F80000?style=flat-square&logo=oracle&logoColor=FFFFFF" />
                </td>
              </tr>

              <tr>
                <td className="pr-8 py-1 whitespace-nowrap font-bold text-sm">
                  IDE
                </td>
                <td className=" py-1 whitespace-wrap flex flex-wrap">
                  <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=flat-square&logo=visualstudiocode&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/eclipseide-2C2255?style=flat-square&logo=eclipseide&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/intellij-000000?style=flat-square&logo=intellijidea&logoColor=FFFFFF" />
                </td>
              </tr>

              <tr>
                <td className="pr-8 py-1 whitespace-nowrap font-bold text-sm">
                  TOOL
                </td>
                <td className=" py-1 whitespace-wrap flex flex-wrap">
                  <img src="https://img.shields.io/badge/github-181717?style=flat-square&logo=github&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/figma-F24E1E?style=flat-square&logo=figma&logoColor=FFFFFF" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 flex flex-col">
          <h2 className="font-bold text-amber-300">LINK</h2>
          <a
            className="font-bold text-sm"
            href="https://www.youtube.com/watch?v=WQcnG25WcMw"
          >
            시연영상 보러가기
          </a>
          <a
            className="font-thin text-sm"
            href="https://github.com/KB-BSBZ/bsbz-frontend"
          >
            https://github.com/KB-BSBZ/bsbz-frontend
          </a>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${
            import.meta.env.VITE_BASE_PATH
          }/smartmockups.jpg)`,
        }}
        className="bg-gray-500 h-full top-0 right-0 w-[40rem] xl:w-[48rem] object-cover bg-cover bg-center shadow-2xl"
      ></div>
    </motion.div>
  );
}
