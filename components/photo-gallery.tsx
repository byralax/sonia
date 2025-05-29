"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

const photos = [
  {
    id: 1,
    src: "https://i.postimg.cc/yNhgzyqF/IMG-20250529-WA0015.jpg",
    alt: "Beach day pics",
    caption: "coconut drink",
    rotation: "rotate-3",
    position: "top-4 left-8",
  },
  {
    id: 2,
    src: "https://i.postimg.cc/fLTLQ4fN/IMG-20250529-WA0017.jpg",
    alt: "horse riding",
    caption: "Magical sunset 🌅",
    rotation: "-rotate-2",
    position: "top-12 right-12",
  },
  {
    id: 3,
    src: "https://i.postimg.cc/k415njTt/IMG-20250529-WA0016.jpg",
    alt: "beach dayy",
    caption: "getting some ocean water in my toes😂😂",
    rotation: "rotate-1",
    position: "top-32 left-32",
  },
  {
    id: 4,
    src: "https://i.postimg.cc/wxwJWzdg/IMG-20250529-WA0024.jpg",
    alt: "Local market scene",
    caption: "Vibrant markets full of life!",
    rotation: "-rotate-3",
    position: "top-24 right-24",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Traditional food",
    caption: "Delicious Nigerian cuisine 🍛",
    rotation: "rotate-2",
    position: "top-48 left-16",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Landscape view",
    caption: "Breathtaking Nigerian landscapes",
    rotation: "-rotate-1",
    position: "top-40 right-8",
  },
]

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(null)

  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-orange-900 mb-2" style={{ fontFamily: "Kalam, cursive" }}>
          Trip Memories 📷
        </h2>
        <p className="text-orange-700">Click on any photo to see it larger</p>
      </div>

      {/* Scattered Polaroid Layout */}
      <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            style={{
              left: `${(index % 2) * 40 + 10}%`,
              top: `${Math.floor(index / 2) * 25 + 5}%`,
              zIndex: photos.length - index,
            }}
            className={`absolute cursor-pointer transform transition-all duration-300 hover:scale-110 hover:z-20 ${photo.rotation} hover:rotate-0 lg:left-[${(index % 3) * 30 + 10}%] lg:top-[${Math.floor(index / 3) * 40 + 10}%]`}
            onClick={() => setSelectedPhoto(photo)}
          >
            {/* Polaroid Frame */}
            <div className="bg-white p-2 lg:p-3 shadow-xl transform hover:shadow-2xl transition-shadow duration-300">
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                className="w-32 lg:w-48 h-24 lg:h-36 object-cover"
              />
              <p className="text-center text-sm text-gray-700 mt-2 font-handwriting">{photo.caption}</p>

              {/* Tape effect */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-yellow-200 opacity-70 rotate-12"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged photo */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 lg:p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="bg-white p-6 shadow-2xl">
              <img
                src={selectedPhoto.src || "/placeholder.svg"}
                alt={selectedPhoto.alt}
                className="max-w-full max-h-[70vh] object-contain"
              />
              <p className="text-center text-lg text-gray-700 mt-4" style={{ fontFamily: "Kalam, cursive" }}>
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
