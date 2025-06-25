// app/components/News.js
export default function News() {
  return (
    <section className="py-12 h-screen bg-pink-500">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Latest News</h2>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-800">News Update 1</h3>
          <p className="text-gray-600">Exciting new feature released this month.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-800">News Update 2</h3>
          <p className="text-gray-600">Partnered with leading tech company.</p>
        </div>
      </div>
    </section>
  );
}