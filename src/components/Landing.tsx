"use client";

import { useMemo } from "react";
import { QuestionGenerator } from "@/lib/questionGenerator";

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  // Calculate total possible unique questions
  const uniqueCount = useMemo(() => {
    const count = QuestionGenerator.getUniqueQuestionCount();
    if (count >= 1000000000) return `${(count / 1000000000).toFixed(1)}B+`;
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M+`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K+`;
    return count.toString();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Stars Background */}
      <div className="stars-bg absolute inset-0 opacity-60" />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <div className="text-center z-10 max-w-2xl">
        {/* Crystal Ball */}
        <div className="text-9xl mb-8 animate-float crystal-glow inline-block rounded-full p-4">
          🔮
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="shimmer-text">Future You</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
          Discover your hilarious future persona!
        </p>
        <p className="text-lg text-gray-400 mb-12">
          Answer 5 dynamically generated questions and reveal what destiny has
          in store ✨
        </p>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="btn-magic group relative px-12 py-5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold text-xl shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-3">
            <span>Reveal Your Future</span>
            <span className="text-2xl group-hover:rotate-12 transition-transform">
              ✨
            </span>
          </span>
        </button>

        {/* Fun Stats */}
        <div className="mt-16 flex justify-center gap-8 text-gray-400">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">10</div>
            <div className="text-sm">Random Questions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400">
              {uniqueCount}
            </div>
            <div className="text-sm">Unique Combos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">100%</div>
            <div className="text-sm">Fun Guaranteed</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-gray-500 text-sm">
        No login required • Fresh questions every time 🎲
      </div>
    </div>
  );
}
