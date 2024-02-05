import Container from "../components/Container";
import "../css/index.css";
import Box from "../components/Box";
import Greetings from "../components/Greetings";
import TimeLine from "../components/TimeLine";
import Info from "../components/Info";
import Detail from "../components/Detail";

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
    </Container>
  );
}
