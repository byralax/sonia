export default function AnkaraPatterns() {
  return (
    <>
      {/* Ankara Pattern Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 opacity-20">
        <div
          className="w-full h-full bg-orange-600"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.3) 4px, rgba(255,255,255,0.3) 8px),
              repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 8px)
            `,
          }}
        />
      </div>

      <div className="absolute top-40 right-20 w-20 h-20 opacity-15">
        <div
          className="w-full h-full bg-teal-600 rounded-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.3) 2px, transparent 2px)
            `,
            backgroundSize: "8px 8px",
          }}
        />
      </div>

      <div className="absolute bottom-32 left-20 w-12 h-24 opacity-20">
        <div
          className="w-full h-full bg-yellow-600"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 40%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.3) 60%, transparent 60%),
              linear-gradient(0deg, transparent 40%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 60%, transparent 60%)
            `,
          }}
        />
      </div>

      <div className="absolute bottom-20 right-32 w-14 h-14 opacity-15 transform rotate-45">
        <div
          className="w-full h-full bg-red-600"
          style={{
            backgroundImage: `
              repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.3) 45deg, transparent 90deg)
            `,
          }}
        />
      </div>

      {/* Palm leaves scattered */}
      <div className="absolute top-60 left-1/4 text-4xl opacity-10 transform -rotate-12">🌿</div>
      <div className="absolute bottom-40 right-1/4 text-3xl opacity-15 transform rotate-45">🌿</div>
      <div className="absolute top-1/3 right-10 text-2xl opacity-10 transform -rotate-45">🌿</div>
    </>
  )
}
