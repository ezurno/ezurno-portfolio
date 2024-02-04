import Container from "../components/Container";
import "../css/index.css";
import Box from "../components/Box";
import Greetings from "../components/Greetings";
import TimeLine from "../components/TimeLine";

export default function Main() {
  return (
    <Container>
      <Box>
        <Greetings />
      </Box>
      <Box>
        <TimeLine />
      </Box>
      <Box>
        <TimeLine />
      </Box>
      <Box>
        <TimeLine />
      </Box>
      <Box>
        <TimeLine />
      </Box>
    </Container>
  );
}
