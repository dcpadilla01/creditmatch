export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans text-zinc-900">
      {/* Navbar */}
      <nav className="border-b border-zinc-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight text-blue-600">
            💳 CreditMatch
          </span>
          <span className="text-sm text-zinc-400">MX</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          CreditMatch
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 sm:text-xl">
          Encuentra la mejor tarjeta de crédito para ti
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700">
            Comparar tarjetas
          </button>
          <button className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 shadow-sm transition hover:bg-zinc-50">
            Saber más
          </button>
        </div>
      </section>

      {/* Comparison Table Placeholder */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="mb-1 text-2xl font-bold">
            Comparación de tarjetas
          </h2>
          <p className="mb-6 text-sm text-zinc-500">
            Próximamente — datos reales de tarjetas mexicanas.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50 text-zinc-600">
                  <th className="px-4 py-3 font-medium">Tarjeta</th>
                  <th className="px-4 py-3 font-medium">Banco</th>
                  <th className="px-4 py-3 font-medium">CAT promedio</th>
                  <th className="px-4 py-3 font-medium">Anualidad</th>
                  <th className="px-4 py-3 font-medium">Beneficios</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700">
                <tr className="border-b border-zinc-100">
                  <td className="px-4 py-3">Ejemplo Oro</td>
                  <td className="px-4 py-3">Banco X</td>
                  <td className="px-4 py-3">28.5%</td>
                  <td className="px-4 py-3">$0</td>
                  <td className="px-4 py-3">Cashback 1%</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="px-4 py-3">Ejemplo Platino</td>
                  <td className="px-4 py-3">Banco Y</td>
                  <td className="px-4 py-3">34.2%</td>
                  <td className="px-4 py-3">$1,200</td>
                  <td className="px-4 py-3">Millas aéreas</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Ejemplo Básica</td>
                  <td className="px-4 py-3">Banco Z</td>
                  <td className="px-4 py-3">45.0%</td>
                  <td className="px-4 py-3">$0</td>
                  <td className="px-4 py-3">Sin comisiones</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-6 text-center text-sm text-zinc-400">
          © 2026 CreditMatch · Todos los derechos reservados
        </div>
      </footer>
    </div>
  );
}
