// app/components/Experience.js
import Container from "./Container";
import { theme } from "@/theme";
export default function Experience() {
  return (
    <Container className={` ${theme.paddingVertical} h-screen bg-charcoal`}>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Experience</h2>
      <ul className="space-y-4">
        <li className="text-gray-700">
          <span className="font-bold">2023:</span> Launched our flagship product with great success.
        </li>
        <li className="text-gray-700">
          <span className="font-bold">2024:</span> Expanded team and opened new office.
        </li>
        <li className="text-gray-700">
          <span className="font-bold">2025:</span> Achieved industry recognition for innovation.
        </li>
      </ul>
    </Container>
  );
}