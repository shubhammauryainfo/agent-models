
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          Welcome to Agent Model
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          This is your starting point. Build something amazing!
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
            Get Started
          </button>
          <button className="bg-white border-2 border-blue-200 text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
      <div className="mt-12 flex space-x-2">
        <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  )
}

export default Home