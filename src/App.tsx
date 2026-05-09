import { useState } from 'react';

export default function RomanticGiftPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-red-100 flex items-center justify-center p-6 overflow-hidden relative">
      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-400 animate-bounce opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <div className="max-w-2xl w-full bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/40 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-rose-600 mb-4 animate-pulse">
            De Fernan para Valeria 💖
          </h1>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
            Desde que llegaste a mi vida, todo se siente más bonito.
            Gracias por cada sonrisa, cada momento y cada abrazo.
            Este pequeño detalle es solo una forma de recordarte
            lo especial que eres para mí.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-rose-100 rounded-2xl p-5 shadow-md hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-2">🌸</div>
              <h3 className="font-semibold text-rose-700">Tu sonrisa</h3>
              <p className="text-sm text-gray-600 mt-2">
                Hace mis días muchísimo mejores.
              </p>
            </div>

            <div className="bg-pink-100 rounded-2xl p-5 shadow-md hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-2">✨</div>
              <h3 className="font-semibold text-pink-700">Tus detalles</h3>
              <p className="text-sm text-gray-600 mt-2">
                Son pequeñas cosas que significan mucho.
              </p>
            </div>

            <div className="bg-red-100 rounded-2xl p-5 shadow-md hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-2">❤️</div>
              <h3 className="font-semibold text-red-700">Nuestro amor</h3>
              <p className="text-sm text-gray-600 mt-2">
                Lo más bonito que me ha pasado.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100">
            <p className="text-xl md:text-2xl font-semibold text-rose-600 italic">
              “Eres mi lugar favorito en el mundo.”
            </p>
          </div>

          <button
            className="mt-8 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            onClick={() => setShowModal(true)}
          >
            Presióname 💌
          </button>
                </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center animate-[fadeIn_0.3s_ease] relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <div className="text-6xl mb-4">💖</div>

            <h2 className="text-3xl font-bold text-rose-600 mb-4">
              Para Valeria ❤️
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Gracias por existir, por acompañarme y por hacer mi vida mucho más feliz.
              Eres una persona increíble y quiero seguir creando recuerdos hermosos contigo.
            </p>

            <button
              className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
              onClick={() => setShowModal(false)}
            >
              ❤️ Tú también eres mi felicidad ❤️
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
