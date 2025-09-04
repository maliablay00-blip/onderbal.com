export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-amber-700 mb-6">
        ÖNDER BAL 🍯
      </h1>

      <p className="text-lg text-gray-700 max-w-xl mb-6">
        Doğal, katkısız ve saf bal üretimi 🐝  
        Yıllardır süregelen emeğimizle en kaliteli balı sizlere sunuyoruz.
      </p>

      <img
        src="/bal.jpg"
        alt="Bal Kavanozu"
        className="w-64 h-64 object-cover rounded-2xl shadow-lg mb-6"
      />

      <a
        href="https://www.youtube.com/@drone"
        target="_blank"
        className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full shadow-md transition"
      >
        🎥 Bal Videolarımızı İzle
      </a>

      <a
        href="https://bakutasarim.com"
        target="_blank"
        className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition"
      >
        🌿 Baku Tasarım
      </a>

      <footer className="mt-10 text-gray-500 text-sm">
        © 2025 Önder Bal – Doğadan Sofranıza
      </footer>
    </main>
  );
}