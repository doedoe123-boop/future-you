import { QuizQuestion, QuizOption, PersonalityTrait } from "./types";

// Seeded random number generator for reproducibility
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  next(): number {
    this.seed = (this.seed * 1103515245 + 12345) & 0x7fffffff;
    return this.seed / 0x7fffffff;
  }

  pick<T>(array: T[]): T {
    return array[Math.floor(this.next() * array.length)];
  }

  shuffle<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(this.next() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
}

// Question template types
type QuestionCategory =
  | "scenario"
  | "preference"
  | "hypothetical"
  | "wouldYouRather"
  | "personality"
  | "lifestyle";

interface QuestionTemplate {
  template: string;
  emoji: string;
  category: QuestionCategory;
  variables: string[];
}

interface AnswerTemplate {
  template: string;
  emoji: string;
  personality: PersonalityTrait;
}

// ============================================
// QUESTION TEMPLATES - Mix and match for variety
// ============================================

const questionTemplates: QuestionTemplate[] = [
  // Scenario-based
  {
    template: "It's {timeOfDay}. What are you most likely doing?",
    emoji: "🌙",
    category: "scenario",
    variables: ["timeOfDay"],
  },
  {
    template: "You have a free {timePeriod}. How do you spend it?",
    emoji: "⏰",
    category: "scenario",
    variables: ["timePeriod"],
  },
  {
    template: "You're at a {place}. What catches your attention first?",
    emoji: "👀",
    category: "scenario",
    variables: ["place"],
  },
  {
    template: "Your friend invites you to a {event}. Your reaction?",
    emoji: "💬",
    category: "scenario",
    variables: ["event"],
  },
  {
    template:
      "You find a {magicItem} that grants one wish. What do you wish for?",
    emoji: "✨",
    category: "hypothetical",
    variables: ["magicItem"],
  },

  // Preference-based
  {
    template: "Which {category} describes you best?",
    emoji: "🎯",
    category: "preference",
    variables: ["category"],
  },
  {
    template: "Pick your ideal {thingToChoose}:",
    emoji: "💫",
    category: "preference",
    variables: ["thingToChoose"],
  },
  {
    template: "What's your go-to {activity} style?",
    emoji: "🎨",
    category: "preference",
    variables: ["activity"],
  },

  // Hypothetical
  {
    template: "If you could master any {skill}, which would it be?",
    emoji: "🏆",
    category: "hypothetical",
    variables: ["skill"],
  },
  {
    template: "You wake up with the power to {superpower}. First thing you do?",
    emoji: "⚡",
    category: "hypothetical",
    variables: ["superpower"],
  },
  {
    template: "A {character} offers you a deal. What do you ask for?",
    emoji: "🎭",
    category: "hypothetical",
    variables: ["character"],
  },
  {
    template: "You inherit a {inheritance}. What's your move?",
    emoji: "🎁",
    category: "hypothetical",
    variables: ["inheritance"],
  },
  {
    template: "If you could live in any {setting}, where would it be?",
    emoji: "🏠",
    category: "hypothetical",
    variables: ["setting"],
  },

  // Would you rather style
  {
    template: "At a crossroads: which path calls to you?",
    emoji: "🔮",
    category: "wouldYouRather",
    variables: [],
  },
  {
    template: "The universe asks: what's your priority?",
    emoji: "🌌",
    category: "wouldYouRather",
    variables: [],
  },
  {
    template: "Choose your destiny:",
    emoji: "⭐",
    category: "wouldYouRather",
    variables: [],
  },

  // Personality probes
  {
    template: "When facing a {challenge}, you typically...",
    emoji: "💪",
    category: "personality",
    variables: ["challenge"],
  },
  {
    template: "Your friends would describe you as...",
    emoji: "👥",
    category: "personality",
    variables: [],
  },
  {
    template: "In a group project, you're usually the one who...",
    emoji: "🤝",
    category: "personality",
    variables: [],
  },
  {
    template: "Your {possession} says a lot about you. What is it?",
    emoji: "🎒",
    category: "personality",
    variables: ["possession"],
  },

  // Lifestyle
  {
    template: "Your ideal {meal} looks like...",
    emoji: "🍽️",
    category: "lifestyle",
    variables: ["meal"],
  },
  {
    template: "On vacation, you're most excited about...",
    emoji: "🏖️",
    category: "lifestyle",
    variables: [],
  },
  {
    template: "Your {room} aesthetic is...",
    emoji: "🏡",
    category: "lifestyle",
    variables: ["room"],
  },
  {
    template: "You've got {money}. How do you spend it?",
    emoji: "💰",
    category: "lifestyle",
    variables: ["money"],
  },
];

// ============================================
// VARIABLE POOLS - For template substitution
// ============================================

const variablePools: Record<string, string[]> = {
  timeOfDay: [
    "Friday night",
    "Sunday morning",
    "a random Tuesday afternoon",
    "3 AM and you can't sleep",
    "the first day of summer",
    "New Year's Eve",
    "a rainy Saturday",
    "your birthday morning",
    "the last day before vacation",
    "a peaceful holiday",
  ],
  timePeriod: [
    "weekend",
    "week off",
    "day with no responsibilities",
    "month of unlimited freedom",
    "surprise day off",
    "spontaneous 3-day weekend",
    "mental health day",
    "sabbatical year",
  ],
  place: [
    "fancy gala",
    "mysterious antique shop",
    "futuristic tech expo",
    "cozy bookstore cafe",
    "wild music festival",
    "secret underground club",
    "rooftop party",
    "art gallery opening",
    "startup pitch event",
    "zen retreat center",
  ],
  event: [
    "spontaneous road trip",
    "escape room challenge",
    "cooking competition",
    "karaoke night",
    "midnight movie marathon",
    "surprise adventure",
    "themed costume party",
    "networking mixer",
    "meditation retreat",
    "creative workshop",
  ],
  magicItem: [
    "mysterious lamp",
    "glowing crystal",
    "ancient scroll",
    "enchanted mirror",
    "cosmic cube",
    "fortune cookie",
    "wishing well coin",
    "shooting star",
  ],
  category: [
    "animal spirit",
    "element",
    "season",
    "time of day",
    "weather",
    "music genre",
    "movie genre",
    "emoji",
  ],
  thingToChoose: [
    "weekend activity",
    "superpower",
    "dream vacation",
    "side hustle",
    "party role",
    "creative outlet",
    "life motto",
    "morning ritual",
  ],
  activity: [
    "working",
    "relaxing",
    "celebrating",
    "problem-solving",
    "creating",
    "socializing",
    "learning",
    "exercising",
  ],
  skill: [
    "skill overnight",
    "language instantly",
    "instrument perfectly",
    "sport professionally",
    "art form masterfully",
    "technology completely",
  ],
  superpower: [
    "read minds",
    "teleport anywhere",
    "control time",
    "become invisible",
    "fly freely",
    "speak any language",
    "control weather",
    "heal anyone",
  ],
  character: [
    "time traveler",
    "wise wizard",
    "friendly alien",
    "future version of yourself",
    "mysterious stranger",
    "talking animal",
    "AI from the future",
    "mythical creature",
  ],
  inheritance: [
    "million dollars",
    "startup company",
    "tropical island",
    "vintage car collection",
    "haunted mansion",
    "secret recipe empire",
    "art collection",
    "space tourism ticket",
  ],
  setting: [
    "time period",
    "fictional universe",
    "country",
    "type of city",
    "fantasy world",
    "planet",
    "dimension",
  ],
  challenge: [
    "difficult decision",
    "unexpected problem",
    "tight deadline",
    "conflict with someone",
    "major setback",
    "new opportunity",
    "big change",
  ],
  possession: [
    "phone wallpaper",
    "most-used app",
    "go-to outfit",
    "desk setup",
    "browser bookmarks",
    "playlist",
    "morning alarm sound",
  ],
  meal: [
    "breakfast",
    "lunch",
    "dinner",
    "midnight snack",
    "celebration feast",
    "comfort food",
    "date night dinner",
  ],
  room: [
    "bedroom",
    "home office",
    "dream apartment",
    "personal sanctuary",
    "creative space",
  ],
  money: [
    "$1000 to blow",
    "an unexpected bonus",
    "$100 gift card",
    "found money",
    "lottery winnings",
    "a generous gift",
  ],
};

// ============================================
// ANSWER TEMPLATES BY PERSONALITY
// ============================================

const answerTemplates: Record<PersonalityTrait, AnswerTemplate[]> = {
  creative: [
    {
      template: "Express myself through art or creation",
      emoji: "🎨",
      personality: "creative",
    },
    {
      template: "Design something beautiful and unique",
      emoji: "✨",
      personality: "creative",
    },
    {
      template: "Let my imagination run wild",
      emoji: "🌈",
      personality: "creative",
    },
    {
      template: "Create something no one's seen before",
      emoji: "💡",
      personality: "creative",
    },
    {
      template: "Turn it into an art project",
      emoji: "🖼️",
      personality: "creative",
    },
    {
      template: "Find the most aesthetic option",
      emoji: "🎭",
      personality: "creative",
    },
    {
      template: "Make something with my hands",
      emoji: "🛠️",
      personality: "creative",
    },
    {
      template: "Write, draw, or compose something",
      emoji: "📝",
      personality: "creative",
    },
    {
      template: "Experiment with new ideas",
      emoji: "🔬",
      personality: "creative",
    },
    {
      template: "Transform it into something magical",
      emoji: "🪄",
      personality: "creative",
    },
  ],
  ambitious: [
    {
      template: "Build something that lasts",
      emoji: "🏢",
      personality: "ambitious",
    },
    {
      template: "Take the leadership role",
      emoji: "👔",
      personality: "ambitious",
    },
    {
      template: "Invest in my future success",
      emoji: "📈",
      personality: "ambitious",
    },
    {
      template: "Network and make connections",
      emoji: "🤝",
      personality: "ambitious",
    },
    {
      template: "Set and crush my goals",
      emoji: "🎯",
      personality: "ambitious",
    },
    {
      template: "Work on my master plan",
      emoji: "📋",
      personality: "ambitious",
    },
    {
      template: "Level up my skills and career",
      emoji: "🚀",
      personality: "ambitious",
    },
    { template: "Make strategic moves", emoji: "♟️", personality: "ambitious" },
    {
      template: "Build my empire, one step at a time",
      emoji: "👑",
      personality: "ambitious",
    },
    {
      template: "Turn this into an opportunity",
      emoji: "💼",
      personality: "ambitious",
    },
  ],
  adventurous: [
    {
      template: "Try something I've never done",
      emoji: "🎢",
      personality: "adventurous",
    },
    {
      template: "Go somewhere unexpected",
      emoji: "🗺️",
      personality: "adventurous",
    },
    {
      template: "Take the risky but exciting path",
      emoji: "🏔️",
      personality: "adventurous",
    },
    {
      template: "Explore the unknown",
      emoji: "🧭",
      personality: "adventurous",
    },
    {
      template: "Say yes to the adventure",
      emoji: "✈️",
      personality: "adventurous",
    },
    {
      template: "Push my limits and boundaries",
      emoji: "🏃",
      personality: "adventurous",
    },
    {
      template: "Find the most thrilling option",
      emoji: "⚡",
      personality: "adventurous",
    },
    {
      template: "Discover something new",
      emoji: "🔍",
      personality: "adventurous",
    },
    {
      template: "Take a spontaneous leap",
      emoji: "🪂",
      personality: "adventurous",
    },
    {
      template: "Chase the adrenaline rush",
      emoji: "🌊",
      personality: "adventurous",
    },
  ],
  social: [
    { template: "Bring everyone together", emoji: "🎉", personality: "social" },
    {
      template: "Make it a group activity",
      emoji: "👥",
      personality: "social",
    },
    {
      template: "Share the experience with friends",
      emoji: "💕",
      personality: "social",
    },
    { template: "Throw a celebration", emoji: "🥳", personality: "social" },
    {
      template: "Connect with interesting people",
      emoji: "🗣️",
      personality: "social",
    },
    {
      template: "Be the life of the party",
      emoji: "🌟",
      personality: "social",
    },
    {
      template: "Create memories with loved ones",
      emoji: "📸",
      personality: "social",
    },
    {
      template: "Make everyone feel included",
      emoji: "🤗",
      personality: "social",
    },
    { template: "Start a fun group chat", emoji: "💬", personality: "social" },
    {
      template: "Host an unforgettable gathering",
      emoji: "🏠",
      personality: "social",
    },
  ],
  intellectual: [
    {
      template: "Research and analyze everything",
      emoji: "📚",
      personality: "intellectual",
    },
    {
      template: "Find the most logical solution",
      emoji: "🧠",
      personality: "intellectual",
    },
    {
      template: "Learn something fascinating",
      emoji: "🎓",
      personality: "intellectual",
    },
    {
      template: "Dive deep into the details",
      emoji: "🔬",
      personality: "intellectual",
    },
    {
      template: "Question everything",
      emoji: "❓",
      personality: "intellectual",
    },
    {
      template: "Solve the puzzle or mystery",
      emoji: "🧩",
      personality: "intellectual",
    },
    {
      template: "Read about it extensively",
      emoji: "📖",
      personality: "intellectual",
    },
    {
      template: "Develop a theory or hypothesis",
      emoji: "💭",
      personality: "intellectual",
    },
    {
      template: "Optimize for maximum efficiency",
      emoji: "⚙️",
      personality: "intellectual",
    },
    {
      template: "Understand the deeper meaning",
      emoji: "🔮",
      personality: "intellectual",
    },
  ],
  relaxed: [
    { template: "Go with the flow", emoji: "🌊", personality: "relaxed" },
    {
      template: "Keep it chill and stress-free",
      emoji: "😌",
      personality: "relaxed",
    },
    {
      template: "Find my peaceful corner",
      emoji: "🧘",
      personality: "relaxed",
    },
    {
      template: "Enjoy the simple pleasures",
      emoji: "☕",
      personality: "relaxed",
    },
    {
      template: "Take a well-deserved nap",
      emoji: "😴",
      personality: "relaxed",
    },
    { template: "Watch the clouds go by", emoji: "☁️", personality: "relaxed" },
    { template: "Embrace the cozy vibes", emoji: "🛋️", personality: "relaxed" },
    {
      template: "Let things happen naturally",
      emoji: "🍃",
      personality: "relaxed",
    },
    {
      template: "Find balance and harmony",
      emoji: "⚖️",
      personality: "relaxed",
    },
    {
      template: "Appreciate the present moment",
      emoji: "🌸",
      personality: "relaxed",
    },
  ],
};

// ============================================
// QUESTION GENERATOR CLASS
// ============================================

export class QuestionGenerator {
  private rng: SeededRandom;
  private usedTemplateIndices: Set<number> = new Set();
  private usedVariableCombos: Set<string> = new Set();

  constructor(seed?: number) {
    // Use current timestamp if no seed provided (for true randomness per session)
    this.rng = new SeededRandom(seed ?? Date.now());
  }

  private fillTemplate(template: string, variables: string[]): string {
    let result = template;
    for (const variable of variables) {
      const pool = variablePools[variable];
      if (pool) {
        const value = this.rng.pick(pool);
        result = result.replace(`{${variable}}`, value);
      }
    }
    return result;
  }

  private generateUniqueOptions(): QuizOption[] {
    // Select 4 different personality traits for this question
    const allTraits: PersonalityTrait[] = [
      "creative",
      "ambitious",
      "adventurous",
      "social",
      "intellectual",
      "relaxed",
    ];

    const selectedTraits = this.rng.shuffle(allTraits).slice(0, 4);
    const optionIds = ["a", "b", "c", "d"];

    return selectedTraits.map((trait, index) => {
      const templates = answerTemplates[trait];
      const selected = this.rng.pick(templates);
      return {
        id: optionIds[index],
        text: selected.template,
        emoji: selected.emoji,
        personality: trait,
      };
    });
  }

  generateQuestion(id: number): QuizQuestion {
    // Pick a template (try to avoid repeats)
    let templateIndex: number;
    let attempts = 0;
    do {
      templateIndex = Math.floor(this.rng.next() * questionTemplates.length);
      attempts++;
    } while (this.usedTemplateIndices.has(templateIndex) && attempts < 10);

    this.usedTemplateIndices.add(templateIndex);
    const template = questionTemplates[templateIndex];

    // Fill in variables
    const questionText = this.fillTemplate(
      template.template,
      template.variables
    );

    // Generate options
    const options = this.generateUniqueOptions();

    return {
      id,
      question: questionText,
      emoji: template.emoji,
      options,
    };
  }

  generateQuizSet(count: number = 5): QuizQuestion[] {
    // Reset tracking for new quiz
    this.usedTemplateIndices.clear();
    this.usedVariableCombos.clear();

    const questions: QuizQuestion[] = [];
    for (let i = 0; i < count; i++) {
      questions.push(this.generateQuestion(i + 1));
    }
    return questions;
  }

  // Get a specific reproducible quiz set using a seed
  static getSeededQuiz(seed: number, count: number = 5): QuizQuestion[] {
    const generator = new QuestionGenerator(seed);
    return generator.generateQuizSet(count);
  }

  // Calculate how many unique combinations are possible
  static getUniqueQuestionCount(): number {
    let totalCombinations = 0;

    for (const template of questionTemplates) {
      if (template.variables.length === 0) {
        totalCombinations += 1;
      } else {
        let templateCombos = 1;
        for (const variable of template.variables) {
          const pool = variablePools[variable];
          if (pool) {
            templateCombos *= pool.length;
          }
        }
        totalCombinations += templateCombos;
      }
    }

    // Multiply by answer combinations (6 choose 4 = 15 trait combos)
    // and the many answer template variations per trait
    const answerVariationMultiplier = Object.values(answerTemplates).reduce(
      (acc, arr) => acc * arr.length,
      1
    );

    return totalCombinations * 15 * answerVariationMultiplier; // Millions of combinations!
  }
}

// Export a function to generate fresh questions for each quiz session
export function generateDynamicQuestions(count: number = 5): QuizQuestion[] {
  const generator = new QuestionGenerator();
  return generator.generateQuizSet(count);
}

// Export for backwards compatibility (generates new set on import)
export const quizQuestions = generateDynamicQuestions(5);
