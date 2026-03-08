"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize, X } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
  className?: string;
}

export default function VideoPlayer({ videoUrl, posterUrl, className = "" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative group ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(isPlaying ? false : true)}
    >
      {/* Video Container with Gradient Border */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm aspect-video">
        {/* Video Element */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-2xl"
          poster={posterUrl}
          onClick={togglePlay}
          onEnded={() => setIsPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Overlay - Shows when paused */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] cursor-pointer"
              onClick={togglePlay}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-24 h-24 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <Play className="w-12 h-12 md:w-10 md:h-10 text-white ml-1" fill="white" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Controls Bar - Shows on hover */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent"
            >
              {/* Progress Bar */}
              <div className="mb-3">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleProgressChange}
                  className="w-full h-1 md:h-1 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 md:[&::-webkit-slider-thumb]:w-3 md:[&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-purple-500 [&::-webkit-slider-thumb]:to-pink-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 md:[&::-moz-range-thumb]:w-3 md:[&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gradient-to-r [&::-moz-range-thumb]:from-purple-500 [&::-moz-range-thumb]:to-pink-500 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, rgba(159, 133, 255, 1) 0%, rgba(207, 122, 201, 1) ${(currentTime / duration) * 50}%, rgba(255, 107, 139, 1) ${(currentTime / duration) * 100}%, rgba(255,255,255,0.2) ${(currentTime / duration) * 100}%)`
                  }}
                />
                <div className="flex justify-between text-xs text-white/70 mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-3">
                {/* Play/Pause Button */}
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 md:w-4 md:h-4 text-white" fill="white" />
                  ) : (
                    <Play className="w-5 h-5 md:w-4 md:h-4 text-white ml-0.5" fill="white" />
                  )}
                </button>

                {/* Volume Control */}
                <div 
                  className="flex items-center gap-2 group/volume"
                  onMouseEnter={() => setShowVolumeSlider(true)}
                  onMouseLeave={() => setShowVolumeSlider(false)}
                >
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-5 h-5 md:w-4 md:h-4 text-white" />
                    ) : (
                      <Volume2 className="w-5 h-5 md:w-4 md:h-4 text-white" />
                    )}
                  </button>
                  
                  {/* Volume Slider */}
                  <AnimatePresence>
                    {showVolumeSlider && (
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 80 }}
                        exit={{ opacity: 0, width: 0 }}
                        className="overflow-hidden"
                      >
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={volume}
                          onChange={handleVolumeChange}
                          className="w-20 h-1 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-purple-500 [&::-webkit-slider-thumb]:to-pink-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-2.5 [&::-moz-range-thumb]:h-2.5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gradient-to-r [&::-moz-range-thumb]:from-purple-500 [&::-moz-range-thumb]:to-pink-500 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                          style={{
                            background: `linear-gradient(to right, rgba(159, 133, 255, 1) 0%, rgba(207, 122, 201, 1) ${volume * 50}%, rgba(255, 107, 139, 1) ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%)`
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex-1" />

                {/* Fullscreen Button */}
                <button
                  onClick={toggleFullscreen}
                  className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <Maximize className="w-5 h-5 md:w-4 md:h-4 text-white" />
                </button>

                {/* Close Button */}
                <button
                  onClick={closeVideo}
                  className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <X className="w-5 h-5 md:w-4 md:h-4 text-white" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gradient Glow Effect */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-xl" />
        </div>
      </div>
    </motion.div>
  );
}
