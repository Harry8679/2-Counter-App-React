import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const remove = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  const getColor = () => {
    if (count > 0) return 'text-green-500';
    if (count < 0) return 'text-red-500';
    return 'text-gray-500';
  }
  return (
    <div className="bg-white mt-10 max-w-md mx-auto shadow-md rounded-xl text-center p-6">
        <h1 className="text-2xl font-bold mb-4">Compter</h1>
        <p className={`text-3xl mb-4 font-semibold ${getColor()}`}>{count}</p>
        <div className="flex justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 rounded-md text-white px-4 py-1" onClick={add}>
                Ajouter
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 rounded-md text-white px-4 py-1" onClick={reset}>
                Remettre à 0
            </button>
            <button className="bg-red-600 hover:bg-red-700 rounded-md text-white px-4 py-1" onClick={remove}>
                Retirer
            </button>
        </div>
    </div>
  )
}
export default Counter;