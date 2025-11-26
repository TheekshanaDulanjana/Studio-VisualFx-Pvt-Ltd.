export default function App() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white"
      style={{
        fontFamily: "Poppins, sans-serif",
        letterSpacing: "0.5px",
      }}
    >
      <h1
        className="text-5xl font-bold drop-shadow-lg"
        style={{
          textShadow: "0 4px 15px rgba(0,0,0,0.3)",
        }}
      >
        Hello World 👋
      </h1>

      <p
        className="mt-4 text-lg opacity-90"
        style={{
          border: "2px solid white",
          padding: "10px 18px",
          borderRadius: "12px",
          backdropFilter: "blur(6px)",
        }}
      >
        Welcome to React + Vite + Tailwind!
      </p>

      <button
        className="mt-6 px-6 py-3 bg-white text-red-700 font-semibold rounded-xl hover:scale-105 hover:shadow-xl transition-all"
        style={{
          boxShadow: "0 5px 20px rgba(255,255,255,0.3)",
        }}
      >
        Click Me 🚀
      </button>
    </div>
  );
}
