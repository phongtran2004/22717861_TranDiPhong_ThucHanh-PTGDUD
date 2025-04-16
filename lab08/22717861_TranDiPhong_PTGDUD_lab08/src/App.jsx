import { useContext } from "react"
import { AppContext } from "./context/AppContext"

const App = () => {
  const { state, dispatch } = useContext(AppContext)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl shadow-xl w-full max-w-md overflow-hidden border border-gray-700">
        <div className="bg-gradient-to-r from-purple-800 to-indigo-900 p-6 text-white text-center">
          <h1 className="text-3xl font-bold tracking-tight">Counter App</h1>
          <p className="text-purple-200 mt-2 text-sm">Built with React Context & Tailwind CSS</p>
        </div>

        <div className="p-8">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-lg opacity-50"></div>
              <div className="relative bg-gray-900 text-6xl font-bold text-white h-32 w-32 rounded-full flex items-center justify-center border-4 border-purple-800 shadow-inner">
                {state.count}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => dispatch({ type: "INCREASE" })}
              className="bg-green-700 hover:bg-green-600 active:bg-green-800 text-white py-3 px-4 rounded-lg font-medium transition-all transform hover:scale-105 active:scale-95 shadow-md"
            >
              INCREASE
            </button>
            <button
              onClick={() => dispatch({ type: "DECREASE" })}
              className="bg-red-700 hover:bg-red-600 active:bg-red-800 text-white py-3 px-4 rounded-lg font-medium transition-all transform hover:scale-105 active:scale-95 shadow-md"
            >
              DECREASE
            </button>
            <button
              onClick={() => dispatch({ type: "RESET" })}
              className="bg-gray-700 hover:bg-gray-600 active:bg-gray-800 text-white py-3 px-4 rounded-lg font-medium transition-all transform hover:scale-105 active:scale-95 shadow-md"
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
