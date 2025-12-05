"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import confetti from "canvas-confetti";
import { FuturePrediction, PersonalityScore } from "@/lib/types";

interface ResultProps {
  prediction: FuturePrediction;
  onRetry: () => void;
}

// Radar Chart Component
function PersonalityRadar({ scores }: { scores: PersonalityScore }) {
  const traits = [
    { key: "creative", label: "Creative", color: "#ec4899" },
    { key: "ambitious", label: "Ambitious", color: "#f59e0b" },
    { key: "adventurous", label: "Adventurous", color: "#10b981" },
    { key: "social", label: "Social", color: "#3b82f6" },
    { key: "intellectual", label: "Intellectual", color: "#8b5cf6" },
    { key: "relaxed", label: "Relaxed", color: "#06b6d4" },
  ];

  const maxScore = Math.max(...Object.values(scores), 1);
  const centerX = 150;
  const centerY = 150;
  const maxRadius = 100;

  // Calculate points for the polygon
  const points = traits.map((trait, i) => {
    const angle = (Math.PI * 2 * i) / traits.length - Math.PI / 2;
    const value = scores[trait.key as keyof PersonalityScore] || 0;
    const radius = (value / maxScore) * maxRadius;
    return {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
      labelX: centerX + Math.cos(angle) * (maxRadius + 30),
      labelY: centerY + Math.sin(angle) * (maxRadius + 30),
      ...trait,
      value,
    };
  });

  const polygonPoints = points.map((p) => `${p.x},${p.y}`).join(" ");

  // Grid lines
  const gridLevels = [0.25, 0.5, 0.75, 1];

  return (
    <div className="flex flex-col items-center">
      <svg width="300" height="300" className="overflow-visible">
        {/* Background grid */}
        {gridLevels.map((level, i) => (
          <polygon
            key={i}
            points={traits
              .map((_, j) => {
                const angle = (Math.PI * 2 * j) / traits.length - Math.PI / 2;
                const r = maxRadius * level;
                return `${centerX + Math.cos(angle) * r},${
                  centerY + Math.sin(angle) * r
                }`;
              })
              .join(" ")}
            fill="none"
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="1"
          />
        ))}

        {/* Axis lines */}
        {traits.map((_, i) => {
          const angle = (Math.PI * 2 * i) / traits.length - Math.PI / 2;
          return (
            <line
              key={i}
              x1={centerX}
              y1={centerY}
              x2={centerX + Math.cos(angle) * maxRadius}
              y2={centerY + Math.sin(angle) * maxRadius}
              stroke="rgba(139, 92, 246, 0.3)"
              strokeWidth="1"
            />
          );
        })}

        {/* Data polygon */}
        <polygon
          points={polygonPoints}
          fill="url(#radarGradient)"
          stroke="rgba(139, 92, 246, 0.8)"
          strokeWidth="2"
          className="animate-pulse-glow"
          style={{ animationDuration: "3s" }}
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient
            id="radarGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.4)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.4)" />
          </linearGradient>
        </defs>

        {/* Data points */}
        {points.map((point, i) => (
          <g key={i}>
            <circle
              cx={point.x}
              cy={point.y}
              r="6"
              fill={point.color}
              className="drop-shadow-lg"
            />
            <circle cx={point.x} cy={point.y} r="3" fill="white" />
          </g>
        ))}

        {/* Labels */}
        {points.map((point, i) => (
          <text
            key={i}
            x={point.labelX}
            y={point.labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-xs fill-gray-300 font-medium"
          >
            {point.label}
          </text>
        ))}
      </svg>

      {/* Score breakdown */}
      <div className="grid grid-cols-3 gap-2 mt-4 w-full">
        {points.map((point) => (
          <div
            key={point.key}
            className="text-center p-2 rounded-lg bg-white/5"
          >
            <div className="text-lg font-bold" style={{ color: point.color }}>
              {point.value}
            </div>
            <div className="text-xs text-gray-400">{point.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Rocket SVG Component
function RocketShip({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 160"
      className={className}
      style={{ filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.8))" }}
    >
      {/* Rocket body */}
      <path
        d="M50 10 C30 30 25 60 25 90 L25 120 L75 120 L75 90 C75 60 70 30 50 10 Z"
        fill="url(#rocketBody)"
        stroke="#8b5cf6"
        strokeWidth="2"
      />
      {/* Window */}
      <circle
        cx="50"
        cy="55"
        r="12"
        fill="#0f172a"
        stroke="#06b6d4"
        strokeWidth="2"
      />
      <circle cx="50" cy="55" r="8" fill="#1e293b" />
      <circle cx="47" cy="52" r="3" fill="rgba(6, 182, 212, 0.5)" />
      {/* Fins */}
      <path
        d="M25 100 L10 130 L25 120 Z"
        fill="#ec4899"
        stroke="#f472b6"
        strokeWidth="1"
      />
      <path
        d="M75 100 L90 130 L75 120 Z"
        fill="#ec4899"
        stroke="#f472b6"
        strokeWidth="1"
      />
      {/* Bottom */}
      <rect x="35" y="120" width="30" height="10" fill="#374151" />
      <rect x="40" y="130" width="20" height="5" fill="#1f2937" />
      {/* Exhaust nozzle */}
      <path
        d="M42 135 L50 160 L58 135 Z"
        fill="#fbbf24"
        className="rocket-exhaust"
      />
      <path
        d="M45 135 L50 150 L55 135 Z"
        fill="#f97316"
        className="rocket-exhaust"
      />
      <defs>
        <linearGradient id="rocketBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Generate smoke particles
const generateSmokeParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 45 + Math.random() * 10,
    delay: Math.random() * 0.5,
    size: 20 + Math.random() * 30,
    duration: 1 + Math.random() * 0.5,
  }));
};

// Generate warp stars
const generateWarpStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
  }));
};

export default function Result({ prediction, onRetry }: ResultProps) {
  const hasConfetti = useRef(false);
  const [showContent, setShowContent] = useState(false);
  const [launchPhase, setLaunchPhase] = useState<
    "countdown" | "launch" | "warp" | "arriving" | "revealed"
  >("countdown");
  const [countdown, setCountdown] = useState(3);
  const smokeParticles = useRef(generateSmokeParticles(15));
  const warpStars = useRef(generateWarpStars(50));

  // Play launch sound
  const playLaunchSound = useCallback(() => {
    try {
      const audioContext = new (window.AudioContext ||
        (window as typeof window & { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext)();

      // Create rumble
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.type = "sawtooth";
      oscillator.frequency.setValueAtTime(50, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(
        200,
        audioContext.currentTime + 0.5
      );
      oscillator.frequency.exponentialRampToValueAtTime(
        1000,
        audioContext.currentTime + 2
      );

      gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.3,
        audioContext.currentTime + 0.5
      );
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 2.5
      );

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 2.5);
    } catch {
      // Audio not supported
    }
  }, []);

  // Countdown effect
  useEffect(() => {
    if (launchPhase === "countdown" && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 800);
      return () => clearTimeout(timer);
    } else if (launchPhase === "countdown" && countdown === 0) {
      setLaunchPhase("launch");
      playLaunchSound();
    }
  }, [countdown, launchPhase, playLaunchSound]);

  // Launch sequence
  useEffect(() => {
    if (launchPhase === "launch") {
      const warpTimer = setTimeout(() => {
        setLaunchPhase("warp");
      }, 2000);
      return () => clearTimeout(warpTimer);
    }

    if (launchPhase === "warp") {
      const arrivingTimer = setTimeout(() => {
        setLaunchPhase("arriving");
      }, 2000);
      return () => clearTimeout(arrivingTimer);
    }

    if (launchPhase === "arriving") {
      const revealTimer = setTimeout(() => {
        setLaunchPhase("revealed");
        setShowContent(true);
      }, 1500);
      return () => clearTimeout(revealTimer);
    }
  }, [launchPhase]);

  useEffect(() => {
    if (showContent && !hasConfetti.current) {
      hasConfetti.current = true;

      // Play arrival sound
      try {
        const audioContext = new (window.AudioContext ||
          (
            window as typeof window & {
              webkitAudioContext: typeof AudioContext;
            }
          ).webkitAudioContext)();

        // Create a magical arrival sound
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(
          800,
          audioContext.currentTime + 0.5
        );
        oscillator.frequency.exponentialRampToValueAtTime(
          400,
          audioContext.currentTime + 1
        );

        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(
          0.01,
          audioContext.currentTime + 1
        );

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 1);
      } catch {
        // Audio not supported
      }

      // Fire confetti burst
      const colors = ["#8b5cf6", "#ec4899", "#06b6d4", "#fbbf24", "#10b981"];

      // Initial burst
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 },
        colors: colors,
      });

      // Continuous celebration
      const duration = 3000;
      const end = Date.now() + duration;

      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.8 },
          colors: colors,
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.8 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  }, [showContent]);

  const shareText = `🔮 I just discovered my future self!\n\n${prediction.emoji} ${prediction.title}\n📍 ${prediction.city} • ${prediction.year}\n\nFind out YOUR future: `;

  const shareUrl = typeof window !== "undefined" ? window.location.origin : "";

  const handleShare = (platform: string) => {
    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(shareUrl);

    let url = "";

    switch (platform) {
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodeURIComponent(
          "My Future Self!"
        )}&summary=${encodedText}`;
        break;
      case "copy":
        navigator.clipboard.writeText(`${shareText}${shareUrl}`);
        alert("Copied to clipboard! 📋");
        return;
    }

    if (url) {
      window.open(url, "_blank", "width=600,height=400");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Countdown Phase */}
      {launchPhase === "countdown" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
          <div className="text-center">
            <div className="text-gray-400 text-xl mb-8 tracking-widest">
              INITIATING TIME JUMP
            </div>
            <div
              className="text-9xl font-bold shimmer-text countdown-number"
              key={countdown}
            >
              {countdown === 0 ? "🚀" : countdown}
            </div>
            <div className="mt-8 text-purple-400">Prepare for launch...</div>
          </div>
        </div>
      )}

      {/* Launch Phase */}
      {launchPhase === "launch" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background launch-screen-shake">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-500/30 to-transparent" />

          {/* Smoke particles */}
          {smokeParticles.current.map((particle) => (
            <div
              key={particle.id}
              className="rocket-smoke"
              style={{
                left: `${particle.x}%`,
                bottom: "10%",
                width: particle.size,
                height: particle.size,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}

          {/* The rocket */}
          <div className="relative rocket-launching">
            <RocketShip className="w-24 h-40" />
            {/* Exhaust flames */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-8 h-16 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 rounded-full blur-sm rocket-exhaust-fire" />
              <div className="w-12 h-24 bg-gradient-to-b from-orange-400 via-red-500 to-transparent rounded-full blur-md -mt-8 rocket-exhaust-fire" />
            </div>
          </div>

          <div className="absolute bottom-20 text-center">
            <div className="text-2xl font-bold text-orange-400">
              LIFTOFF! 🚀
            </div>
            <div className="text-gray-400">Traveling to the future...</div>
          </div>
        </div>
      )}

      {/* Warp Phase */}
      {launchPhase === "warp" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden">
          {/* Warp stars */}
          {warpStars.current.map((star) => (
            <div
              key={star.id}
              className="warp-star"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size * 50,
                animationDelay: `${star.delay * 0.1}s`,
              }}
            />
          ))}

          {/* Central tunnel effect */}
          <div className="relative">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 rounded-full border-2 warp-ring"
                style={{
                  width: 100 + i * 80,
                  height: 100 + i * 80,
                  marginLeft: -(50 + i * 40),
                  marginTop: -(50 + i * 40),
                  borderColor:
                    i % 2 === 0
                      ? "rgba(6, 182, 212, 0.5)"
                      : "rgba(139, 92, 246, 0.5)",
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
            <div className="text-6xl relative z-10">{prediction.emoji}</div>
          </div>

          <div className="absolute bottom-20 text-center">
            <div className="text-2xl font-bold shimmer-text">
              ENTERING HYPERSPACE
            </div>
            <div className="text-cyan-400">
              Year {prediction.year} approaching...
            </div>
          </div>
        </div>
      )}

      {/* Arrival Phase */}
      {launchPhase === "arriving" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
          <div className="text-center">
            {/* Portal rings */}
            <div className="relative w-64 h-64 mx-auto mb-8">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 rounded-full border-2 arrival-burst"
                  style={{
                    width: 50 + i * 40,
                    height: 50 + i * 40,
                    marginLeft: -(25 + i * 20),
                    marginTop: -(25 + i * 20),
                    borderColor: `rgba(139, 92, 246, ${0.8 - i * 0.15})`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl">
                {prediction.emoji}
              </div>
            </div>
            <div className="text-2xl font-bold shimmer-text">
              Arriving in {prediction.year}...
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`transition-all duration-1000 ${
          showContent
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-10"
        }`}
      >
        {/* Year Banner */}
        <div className="text-center mb-8">
          <div className="text-sm text-purple-400 tracking-widest mb-2">
            WELCOME TO
          </div>
          <div className="text-5xl md:text-6xl font-bold shimmer-text">
            {prediction.year}
          </div>
        </div>

        {/* Result Card */}
        <div className="card-mystical rounded-3xl p-8 w-full max-w-lg text-center crystal-glow">
          {/* Avatar / Emoji */}
          <div className="text-8xl mb-6 animate-float">{prediction.emoji}</div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold shimmer-text mb-4">
            {prediction.title}
          </h1>

          {/* Location & Year */}
          <div className="flex items-center justify-center gap-4 text-gray-400 mb-6">
            <span className="flex items-center gap-2">
              <span>📍</span> {prediction.city}
            </span>
            <span className="flex items-center gap-2">
              <span>📅</span> {prediction.year}
            </span>
          </div>

          {/* Narrative */}
          <div className="bg-white/5 rounded-2xl p-6 mb-8 text-left">
            <p
              className="text-gray-200 leading-relaxed text-lg"
              dangerouslySetInnerHTML={{
                __html: prediction.narrative.replace(
                  /\*\*(.*?)\*\*/g,
                  '<strong class="text-purple-400">$1</strong>'
                ),
              }}
            />
          </div>

          {/* Personality Radar Chart */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">
              Your Personality DNA
            </h3>
            <PersonalityRadar scores={prediction.personalityScores} />
          </div>

          {/* Personality Trait Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/30 mb-8">
            <span className="text-purple-300 font-medium capitalize">
              ✨ Dominant Trait: {prediction.trait}
            </span>
          </div>

          {/* Share Buttons */}
          <div className="mb-8">
            <p className="text-gray-400 mb-4">
              Share your future with friends!
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <button
                onClick={() => handleShare("twitter")}
                className="btn-magic px-6 py-3 rounded-full bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white font-medium transition-all"
              >
                𝕏 Twitter
              </button>
              <button
                onClick={() => handleShare("facebook")}
                className="btn-magic px-6 py-3 rounded-full bg-[#4267B2] hover:bg-[#365899] text-white font-medium transition-all"
              >
                📘 Facebook
              </button>
              <button
                onClick={() => handleShare("copy")}
                className="btn-magic px-6 py-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white font-medium transition-all"
              >
                📋 Copy Link
              </button>
            </div>
          </div>

          {/* Retry Button */}
          <button
            onClick={onRetry}
            className="btn-magic w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-lg shadow-lg shadow-purple-500/30 transition-all"
          >
            🔮 Travel to Another Future
          </button>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="stars-bg absolute inset-0 opacity-50" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      </div>
    </div>
  );
}
