import {
  QuizAnswers,
  FuturePrediction,
  PersonalityScore,
  PersonalityTrait,
} from "./types";
import { quizQuestions } from "./quizData";

// Fun job titles based on personality
const jobTitles: Record<PersonalityTrait, string[]> = {
  creative: [
    "Holographic Meme Designer",
    "AI Art Curator",
    "Virtual Reality Architect",
    "Metaverse Fashion Designer",
    "Space Graffiti Artist",
    "Neural Dream Composer",
  ],
  ambitious: [
    "CEO of Bubble Tea on Mars",
    "Galactic Real Estate Mogul",
    "Chief Vibes Officer at Tesla Moon",
    "Crypto Llama Investor",
    "Mars Colony President",
    "Intergalactic Startup Founder",
  ],
  adventurous: [
    "Professional Volcano Surfer",
    "Time-Traveling Tour Guide",
    "Alien Safari Leader",
    "Deep Space Explorer",
    "Underwater City Developer",
    "Dimension Hopping Influencer",
  ],
  social: [
    "TikTok Dance Legend",
    "Millionaire Cat Influencer",
    "Professional Party Planner for Robots",
    "Viral Trend Forecaster",
    "Intergalactic Event Host",
    "Celebrity Pet Matchmaker",
  ],
  intellectual: [
    "Quantum Computing Philosopher",
    "AI Ethics Professor",
    "Time Paradox Researcher",
    "Multiverse Mathematician",
    "Robot Psychology Therapist",
    "Alien Language Translator",
  ],
  relaxed: [
    "Professional Nap Consultant",
    "Floating Spa Owner on Venus",
    "Chief Relaxation Officer",
    "Meditation App Billionaire",
    "Cloud Bed Designer",
    "Zero-Gravity Yoga Instructor",
  ],
};

// Fun cities
const cities = [
  "Neo Tokyo",
  "Mars City Alpha",
  "Floating Dubai",
  "Underwater Seoul",
  "Sky Paris",
  "Virtual Singapore",
  "Moon Base Omega",
  "Crystal Berlin",
  "Hovering Amsterdam",
  "Cyber Mumbai",
];

// Pet companions
const pets = [
  "pet alpaca",
  "robot corgi",
  "holographic cat",
  "miniature dragon",
  "telepathic hamster",
  "talking parrot AI",
  "floating jellyfish",
  "cyber fox",
  "quantum goldfish",
  "invisible unicorn",
];

// Fun facts / quirks
const funFacts = [
  "You invented a new emoji that went viral.",
  "Your morning routine involves zero gravity yoga.",
  "You're famous for your collection of vintage memes.",
  "Your autobiography became a best-seller on three planets.",
  "You accidentally started a new religion based on pizza.",
  "Your pet has more followers than you.",
  "You hold the record for longest nap in space.",
  "You discovered a new color that humans can finally see.",
  "Your catchphrase is quoted by robots everywhere.",
  "You're still using the same phone case from 2024.",
];

// Personality-based narrative templates
const narrativeTemplates: Record<PersonalityTrait, string[]> = {
  creative: [
    "Your imagination finally paid off when your art became the official currency of {city}.",
    "After years of doodling, you created a masterpiece that made AI jealous.",
    "Your creative genius led to inventing a new form of entertainment that replaced sleep.",
  ],
  ambitious: [
    "You climbed to the top so fast, elevators were named after you.",
    "Your hustle was so legendary, success started hustling to keep up with you.",
    "You turned your side hustle into the main hustle of an entire galaxy.",
  ],
  adventurous: [
    "You explored so many places, Google Maps started asking YOU for directions.",
    "Your passport has more stamps than the postal service.",
    "You discovered three new species, and two of them are now your business partners.",
  ],
  social: [
    "Your network is so vast, you have friends in dimensions that don't exist yet.",
    "You threw a party so epic, it lasted three years and became a national holiday.",
    "Your follower count broke the internet... twice.",
  ],
  intellectual: [
    "You solved problems so complex, the problems thanked you personally.",
    "Your brain became a UNESCO World Heritage Site.",
    'You published research that made even AI go "wow, I didn\'t think of that."',
  ],
  relaxed: [
    "Your chill energy was so powerful, you ended three wars by just vibing.",
    "You mastered the art of doing nothing so well, productivity experts study you.",
    "Your relaxation techniques are now taught in schools across the solar system.",
  ],
};

function calculatePersonalityScore(answers: QuizAnswers): PersonalityScore {
  const score: PersonalityScore = {
    creative: 0,
    ambitious: 0,
    adventurous: 0,
    social: 0,
    intellectual: 0,
    relaxed: 0,
  };

  Object.entries(answers).forEach(([questionId, optionId]) => {
    const question = quizQuestions.find((q) => q.id === parseInt(questionId));
    if (question) {
      const selectedOption = question.options.find((o) => o.id === optionId);
      if (selectedOption) {
        score[selectedOption.personality] += 1;
      }
    }
  });

  return score;
}

function getDominantTrait(score: PersonalityScore): PersonalityTrait {
  const entries = Object.entries(score) as [PersonalityTrait, number][];

  // Add some randomness if there's a tie
  const maxScore = Math.max(...entries.map(([, v]) => v));
  const topTraits = entries.filter(([, v]) => v === maxScore);

  // Pick randomly from top traits
  const randomIndex = Math.floor(Math.random() * topTraits.length);
  return topTraits[randomIndex][0];
}

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function generateFuturePrediction(
  answers: QuizAnswers
): FuturePrediction {
  const score = calculatePersonalityScore(answers);
  const dominantTrait = getDominantTrait(score);

  const title = getRandomItem(jobTitles[dominantTrait]);
  const city = getRandomItem(cities);
  const pet = getRandomItem(pets);
  const funFact = getRandomItem(funFacts);
  const narrativeTemplate = getRandomItem(narrativeTemplates[dominantTrait]);

  const year = 2030 + Math.floor(Math.random() * 20); // 2030-2050

  const narrative =
    `In ${year}, you become the **${title}** based in ${city}. ` +
    narrativeTemplate.replace("{city}", city) +
    ` You live with your ${pet}, who has become internet famous. ` +
    `${funFact} People describe you as "${dominantTrait}" but you prefer "legendary." 😎✨`;

  // Emoji based on trait
  const emojiMap: Record<PersonalityTrait, string> = {
    creative: "🎨",
    ambitious: "👑",
    adventurous: "🚀",
    social: "🌟",
    intellectual: "🧠",
    relaxed: "😌",
  };

  return {
    title,
    emoji: emojiMap[dominantTrait],
    city,
    year,
    narrative,
    trait: dominantTrait,
    funFact,
    personalityScores: score,
  };
}
