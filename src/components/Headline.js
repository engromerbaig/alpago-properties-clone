import { theme } from "@/theme";
import Heading from "./Heading";
import Container from "./Container";

export const Headline = () => {
  return (
    <Container className={`bg-black ${theme.paddingTop}`}>
  <Heading
  text="ALPAGO PROPERTIES EXCELLENCE IN LUXURY"
  spanText="EXCELLENCE IN LUXURY"
  breakSpan={true}
  spanFontWeight="font-extralight"
  />
    </Container>
  );
}