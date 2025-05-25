"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import PhotoGallery from "./photo-gallery"
import NigerianStamp from "./nigerian-stamp"
import AnkaraPatterns from "./ankara-patterns"

export default function PostcardPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
  const [spotifyUrl, setSpotifyUrl] = useState("")
  const [showSpotifyConfig, setShowSpotifyConfig] = useState(false)
  const [playerPosition, setPlayerPosition] = useState({ x: 20, y: 20 })
  const [isDragging, setIsDragging] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with vintage paper texture */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-50 to-orange-200"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(120, 53, 15, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(194, 65, 12, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(217, 119, 6, 0.05) 0%, transparent 50%)
          `,
        }}
      />

      {/* Vintage paper texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d97706' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Ankara Patterns */}
      <AnkaraPatterns />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-2 lg:px-4 py-4 lg:py-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-start">
          {/* Left Side - Postcard Content */}
          <div className="space-y-8">
            {/* Header with Nigerian Stamp */}
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h1 className="text-2xl lg:text-4xl font-bold text-orange-900" style={{ fontFamily: "Kalam, cursive" }}>
                  Greetings from Nigeria
                </h1>
                <p className="text-orange-700 text-lg">A digital keepsake for Sonia</p>
              </div>
              <NigerianStamp />
            </div>

            {/* Main Message */}
            <div
              className="bg-amber-50/80 backdrop-blur-sm p-4 lg:p-8 rounded-lg border-2 border-orange-200 shadow-lg transform lg:-rotate-1"
              style={{
                fontFamily: "Kalam, cursive",
                backgroundImage:
                  "linear-gradient(45deg, transparent 24%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1) 76%, transparent 77%)",
              }}
            >
              <div className="space-y-6">
                {/* English Message */}
                <div className="space-y-3">
                  <p className="text-xl lg:text-2xl text-orange-900 leading-relaxed">Dear Sonia,</p>
                  <p className="text-base lg:text-lg text-orange-800 leading-relaxed">
                    It was wonderful to have you here in Nigeria! From the vibrant markets and delicious food to the
                    beautiful landscapes, I hope you enjoyed every moment. The warmth of our people and the richness of
                    our culture made your visit truly special.
                  </p>
                  <p className="text-base lg:text-lg text-orange-800 leading-relaxed">
                    Wishing you safe travels, my friend.
                  </p>
                </div>

                {/* Italian Message */}
                <div className="space-y-3 border-t border-orange-300 pt-6">
                  <p className="text-xl text-orange-900 italic">Con affetto,</p>
                  <p className="text-lg text-orange-800 leading-relaxed italic">
                    È stato bello averti qui in Nigeria! Dai mercati vivaci e il cibo delizioso ai paesaggi splendidi,
                    spero che tu abbia apprezzato ogni momento. Il calore della nostra gente e la ricchezza della nostra
                    cultura hanno reso la tua visita davvero speciale.
                  </p>
                  <p className="text-lg text-orange-800 italic">Ti auguro un buon viaggio, amica mia.</p>
                </div>

                {/* Signature */}
                <div className="text-right pt-4">
                  <p className="text-xl text-orange-900" style={{ fontFamily: "Dancing Script, cursive" }}>
                    With love from Nigeria 🇳🇬
                  </p>
                </div>
              </div>
            </div>

            {/* View Photos Button */}
            <div className="text-center">
              <Button
                onClick={() => setShowGallery(!showGallery)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 lg:px-8 py-2 lg:py-3 text-base lg:text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                style={{ fontFamily: "Kalam, cursive" }}
              >
                {showGallery ? "Hide Photos" : "View Trip Photos"} 📸
              </Button>
            </div>
          </div>

          {/* Right Side - Decorative Elements */}
          <div className="space-y-6">
            {/* Palm Tree Illustration */}
            <div className="text-center">
              <div className="text-6xl lg:text-8xl">🌴</div>
              <p className="text-orange-700 mt-2" style={{ fontFamily: "Kalam, cursive" }}>
                Nigerian Memories
              </p>
            </div>

            {/* Quick Photo Preview */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-2 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://media.istockphoto.com/id/1484126874/photo/five-cowrie-creek.jpg?s=612x612&w=0&k=20&c=hzTp7Q2MmTHMrHwc9eDGKqyG03Nx6HIlafoJvpJZtQ0="
                  alt="Nigerian landscape"
                  className="w-full h-32 object-cover"
                />
                <p className="text-xs text-center mt-1 text-gray-600">Beautiful Nigeria</p>
              </div>
              <div className="bg-white p-2 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://media.istockphoto.com/id/1145886400/photo/sunday-street-market-in-akure-nigeria.jpg?s=612x612&w=0&k=20&c=li4rApKZoHKYppjLEH8GkcNZe5ROV0WTG-nBBU_HR4E="
                  alt="Local market"
                  className="w-full h-32 object-cover"
                />
                <p className="text-xs text-center mt-1 text-gray-600">Local Markets</p>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        {showGallery && (
          <div className="mt-12">
            <PhotoGallery />
          </div>
        )}
      </div>

      {/* Mobile-Optimized Music Player */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-4 lg:transform-none z-50">
        <div className="bg-orange-800/95 backdrop-blur-sm text-white rounded-lg shadow-xl overflow-hidden border border-orange-600 w-72 lg:w-auto">
          {/* Player Header */}
          <div className="p-2 border-b border-orange-700 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div>
                <p className="text-xs font-medium">Nigerian Vibes</p>
                <p className="text-xs opacity-75">🎵 For Sonia</p>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsMinimized(!isMinimized)
              }}
              className="text-white hover:bg-orange-700 rounded px-2 py-1 text-xs"
            >
              {isMinimized ? "▲" : "▼"}
            </button>
          </div>

          {/* Spotify Embed - Mobile Optimized */}
          {!isMinimized && (
            <div className="p-2">
              <iframe
                src="https://open.spotify.com/embed/playlist/55xQJlQG88J3NtmQLWzrXM"
                width="280"
                height="100"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded w-full"
              ></iframe>
            </div>
          )}

          {/* Mobile hint */}
          <div className="px-2 pb-1 lg:hidden">
            <p className="text-xs opacity-50 text-center">Tap ▼ to minimize</p>
          </div>
        </div>
      </div>

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Dancing+Script:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </div>
  )
}
