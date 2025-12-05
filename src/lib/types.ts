export interface QuizQuestion {
  id: number;
  question: string;
  emoji: string;
  options: QuizOption[];
}

export interface QuizOption {
  id: string;
  text: string;
  emoji: string;
  personality: PersonalityTrait;
}

export type PersonalityTrait =
  | "creative"
  | "ambitious"
  | "adventurous"
  | "social"
  | "intellectual"
  | "relaxed";

export interface QuizAnswers {
  [questionId: number]: string;
}

export interface FuturePrediction {
  title: string;
  emoji: string;
  city: string;
  year: number;
  narrative: string;
  trait: string;
  funFact: string;
  personalityScores: PersonalityScore;
}

export interface PersonalityScore {
  creative: number;
  ambitious: number;
  adventurous: number;
  social: number;
  intellectual: number;
  relaxed: number;
}
