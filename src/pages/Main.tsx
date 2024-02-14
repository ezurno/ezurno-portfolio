import Container from "../components/Container";
import "../css/index.css";
import Box from "../components/Box";
import Greetings from "../components/Greetings";
import TimeLine from "../components/TimeLine";
import Info from "../components/Info";
import Detail from "../components/Detail";
import ProjectTalk from "../components/Project-01";
import ProjectTalkDetail01 from "../components/Project-01-detail-01";
import ProjectTalkDetail02 from "../components/Project-01-detail-02";
import ProjectTalkDetail03 from "../components/Project-01-detail-03";
import ProjectTalkDetail04 from "../components/Project-01-detail-04";
import ProjectBSBZ from "../components/Project-02";
import ProjectBSBZDetail01 from "../components/Project-02-detail-01";
import ProjectBSBZDetail02 from "../components/Project-02-detail-02";
import ProjectBSBZDetail03 from "../components/Project-02-detail-03";
import ProjectBSBZDetail04 from "../components/Project-02-detail-04";
import Bye from "../components/Bye";

export default function Main() {
  return (
    <Container>
      <Box>
        <Greetings />
      </Box>
      <Box>
        <Info />
      </Box>
      <Box>
        <Detail />
      </Box>
      <Box>
        <TimeLine />
      </Box>
      <Box>
        <ProjectTalk />
      </Box>
      <Box>
        <ProjectTalkDetail01 />
      </Box>
      <Box>
        <ProjectTalkDetail02 />
      </Box>
      <Box>
        <ProjectTalkDetail03 />
      </Box>
      <Box>
        <ProjectTalkDetail04 />
      </Box>
      <Box>
        <ProjectBSBZ />
      </Box>
      <Box>
        <ProjectBSBZDetail01 />
      </Box>
      <Box>
        <ProjectBSBZDetail02 />
      </Box>
      <Box>
        <ProjectBSBZDetail03 />
      </Box>
      <Box>
        <ProjectBSBZDetail04 />
      </Box>
      <Box>
        <Bye />
      </Box>
    </Container>
  );
}
