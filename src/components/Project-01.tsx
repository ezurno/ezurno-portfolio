import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProjectTalk() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-violet-900 text-violet-100 h-full w-full tracking-tighter gap-2 flex flex-row justify-between items-start"
    >
      <div className="flex flex-col gap-2 justify-start items-start pl-8 xl:pl-24 py-4">
        <h2 className="underline underline-offset-8 decoration-yellow-500 font-bold text-3xl">
          PROJECT #1.
        </h2>

        <div className="flex flex-row gap-2 items-center justify-center">
          <span className="font-bold">96TALK</span>
          <span className="text-sm">- 양방향 통신 웹 메신저 서비스 📨</span>
        </div>

        <div className="mt-12">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="">
              <tr>
                <td className="pr-8 py-1 whitespace-nowrap font-bold text-sm">
                  개발 기간
                </td>
                <td className="py-1 whitespace-nowrap text-sm">
                  2023.05. ~ 2023.12.
                </td>
              </tr>
              <tr>
                <td className="pr-8 py-1 whitespace-nowrap font-bold text-sm">
                  개발 인원
                </td>
                <td className=" py-1 whitespace-nowrap text-sm">2 명</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 max-w-[24rem]">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="">
              <tr>
                <td className="pr-8 py-1 text-violet-500 font-bold">
                  개발 환경
                </td>
              </tr>
              <tr>
                <td className="pr-8 py-1 whitespace-nowrap font-bold text-sm">
                  언어
                </td>
                <td className="py-1 whitespace-wrap flex flex-wrap">
                  <img src="https://img.shields.io/badge/java11-007396?style=flat-square&logo=java&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=000000" />
                  <img src="https://img.shields.io/badge/typescript-3178C6?style=flat-square&logo=typescript&logoColor=FFFFFF" />
                  {/* <img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=FFFFFF" /> */}
                  {/* <img src="https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=FFFFFF" /> */}
                </td>
              </tr>
              <tr>
                <td className="pr-8 py-1 whitespace-nowrap font-bold text-sm">
                  프레임워크
                </td>
                <td className=" py-1 whitespace-wrap flex flex-wrap">
                  <img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=flat-square&logo=tailwindcss&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/spring-6DB33F?style=flat-square&logo=spring&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/springboot-6DB33F?style=flat-square&logo=springboot&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/springsecurity-6DB33F?style=flat-square&logo=springsecurity&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/JWT-007396?style=flat-square&logo=jWT&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/STOMP-007396?style=flat-square&logo=STOMP&logoColor=FFFFFF" />
                </td>
              </tr>

              <tr>
                <td className="pr-8 py-1 whitespace-nowrap font-bold text-sm">
                  DB
                </td>
                <td className=" py-1 whitespace-wrap flex flex-wrap">
                  <img src="https://img.shields.io/badge/mybatis-001202?style=flat-square&logo=mybatis&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/mysql-4479A1?style=flat-square&logo=mysql&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/mongodb-47A248?style=flat-square&logo=mongodb&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/redis-DC382D?style=flat-square&logo=redis&logoColor=FFFFFF" />
                </td>
              </tr>

              <tr>
                <td className="pr-8 py-1 whitespace-nowrap font-bold text-sm">
                  IDE
                </td>
                <td className=" py-1 whitespace-wrap flex flex-wrap">
                  <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=flat-square&logo=visualstudiocode&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/intellij-000000?style=flat-square&logo=intellijidea&logoColor=FFFFFF" />
                </td>
              </tr>

              <tr>
                <td className="pr-8 py-1 whitespace-nowrap font-bold text-sm">
                  TOOL
                </td>
                <td className=" py-1 whitespace-wrap flex flex-wrap">
                  <img src="https://img.shields.io/badge/vite-646CFF?style=flat-square&logo=vite&logoColor=FEC111" />
                  <img src="https://img.shields.io/badge/swagger-85EA2D?style=flat-square&logo=swagger&logoColor=FFFFFF" />
                  <img src="https://img.shields.io/badge/github-181717?style=flat-square&logo=github&logoColor=FFFFFF" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12">
          <h2 className="font-bold text-violet-500">LINK</h2>
          <a
            className="font-thin text-sm"
            href="https://github.com/nineto6/FE-96Talk"
          >
            https://github.com/nineto6/FE-96Talk
          </a>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${import.meta.env.VITE_BASE_PATH}/mockup.jpg)`,
        }}
        className="bg-gray-500 h-full top-0 right-0 w-[40rem] xl:w-[48rem] object-cover bg-cover bg-center"
      ></div>
    </motion.div>
  );
}
