// app/components/Hero.js
export default function Hero() {
  return (
    <section className="py-12 text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Welcome to JobSite</h1>
      <p className="text-lg text-gray-700 mb-6">
        Discover opportunities, showcase your projects, and join our team.
      </p>
      <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
        Get Started
      </button>
    </section>
  );
}