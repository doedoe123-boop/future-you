"use client";

import { useState } from "react";
import Landing from "@/components/Landing";
import Quiz from "@/components/Quiz";
import Result from "@/components/Result";
import { generateDynamicQuestions } from "@/lib/questionGenerator";
import { generateFuturePrediction } from "@/lib/futureGenerator";
import { QuizAnswers, FuturePrediction, QuizQuestion } from "@/lib/types";

type AppState = "landing" | "quiz" | "result";

export default function Home() {
  const [appState, setAppState] = useState<AppState>("landing");
  const [prediction, setPrediction] = useState<FuturePrediction | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>(() =>
    generateDynamicQuestions(10)
  );

  const handleStartQuiz = () => {
    setAppState("quiz");
  };

  const handleQuizComplete = (answers: QuizAnswers) => {
    const result = generateFuturePrediction(answers);
    setPrediction(result);
    setAppState("result");
  };

  const handleRetry = () => {
    setPrediction(null);
    setQuestions(generateDynamicQuestions(10)); // Generate new questions for next quiz
    setAppState("landing");
  };

  return (
    <main className="min-h-screen">
      {appState === "landing" && <Landing onStart={handleStartQuiz} />}

      {appState === "quiz" && (
        <Quiz questions={questions} onComplete={handleQuizComplete} />
      )}

      {appState === "result" && prediction && (
        <Result prediction={prediction} onRetry={handleRetry} />
      )}
    </main>
  );
}
