// app/components/Projects.js
import { theme } from "@/theme";
import Container from "./Container";

export default function Projects() {
  return (
    <Container className="py-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800">Project One</h3>
          <p className="text-gray-600">A brief description of an innovative project.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800">Project Two</h3>
          <p className="text-gray-600">A brief description of another exciting project.</p>
        </div>
      </div>
    </Container>
  );
}