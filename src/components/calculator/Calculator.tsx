
function Calculator() {
  return (
    <>
      <h1 className="text-center text-4xl bg-gray-700 p-4 text-white">Welcome to Calculator</h1>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-200">

        <div className="bg-gray-400 w-5/6 align border border-cyan-500 rounded-2xl py-4">
          <div className="text-center">
            <input type="number" placeholder="0" className="bg-gray-300 m-4 p-1 border border-gray-800 rounded-lg size-3/4 h-16 w-5/6 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none text-right" />
          </div>
          <div className="text-center grid grid-cols-4 ">
            <span className="border py-2 m-4 bg-gray-700 col-span-2"></span>
            <button className="border py-2 m-4 bg-gray-800 text-white text-2xl">Del</button>
            <button className="border py-2 m-4 bg-gray-800 text-white text-2xl">AC</button>
            <button className="border py-4 m-4 bg-gray-800 text-white text-2xl rounded-3xl">7</button>
            <button className="border py-4 m-4 bg-gray-800 text-white text-2xl rounded-3xl">8</button>
            <button className="border py-4 m-4 bg-gray-800 text-white text-2xl rounded-3xl">9</button>
            <button className="border py-4 m-4 bg-gray-800 text-white text-2xl rounded-3xl">/</button>
            <button className="border py-4 m-4 bg-gray-800 text-white text-2xl rounded-3xl">4</button>
            <button className="border py-4 m-4 bg-gray-800 text-white text-2xl rounded-3xl">5</button>
            <button className="border py-4 m-4 bg-gray-800 text-white text-2xl rounded-3xl">6</button>
            <button className="border py-4 m-4 bg-gray-800 text-white text-2xl rounded-3xl">X</button>
            <button className="border py-4 m-4 bg-gray-800 text-white text-2xl rounded-3xl">1</button>
            <button className="border py-4 m-4 bg-gray-800 text-white text-2xl rounded-3xl">2</button>
            <button className="border py-4 m-4 bg-gray-800 text-white text-2xl rounded-3xl">3</button>
            <button className="border py-4 m-4 bg-gray-800 text-white text-2xl rounded-3xl">-</button>
            <button className="border py-4 m-4 bg-gray-800 text-white text-2xl rounded-3xl">0</button>
            <button className="border py-4 m-4 bg-gray-800 text-white text-2xl rounded-3xl">00</button>
            <button className="border py-4 m-4 bg-gray-800 text-white text-2xl rounded-3xl">.</button>
            <button className="border py-4 m-4 bg-gray-800 text-white text-2xl rounded-3xl">+</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calculator