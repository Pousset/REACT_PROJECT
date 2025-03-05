import { useState } from "react";

export default function MenuConnect() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        🔑
      </button>
      {isOpen && (
        <div className="absolute top-14 right-0 w-64 bg-white shadow-lg rounded-2xl p-4 border border-gray-200">
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Pseudo
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Se connecter
          </button>
        </div>
      )}
    </div>
  );
}
