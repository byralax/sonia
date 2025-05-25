export default function NigerianStamp() {
  return (
    <div className="relative">
      {/* Stamp */}
      <div
        className="bg-gradient-to-br from-green-600 to-green-800 p-4 w-24 h-32 relative transform rotate-12 hover:rotate-6 transition-transform duration-300"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)",
          backgroundImage: `
            radial-gradient(circle at 2px 2px, transparent 1px, rgba(255,255,255,0.1) 1px),
            radial-gradient(circle at 6px 6px, transparent 1px, rgba(255,255,255,0.1) 1px)
          `,
          backgroundSize: "8px 8px",
        }}
      >
        <div className="text-center text-white">
          <div className="text-2xl mb-1">🌴</div>
          <div className="text-xs font-bold">NIGERIA</div>
          <div className="text-lg font-bold mt-1">8d</div>
        </div>

        {/* Postmark */}
        <div className="absolute -top-2 -right-2 w-12 h-12 border-2 border-red-600 rounded-full flex items-center justify-center bg-red-100/80">
          <div className="text-center">
            <div className="text-xs text-red-800 font-bold">LAGOS</div>
            <div className="text-xs text-red-800">2024</div>
          </div>
        </div>
      </div>
    </div>
  )
}
