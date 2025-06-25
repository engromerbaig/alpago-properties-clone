// app/components/Team.js
import { theme } from "@/theme";
import Container from "./Container";



export default function Team() {
  return (
    <Container className={`min-h-screen bg-white ${theme.paddingVertical}`}>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h3 className="text-lg font-bold text-gray-800">Team Member 1</h3>
          <p className="text-gray-600">Lead Developer</p>
        </div>
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h3 className="text-lg font-bold text-gray-800">Team Member 2</h3>
          <p className="text-gray-600">Designer</p>
        </div>
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h3 className="text-lg font-bold text-gray-800">Team Member 3</h3>
          <p className="text-gray-600">Project Manager</p>
        </div>
      </div>
    </Container>
  );
}