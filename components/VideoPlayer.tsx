'use client'

import { FaFilm } from 'react-icons/fa'

interface VideoPlayerProps {
  videoId?: string
  title?: string
}

export default function VideoPlayer({ videoId, title }: VideoPlayerProps) {
  if (!videoId) {
    return (
      <div className="aspect-video bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 rounded-2xl flex flex-col items-center justify-center gap-4 border-2 border-dashed border-orange-200">
        <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center animate-bounce">
          <FaFilm size={28} className="text-orange-400" />
        </div>
        <div className="text-center px-4">
          <p className="text-gray-700 font-black text-xl">Video Coming Soon!</p>
          <p className="text-gray-500 text-sm mt-1 font-body">We&apos;re filming this lesson right now</p>
        </div>
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-blink-1 inline-block" />
          <span className="w-2 h-2 rounded-full bg-pink-400 animate-blink-2 inline-block" />
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-blink-3 inline-block" />
        </div>
      </div>
    )
  }

  return (
    <div className="aspect-video rounded-2xl overflow-hidden shadow-xl ring-2 ring-orange-100">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title ?? 'Robotik lesson video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  )
}
