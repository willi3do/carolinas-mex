export default function Home() {
  return (
    <div className="min-h-full w-full bg-gray-50">
      <div className="container  px-4 py-8 border-orange-500">
        <div className="text-center mb-8 bg-white">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Carolina Mex Kitchen
          </h1>
          <p className="text-lg text-gray-600">
            Authentic Mexican cuisine made with love
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Welcome</h2>
          <p className="text-gray-600">
            Experience the flavors of traditional Mexican cooking with fresh
            ingredients and authentic recipes.
          </p>
        </div>
      </div>
    </div>
  );
}
