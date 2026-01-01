'use client';

import { Play } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface Demo {
  title: string;
  description: string;
  category: string;
  audioFile?: string;
}

const Demos: React.FC = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [audioElements, setAudioElements] = useState<{ [key: number]: HTMLAudioElement }>({});

  const demos: Demo[] = [
    {
      title: "Hospitality",
      description: "AI voice agents handling hotel bookings and guest services",
      category: "Hotels & Restaurants",
      audioFile: "/audio/Hotel.mpeg",
    },
    {
      title: "Healthcare",
      description: "Patient appointment scheduling and medical inquiries",
      category: "Medical Services",
      audioFile: "/audio/Medical.mpeg",
    },
    {
      title: "Sports",
      description: "Automated appointment scheduling for sports facilities and teams",
      category: "Sports & Fitness",
      audioFile: "/audio/Sports.mpeg",
    },
    // {
    //   title: "Telecom",
    //   description: "Customer support and technical assistance for telecom services",
    //   category: "Telecommunications",
    // },
    {
      title: "Education",
      description: "Handling student inquiries and administrative tasks",
      category: "Educational Institutions",
      audioFile: "/audio/Education.mp3",
    },
    
  ];

  const handlePlayPause = (index: number): void => {
    const demo = demos[index];
    
    if (playingIndex === index) {
      // Pause current audio
      if (audioElements[index]) {
        audioElements[index].pause();
      }
      setPlayingIndex(null);
    } else {
      // Stop any currently playing audio
      if (playingIndex !== null && audioElements[playingIndex]) {
        audioElements[playingIndex].pause();
        audioElements[playingIndex].currentTime = 0;
      }
      
      // Play new audio if available
      if (demo.audioFile) {
        let audio = audioElements[index];
        if (!audio) {
          audio = new Audio(demo.audioFile);
          audio.addEventListener('ended', () => {
            setPlayingIndex(null);
          });
          audio.addEventListener('error', (e) => {
            console.error('Audio error:', e);
            setPlayingIndex(null);
          });
          setAudioElements(prev => ({ ...prev, [index]: audio }));
        }
        
        audio.play().catch((error) => {
          console.error('Error playing audio:', error);
          setPlayingIndex(null);
        });
      }
      
      setPlayingIndex(index);
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 text-gray-900 tracking-tight leading-tight">
            See <span className="text-brand">Hey Mello</span> in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Watch real-world demonstrations of our AI voice agents across different industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {demos.map((demo, index) => (
            <div
              key={index}
              onClick={() => handlePlayPause(index)}
              className="group relative bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-2xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* Video placeholder with play button and wave animation */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-4 overflow-hidden">
                <Image
                  src="/demo_image.jpeg"
                  alt={`${demo.title} AI Voice Agent Demo`}
                  fill
                  className="object-cover scale-125"
                />
                {/* Subtle gradient overlay for better button visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-5"></div>
                <div className="absolute inset-0 z-10 flex items-end justify-end p-3">
                  <div className="relative z-10 rounded-full w-12 h-12 bg-brand/95 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                    {playingIndex === index ? (
                      <div className="flex items-end gap-0.5 h-4">
                        <span className="w-1 rounded-sm bg-white animate-wave-1" style={{animation: 'wave 1s ease-in-out infinite'}}></span>
                        <span className="w-1 rounded-sm bg-white animate-wave-2" style={{animation: 'wave 1s ease-in-out 0.1s infinite'}}></span>
                        <span className="w-1 rounded-sm bg-white animate-wave-3" style={{animation: 'wave 1s ease-in-out 0.2s infinite'}}></span>
                        <span className="w-1 rounded-sm bg-white animate-wave" style={{animation: 'wave 1s ease-in-out 0.3s infinite'}}></span>
                      </div>
                    ) : (
                      <Play className="h-5 w-5 text-white ml-0.5" />
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  {demo.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{demo.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {demo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Demos;
