

import { theme } from "@/theme";
import Container from "./Container";

export default function Footer() {
  return (
    <Container className={`z-100 ${theme.paddingVertical} bg-black text-white `}>
      © {new Date().getFullYear()} JobSite. All rights reserved.
    </Container>
  );
}
