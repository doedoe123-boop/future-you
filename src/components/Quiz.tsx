"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { QuizQuestion, QuizAnswers } from "@/lib/types";

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (answers: QuizAnswers) => void;
}

// Calculate year based on progress (2025 -> 2050)
const calculateYear = (
  questionIndex: number,
  totalQuestions: number
): number => {
  const startYear = 2025;
  const endYear = 2050;
  const yearRange = endYear - startYear;
  return Math.round(
    startYear + (questionIndex / (totalQuestions - 1)) * yearRange
  );
};

// Slide theme configurations - each question gets a unique visual theme
const slideThemes = [
  {
    name: "nebula",
    title: "Entering the Nebula",
    bgColor: "from-purple-900/30 to-pink-900/20",
    accent: "#8b5cf6",
  },
  {
    name: "meteor",
    title: "Meteor Shower Zone",
    bgColor: "from-orange-900/20 to-red-900/30",
    accent: "#f97316",
  },
  {
    name: "aurora",
    title: "Aurora Gateway",
    bgColor: "from-cyan-900/30 to-green-900/20",
    accent: "#06b6d4",
  },
  {
    name: "blackhole",
    title: "Black Hole Passage",
    bgColor: "from-gray-900/50 to-purple-900/30",
    accent: "#1f2937",
  },
  {
    name: "galaxy",
    title: "Spiral Galaxy",
    bgColor: "from-indigo-900/30 to-purple-900/30",
    accent: "#6366f1",
  },
  {
    name: "quantum",
    title: "Quantum Field",
    bgColor: "from-blue-900/30 to-cyan-900/20",
    accent: "#3b82f6",
  },
  {
    name: "solar",
    title: "Solar Flare Region",
    bgColor: "from-yellow-900/30 to-orange-900/30",
    accent: "#fbbf24",
  },
  {
    name: "constellation",
    title: "Constellation Bridge",
    bgColor: "from-slate-900/40 to-blue-900/20",
    accent: "#64748b",
  },
  {
    name: "rift",
    title: "Dimension Rift",
    bgColor: "from-violet-900/40 to-fuchsia-900/30",
    accent: "#7c3aed",
  },
  {
    name: "hyperspace",
    title: "Hyperspace Jump",
    bgColor: "from-cyan-900/40 to-blue-900/40",
    accent: "#0891b2",
  },
];

// Generate meteors for meteor shower slide
const generateMeteors = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 50 - 20,
    duration: Math.random() * 2 + 1,
    delay: Math.random() * 3,
    size: Math.random() * 3 + 2,
  }));
};

// Generate quantum particles
const generateQuantumParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 10 + 5,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 2,
    color: ["#8b5cf6", "#ec4899", "#06b6d4", "#fbbf24"][
      Math.floor(Math.random() * 4)
    ],
  }));
};

// Generate constellation stars
const generateConstellationStars = () => {
  const stars = [
    { x: 20, y: 20 },
    { x: 35, y: 15 },
    { x: 50, y: 25 },
    { x: 65, y: 10 },
    { x: 80, y: 30 },
    { x: 25, y: 60 },
    { x: 45, y: 70 },
    { x: 70, y: 65 },
    { x: 85, y: 75 },
    { x: 15, y: 85 },
    { x: 55, y: 90 },
    { x: 90, y: 85 },
  ];
  return stars.map((star, i) => ({
    ...star,
    id: i,
    duration: Math.random() * 2 + 1,
    delay: Math.random() * 1,
  }));
};

// Generate hyperspace rings
const generateHyperspaceRings = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: 50 + i * 80,
    duration: 0.5 + i * 0.2,
    delay: i * 0.1,
    color: i % 2 === 0 ? "rgba(6, 182, 212, 0.5)" : "rgba(139, 92, 246, 0.5)",
  }));
};

export default function Quiz({ questions, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardState, setCardState] = useState<"idle" | "exit" | "enter">("idle");
  const [displayedYear, setDisplayedYear] = useState(2025);
  const [isYearFlipping, setIsYearFlipping] = useState(false);
  const [warpFlash, setWarpFlash] = useState(false);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const speedMultiplier = 1 + (currentQuestion / questions.length) * 2;
  const currentTheme = slideThemes[currentQuestion % slideThemes.length];

  // Calculate current year
  const currentYear = calculateYear(currentQuestion, questions.length);

  // Generate visual elements for each theme
  const meteors = useMemo(() => generateMeteors(8), []);
  const quantumParticles = useMemo(() => generateQuantumParticles(15), []);
  const constellationStars = useMemo(() => generateConstellationStars(), []);
  const hyperspaceRings = useMemo(() => generateHyperspaceRings(8), []);

  // Update year with animation when question changes
  useEffect(() => {
    if (displayedYear !== currentYear) {
      const rafId = requestAnimationFrame(() => {
        setIsYearFlipping(true);
      });
      const timeout = setTimeout(() => {
        setDisplayedYear(currentYear);
        setIsYearFlipping(false);
      }, 300);
      return () => {
        cancelAnimationFrame(rafId);
        clearTimeout(timeout);
      };
    }
  }, [currentYear, displayedYear]);

  // Play whoosh sound on transition
  const playWhoosh = useCallback(() => {
    try {
      const audioContext = new (window.AudioContext ||
        (window as typeof window & { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(150, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(
        50,
        audioContext.currentTime + 0.3
      );

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.3
      );

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch {
      // Audio not supported or blocked
    }
  }, []);

  const handleSelect = (optionId: string) => {
    if (isTransitioning) return;

    setSelectedOption(optionId);
    setIsTransitioning(true);
    setWarpFlash(true);
    playWhoosh();

    const newAnswers = { ...answers, [question.id]: optionId };
    setAnswers(newAnswers);

    setTimeout(() => {
      setCardState("exit");
      setWarpFlash(false);
    }, 200);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setCardState("enter");
      } else {
        onComplete(newAnswers);
      }
    }, 600);

    setTimeout(() => {
      setCardState("idle");
      setIsTransitioning(false);
    }, 1100);
  };

  // Render unique background based on current theme
  const renderThemeBackground = () => {
    switch (currentTheme.name) {
      case "nebula":
        return (
          <div className="fixed inset-0 pointer-events-none z-0">
            <div
              className="absolute inset-0 slide-nebula"
              style={{
                width: "200%",
                height: "200%",
                top: "-50%",
                left: "-50%",
              }}
            />
          </div>
        );

      case "meteor":
        return (
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {meteors.map((meteor) => (
              <div
                key={meteor.id}
                className="meteor"
                style={{
                  left: `${meteor.left}%`,
                  top: `${meteor.top}%`,
                  width: `${meteor.size}px`,
                  height: `${meteor.size * 20}px`,
                  animationDuration: `${meteor.duration}s`,
                  animationDelay: `${meteor.delay}s`,
                }}
              />
            ))}
          </div>
        );

      case "aurora":
        return (
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="aurora" />
            <div
              className="aurora"
              style={{ animationDelay: "2s", opacity: 0.5 }}
            />
          </div>
        );

      case "blackhole":
        return (
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="blackhole" />
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="blackhole-ring"
                style={{
                  width: 120 + i * 50,
                  height: 80 + i * 30,
                  marginLeft: -(60 + i * 25),
                  marginTop: -(40 + i * 15),
                  animationDuration: `${3 + i}s`,
                }}
              />
            ))}
          </div>
        );

      case "galaxy":
        return (
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="galaxy" />
            <div
              className="galaxy"
              style={{
                width: "250px",
                height: "250px",
                animationDuration: "20s",
                animationDirection: "reverse",
              }}
            />
          </div>
        );

      case "quantum":
        return (
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {quantumParticles.map((particle) => (
              <div
                key={particle.id}
                className="quantum-particle"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  backgroundColor: particle.color,
                  boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                  animationDuration: `${particle.duration}s`,
                  animationDelay: `${particle.delay}s`,
                }}
              />
            ))}
          </div>
        );

      case "solar":
        return (
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="solar-flare" />
            <div
              className="solar-flare"
              style={{
                animationDelay: "2s",
                left: "30%",
                width: "200px",
                height: "200px",
              }}
            />
            <div
              className="solar-flare"
              style={{
                animationDelay: "1s",
                left: "70%",
                width: "250px",
                height: "250px",
              }}
            />
          </div>
        );

      case "constellation":
        return (
          <div className="fixed inset-0 pointer-events-none z-0">
            {constellationStars.map((star) => (
              <div
                key={star.id}
                className="constellation-star"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  animationDuration: `${star.duration}s`,
                  animationDelay: `${star.delay}s`,
                }}
              />
            ))}
            {/* Connect some stars with lines */}
            <svg className="absolute inset-0 w-full h-full opacity-30">
              <line
                x1="20%"
                y1="20%"
                x2="35%"
                y2="15%"
                stroke="white"
                strokeWidth="1"
              />
              <line
                x1="35%"
                y1="15%"
                x2="50%"
                y2="25%"
                stroke="white"
                strokeWidth="1"
              />
              <line
                x1="50%"
                y1="25%"
                x2="65%"
                y2="10%"
                stroke="white"
                strokeWidth="1"
              />
              <line
                x1="65%"
                y1="10%"
                x2="80%"
                y2="30%"
                stroke="white"
                strokeWidth="1"
              />
              <line
                x1="25%"
                y1="60%"
                x2="45%"
                y2="70%"
                stroke="white"
                strokeWidth="1"
              />
              <line
                x1="45%"
                y1="70%"
                x2="70%"
                y2="65%"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
          </div>
        );

      case "rift":
        return (
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="dimension-rift" />
          </div>
        );

      case "hyperspace":
        return (
          <div
            className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
            style={{ perspective: "500px" }}
          >
            {hyperspaceRings.map((ring) => (
              <div
                key={ring.id}
                className="hyperspace-ring"
                style={{
                  width: ring.size,
                  height: ring.size,
                  borderColor: ring.color,
                  animationDuration: `${ring.duration}s`,
                  animationDelay: `${ring.delay}s`,
                }}
              />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden bg-gradient-to-br ${
        currentTheme.bgColor
      } ${warpFlash ? "warp-flash" : ""}`}
    >
      {/* Theme-specific background */}
      {renderThemeBackground()}

      {/* Zone indicator */}
      <div className="fixed top-4 right-4 z-30">
        <div
          className="px-4 py-2 rounded-full text-xs font-medium backdrop-blur-sm border"
          style={{
            backgroundColor: `${currentTheme.accent}20`,
            borderColor: `${currentTheme.accent}50`,
            color: currentTheme.accent,
          }}
        >
          🌌 {currentTheme.title}
        </div>
      </div>

      {/* Year Display */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-20">
        <div className="text-center">
          <div className="text-sm text-purple-400 mb-1 tracking-widest">
            TRAVELING TO
          </div>
          <div className="year-display">
            <span
              className={`text-6xl md:text-7xl font-bold shimmer-text ${
                isYearFlipping ? "year-flip" : ""
              }`}
            >
              {displayedYear}
            </span>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            {currentQuestion + 1} / {questions.length} dimensions crossed
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md mb-8 mt-24 z-10">
        <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
          <div
            className="h-full progress-bar rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>🌍 2025</span>
          <span>🚀 2050</span>
        </div>
      </div>

      {/* Question Card */}
      <div
        className={`card-mystical rounded-3xl p-8 w-full max-w-md z-10 ${
          cardState === "exit"
            ? "card-exit"
            : cardState === "enter"
            ? "card-enter"
            : ""
        }`}
      >
        <div className="text-center mb-8">
          <span className="text-6xl mb-4 block animate-float">
            {question.emoji}
          </span>
          <h2 className="text-2xl font-bold text-white leading-relaxed">
            {question.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={isTransitioning}
              style={{ animationDelay: `${index * 0.1}s` }}
              className={`w-full p-4 rounded-2xl text-left transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                selectedOption === option.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 scale-[1.02]"
                  : "bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 hover:border-purple-500/50"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{option.emoji}</span>
                <span className="text-lg">{option.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Speed Indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Warp Speed:</span>
          <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-4 rounded-sm transition-all duration-300 ${
                  i < Math.ceil((currentQuestion / questions.length) * 5)
                    ? "bg-gradient-to-t from-purple-600 to-cyan-400"
                    : "bg-gray-700"
                }`}
              />
            ))}
          </div>
          <span className="text-cyan-400">{speedMultiplier.toFixed(1)}x</span>
        </div>
      </div>
    </div>
  );
}
