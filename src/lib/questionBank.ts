import { QuizQuestion } from "./types";

// Curated question bank with perfectly matched questions and answers
// Each question has contextually relevant options that make sense together

export const questionBank: QuizQuestion[] = [
  // === TIME & SCHEDULE ===
  {
    id: "time-1",
    question: "What time of day do you feel most alive?",
    emoji: "⏰",
    options: [
      {
        id: "a",
        text: "Early morning - I love sunrises",
        emoji: "🌅",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Afternoon - Peak productivity hours",
        emoji: "☀️",
        trait: "ambitious",
      },
      {
        id: "c",
        text: "Evening - When creativity flows",
        emoji: "🌆",
        trait: "creative",
      },
      {
        id: "d",
        text: "Late night - The world is quiet",
        emoji: "🌙",
        trait: "intellectual",
      },
    ],
  },
  {
    id: "time-2",
    question: "It's Saturday morning. What are you doing?",
    emoji: "🛏️",
    options: [
      {
        id: "a",
        text: "Already at the gym or on a run",
        emoji: "🏃",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Sleeping in, obviously",
        emoji: "😴",
        trait: "relaxed",
      },
      {
        id: "c",
        text: "Meeting friends for brunch",
        emoji: "🥞",
        trait: "social",
      },
      {
        id: "d",
        text: "Working on a passion project",
        emoji: "🎨",
        trait: "creative",
      },
    ],
  },
  {
    id: "time-3",
    question: "How do you start your morning routine?",
    emoji: "☕",
    options: [
      {
        id: "a",
        text: "Meditation and journaling",
        emoji: "🧘",
        trait: "relaxed",
      },
      {
        id: "b",
        text: "Check my phone and social media",
        emoji: "📱",
        trait: "social",
      },
      {
        id: "c",
        text: "Plan my day and set goals",
        emoji: "📋",
        trait: "ambitious",
      },
      {
        id: "d",
        text: "What routine? Every day is different",
        emoji: "🎲",
        trait: "adventurous",
      },
    ],
  },

  // === WEEKEND & FREE TIME ===
  {
    id: "weekend-1",
    question: "Your ideal weekend looks like...",
    emoji: "🎉",
    options: [
      {
        id: "a",
        text: "A spontaneous road trip adventure",
        emoji: "🚗",
        trait: "adventurous",
      },
      {
        id: "b",
        text: "Hosting a party or gathering",
        emoji: "🎊",
        trait: "social",
      },
      {
        id: "c",
        text: "Netflix, snacks, and zero responsibilities",
        emoji: "🍿",
        trait: "relaxed",
      },
      {
        id: "d",
        text: "Learning something new or taking a class",
        emoji: "📚",
        trait: "intellectual",
      },
    ],
  },
  {
    id: "weekend-2",
    question: "You have an unexpected day off. What do you do?",
    emoji: "🎁",
    options: [
      {
        id: "a",
        text: "Call friends and make spontaneous plans",
        emoji: "📞",
        trait: "social",
      },
      {
        id: "b",
        text: "Finally tackle that creative project",
        emoji: "✨",
        trait: "creative",
      },
      {
        id: "c",
        text: "Explore somewhere I've never been",
        emoji: "🗺️",
        trait: "adventurous",
      },
      {
        id: "d",
        text: "Enjoy some well-deserved rest",
        emoji: "🛋️",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "weekend-3",
    question: "What's your go-to way to unwind after a long week?",
    emoji: "😌",
    options: [
      {
        id: "a",
        text: "Dinner and drinks with friends",
        emoji: "🍷",
        trait: "social",
      },
      {
        id: "b",
        text: "A good book or documentary",
        emoji: "📖",
        trait: "intellectual",
      },
      {
        id: "c",
        text: "Creating art, music, or crafts",
        emoji: "🎨",
        trait: "creative",
      },
      {
        id: "d",
        text: "A long bath and early bedtime",
        emoji: "🛁",
        trait: "relaxed",
      },
    ],
  },

  // === TRAVEL & ADVENTURE ===
  {
    id: "travel-1",
    question: "You're planning a dream vacation. Where do you go?",
    emoji: "✈️",
    options: [
      {
        id: "a",
        text: "An exotic adventure destination",
        emoji: "🏔️",
        trait: "adventurous",
      },
      {
        id: "b",
        text: "A cultural city with museums and history",
        emoji: "🏛️",
        trait: "intellectual",
      },
      {
        id: "c",
        text: "A beach resort to relax and recharge",
        emoji: "🏖️",
        trait: "relaxed",
      },
      {
        id: "d",
        text: "Wherever my friends are going",
        emoji: "👯",
        trait: "social",
      },
    ],
  },
  {
    id: "travel-2",
    question: "At the airport, your flight is delayed 4 hours. You...",
    emoji: "🛫",
    options: [
      {
        id: "a",
        text: "Make friends with fellow travelers",
        emoji: "🤝",
        trait: "social",
      },
      {
        id: "b",
        text: "Find a quiet spot and read or work",
        emoji: "💻",
        trait: "intellectual",
      },
      {
        id: "c",
        text: "Explore the airport and try new food",
        emoji: "🍜",
        trait: "adventurous",
      },
      {
        id: "d",
        text: "Find a comfy spot and nap",
        emoji: "😴",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "travel-3",
    question: "What's your travel packing style?",
    emoji: "🧳",
    options: [
      {
        id: "a",
        text: "Meticulously planned with lists",
        emoji: "📝",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Throw things in last minute",
        emoji: "🎒",
        trait: "adventurous",
      },
      {
        id: "c",
        text: "Coordinate outfits for every occasion",
        emoji: "👗",
        trait: "creative",
      },
      {
        id: "d",
        text: "Pack light - I'll buy what I need",
        emoji: "🛍️",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "travel-4",
    question: "On a group trip, you're usually the one who...",
    emoji: "🗺️",
    options: [
      {
        id: "a",
        text: "Plans the entire itinerary",
        emoji: "📋",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Finds the hidden local gems",
        emoji: "💎",
        trait: "adventurous",
      },
      {
        id: "c",
        text: "Documents everything with photos",
        emoji: "📸",
        trait: "creative",
      },
      {
        id: "d",
        text: "Goes with the flow and vibes",
        emoji: "🌊",
        trait: "relaxed",
      },
    ],
  },

  // === SOCIAL SITUATIONS ===
  {
    id: "social-1",
    question: "At a party where you don't know anyone, you...",
    emoji: "🎈",
    options: [
      {
        id: "a",
        text: "Introduce yourself to everyone",
        emoji: "👋",
        trait: "social",
      },
      {
        id: "b",
        text: "Find the dog or cat to hang with",
        emoji: "🐕",
        trait: "relaxed",
      },
      {
        id: "c",
        text: "Look for the most interesting conversation",
        emoji: "🎭",
        trait: "intellectual",
      },
      {
        id: "d",
        text: "Suggest a fun game or activity",
        emoji: "🎲",
        trait: "adventurous",
      },
    ],
  },
  {
    id: "social-2",
    question: "Your friend group would describe you as...",
    emoji: "👥",
    options: [
      {
        id: "a",
        text: "The planner who makes things happen",
        emoji: "📅",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "The creative one with wild ideas",
        emoji: "💡",
        trait: "creative",
      },
      {
        id: "c",
        text: "The chill one who goes with the flow",
        emoji: "🧘",
        trait: "relaxed",
      },
      {
        id: "d",
        text: "The adventurous one always suggesting trips",
        emoji: "🎒",
        trait: "adventurous",
      },
    ],
  },
  {
    id: "social-3",
    question: "How do you prefer to catch up with friends?",
    emoji: "💬",
    options: [
      {
        id: "a",
        text: "Long phone calls or video chats",
        emoji: "📞",
        trait: "social",
      },
      {
        id: "b",
        text: "Meeting up for coffee or food",
        emoji: "☕",
        trait: "social",
      },
      {
        id: "c",
        text: "Doing an activity together",
        emoji: "🎯",
        trait: "adventurous",
      },
      {
        id: "d",
        text: "Memes and texts throughout the day",
        emoji: "😂",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "social-4",
    question: "Someone asks for your opinion on their creative work. You...",
    emoji: "🎨",
    options: [
      {
        id: "a",
        text: "Give honest, constructive feedback",
        emoji: "📝",
        trait: "intellectual",
      },
      {
        id: "b",
        text: "Focus on the positives first",
        emoji: "💖",
        trait: "social",
      },
      {
        id: "c",
        text: "Share ideas to make it even better",
        emoji: "✨",
        trait: "creative",
      },
      {
        id: "d",
        text: "Ask what they think about it first",
        emoji: "🤔",
        trait: "relaxed",
      },
    ],
  },

  // === WORK & CAREER ===
  {
    id: "work-1",
    question: "What motivates you most at work?",
    emoji: "💼",
    options: [
      {
        id: "a",
        text: "Climbing the ladder and achieving goals",
        emoji: "📈",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Creative freedom and self-expression",
        emoji: "🎭",
        trait: "creative",
      },
      {
        id: "c",
        text: "Making a difference and helping others",
        emoji: "🤝",
        trait: "social",
      },
      {
        id: "d",
        text: "Work-life balance and flexibility",
        emoji: "⚖️",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "work-2",
    question: "Your dream job environment would be...",
    emoji: "🏢",
    options: [
      {
        id: "a",
        text: "A fast-paced startup with big goals",
        emoji: "🚀",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "A creative studio with inspiring people",
        emoji: "🎨",
        trait: "creative",
      },
      {
        id: "c",
        text: "Remote work from anywhere in the world",
        emoji: "🌍",
        trait: "adventurous",
      },
      {
        id: "d",
        text: "A chill office with great work-life balance",
        emoji: "🌴",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "work-3",
    question: "How do you handle a big deadline?",
    emoji: "⏰",
    options: [
      {
        id: "a",
        text: "Create a detailed plan and execute",
        emoji: "📋",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Thrive under pressure at the last minute",
        emoji: "⚡",
        trait: "adventurous",
      },
      {
        id: "c",
        text: "Collaborate with others to divide the work",
        emoji: "🤝",
        trait: "social",
      },
      {
        id: "d",
        text: "Stay calm and work steadily",
        emoji: "🧘",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "work-4",
    question: "You just got a promotion! First thing you do?",
    emoji: "🎊",
    options: [
      {
        id: "a",
        text: "Set even bigger goals for next year",
        emoji: "🎯",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Celebrate with friends and family",
        emoji: "🥳",
        trait: "social",
      },
      {
        id: "c",
        text: "Plan a vacation reward for yourself",
        emoji: "✈️",
        trait: "adventurous",
      },
      {
        id: "d",
        text: "Take a moment to appreciate how far I've come",
        emoji: "🙏",
        trait: "relaxed",
      },
    ],
  },

  // === FOOD & DINING ===
  {
    id: "food-1",
    question: "You're picking a restaurant for dinner. You choose...",
    emoji: "🍽️",
    options: [
      {
        id: "a",
        text: "That trendy new place everyone's talking about",
        emoji: "🔥",
        trait: "social",
      },
      {
        id: "b",
        text: "An exotic cuisine I've never tried",
        emoji: "🍜",
        trait: "adventurous",
      },
      {
        id: "c",
        text: "My favorite comfort food spot",
        emoji: "🍕",
        trait: "relaxed",
      },
      {
        id: "d",
        text: "Somewhere with a unique aesthetic",
        emoji: "✨",
        trait: "creative",
      },
    ],
  },
  {
    id: "food-2",
    question: "Your cooking style is best described as...",
    emoji: "👨‍🍳",
    options: [
      {
        id: "a",
        text: "Follow recipes precisely for perfect results",
        emoji: "📖",
        trait: "intellectual",
      },
      {
        id: "b",
        text: "Throw things together and hope for the best",
        emoji: "🎲",
        trait: "adventurous",
      },
      {
        id: "c",
        text: "Meal prep and plan for the week",
        emoji: "📅",
        trait: "ambitious",
      },
      {
        id: "d",
        text: "Order takeout and call it a night",
        emoji: "📱",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "food-3",
    question: "At a buffet, your strategy is...",
    emoji: "🍱",
    options: [
      {
        id: "a",
        text: "Try a little bit of everything",
        emoji: "🌈",
        trait: "adventurous",
      },
      {
        id: "b",
        text: "Go straight for my favorites",
        emoji: "😋",
        trait: "relaxed",
      },
      {
        id: "c",
        text: "Strategically plan for maximum variety",
        emoji: "🧠",
        trait: "intellectual",
      },
      {
        id: "d",
        text: "See what others are getting first",
        emoji: "👀",
        trait: "social",
      },
    ],
  },

  // === ENTERTAINMENT & HOBBIES ===
  {
    id: "hobby-1",
    question: "Your ideal way to spend a free evening is...",
    emoji: "🌙",
    options: [
      {
        id: "a",
        text: "Learning a new skill online",
        emoji: "💻",
        trait: "intellectual",
      },
      {
        id: "b",
        text: "Creating something with my hands",
        emoji: "🎨",
        trait: "creative",
      },
      {
        id: "c",
        text: "Going out to an event or show",
        emoji: "🎭",
        trait: "social",
      },
      {
        id: "d",
        text: "Relaxing with my favorite show",
        emoji: "📺",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "hobby-2",
    question: "What kind of content do you consume most?",
    emoji: "📱",
    options: [
      {
        id: "a",
        text: "Educational podcasts and documentaries",
        emoji: "🎧",
        trait: "intellectual",
      },
      {
        id: "b",
        text: "Social media and trending topics",
        emoji: "📲",
        trait: "social",
      },
      {
        id: "c",
        text: "Art, design, and creative inspiration",
        emoji: "🎨",
        trait: "creative",
      },
      {
        id: "d",
        text: "Travel and adventure content",
        emoji: "🌍",
        trait: "adventurous",
      },
    ],
  },
  {
    id: "hobby-3",
    question: "You're at a bookstore. Which section do you visit first?",
    emoji: "📚",
    options: [
      {
        id: "a",
        text: "Self-improvement and business",
        emoji: "📈",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Science, philosophy, or history",
        emoji: "🔬",
        trait: "intellectual",
      },
      {
        id: "c",
        text: "Art, photography, or design",
        emoji: "📷",
        trait: "creative",
      },
      {
        id: "d",
        text: "Travel guides and adventure stories",
        emoji: "🗺️",
        trait: "adventurous",
      },
    ],
  },
  {
    id: "hobby-4",
    question: "Your YouTube recommendations are full of...",
    emoji: "▶️",
    options: [
      {
        id: "a",
        text: "How-to tutorials and life hacks",
        emoji: "💡",
        trait: "intellectual",
      },
      {
        id: "b",
        text: "Travel vlogs and adventure content",
        emoji: "🌎",
        trait: "adventurous",
      },
      {
        id: "c",
        text: "Art, music, and creative processes",
        emoji: "🎵",
        trait: "creative",
      },
      {
        id: "d",
        text: "Cozy content and relaxing videos",
        emoji: "🕯️",
        trait: "relaxed",
      },
    ],
  },

  // === DECISION MAKING ===
  {
    id: "decision-1",
    question: "When making a big decision, you typically...",
    emoji: "🤔",
    options: [
      {
        id: "a",
        text: "Research extensively and weigh all options",
        emoji: "📊",
        trait: "intellectual",
      },
      {
        id: "b",
        text: "Trust my gut and go for it",
        emoji: "💫",
        trait: "adventurous",
      },
      {
        id: "c",
        text: "Ask friends and family for input",
        emoji: "👨‍👩‍👧‍👦",
        trait: "social",
      },
      {
        id: "d",
        text: "Take my time and let it come naturally",
        emoji: "🌊",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "decision-2",
    question: "You find $1000 you forgot about. What do you do?",
    emoji: "💰",
    options: [
      {
        id: "a",
        text: "Invest it or put it toward savings",
        emoji: "📈",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Book a spontaneous trip",
        emoji: "✈️",
        trait: "adventurous",
      },
      {
        id: "c",
        text: "Treat my friends to something nice",
        emoji: "🎁",
        trait: "social",
      },
      {
        id: "d",
        text: "Buy that thing I've been wanting",
        emoji: "🛍️",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "decision-3",
    question: "A friend asks you to try something totally new. You...",
    emoji: "🆕",
    options: [
      {
        id: "a",
        text: "Say yes immediately - life is short!",
        emoji: "🙌",
        trait: "adventurous",
      },
      {
        id: "b",
        text: "Research it first to know what I'm getting into",
        emoji: "🔍",
        trait: "intellectual",
      },
      {
        id: "c",
        text: "Agree if other friends are coming too",
        emoji: "👯",
        trait: "social",
      },
      {
        id: "d",
        text: "Maybe... let me think about it",
        emoji: "🤷",
        trait: "relaxed",
      },
    ],
  },

  // === CHALLENGES & PROBLEMS ===
  {
    id: "challenge-1",
    question: "When faced with a difficult problem, you...",
    emoji: "🧩",
    options: [
      {
        id: "a",
        text: "Break it down and tackle it systematically",
        emoji: "📝",
        trait: "intellectual",
      },
      {
        id: "b",
        text: "Try unconventional creative solutions",
        emoji: "💡",
        trait: "creative",
      },
      {
        id: "c",
        text: "Seek advice from people who've been there",
        emoji: "🗣️",
        trait: "social",
      },
      {
        id: "d",
        text: "Take a break and come back fresh",
        emoji: "🧘",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "challenge-2",
    question: "Your project didn't go as planned. Your response?",
    emoji: "😅",
    options: [
      {
        id: "a",
        text: "Analyze what went wrong and improve",
        emoji: "📊",
        trait: "intellectual",
      },
      {
        id: "b",
        text: "Pivot and try a completely new approach",
        emoji: "🔄",
        trait: "creative",
      },
      {
        id: "c",
        text: "Talk it through with someone I trust",
        emoji: "💬",
        trait: "social",
      },
      {
        id: "d",
        text: "It's okay, these things happen",
        emoji: "🤷",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "challenge-3",
    question: "You're stuck on a creative block. You...",
    emoji: "🎨",
    options: [
      {
        id: "a",
        text: "Go for a walk or change my environment",
        emoji: "🚶",
        trait: "adventurous",
      },
      {
        id: "b",
        text: "Consume inspiring content for ideas",
        emoji: "📱",
        trait: "creative",
      },
      {
        id: "c",
        text: "Collaborate or brainstorm with others",
        emoji: "🤝",
        trait: "social",
      },
      {
        id: "d",
        text: "Rest and trust it will come back",
        emoji: "😴",
        trait: "relaxed",
      },
    ],
  },

  // === DREAMS & ASPIRATIONS ===
  {
    id: "dreams-1",
    question: "In 10 years, you hope to be...",
    emoji: "🔮",
    options: [
      {
        id: "a",
        text: "Running my own successful business",
        emoji: "🏢",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Known for my creative work",
        emoji: "🌟",
        trait: "creative",
      },
      {
        id: "c",
        text: "Surrounded by amazing people I love",
        emoji: "💕",
        trait: "social",
      },
      {
        id: "d",
        text: "Living peacefully doing what I enjoy",
        emoji: "🌅",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "dreams-2",
    question: "Your definition of success is...",
    emoji: "🏆",
    options: [
      {
        id: "a",
        text: "Achieving my goals and being recognized",
        emoji: "🎯",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Having the freedom to create and explore",
        emoji: "🦋",
        trait: "creative",
      },
      {
        id: "c",
        text: "Strong relationships and community",
        emoji: "🤗",
        trait: "social",
      },
      {
        id: "d",
        text: "Peace of mind and contentment",
        emoji: "☮️",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "dreams-3",
    question: "If you could master any skill instantly, it would be...",
    emoji: "⚡",
    options: [
      {
        id: "a",
        text: "Public speaking and leadership",
        emoji: "🎤",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "A musical instrument or art form",
        emoji: "🎸",
        trait: "creative",
      },
      {
        id: "c",
        text: "Every language in the world",
        emoji: "🌍",
        trait: "social",
      },
      {
        id: "d",
        text: "Meditation and inner peace",
        emoji: "🧘",
        trait: "relaxed",
      },
    ],
  },

  // === SCENARIOS ===
  {
    id: "scenario-1",
    question: "You win a free trip but must leave tomorrow. You...",
    emoji: "🎟️",
    options: [
      {
        id: "a",
        text: "Pack my bags and go! YOLO!",
        emoji: "🚀",
        trait: "adventurous",
      },
      {
        id: "b",
        text: "Check my calendar and try to make it work",
        emoji: "📅",
        trait: "ambitious",
      },
      {
        id: "c",
        text: "Only if I can bring someone with me",
        emoji: "👫",
        trait: "social",
      },
      {
        id: "d",
        text: "That's too stressful, I'd pass",
        emoji: "😰",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "scenario-2",
    question: "A genie grants you one wish. You wish for...",
    emoji: "🧞",
    options: [
      {
        id: "a",
        text: "The ability to achieve any goal I set",
        emoji: "🎯",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Unlimited creativity and inspiration",
        emoji: "✨",
        trait: "creative",
      },
      {
        id: "c",
        text: "Everyone I love to be happy and healthy",
        emoji: "💖",
        trait: "social",
      },
      {
        id: "d",
        text: "A life free of stress and worry",
        emoji: "🌈",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "scenario-3",
    question: "You're stranded on a desert island. You bring...",
    emoji: "🏝️",
    options: [
      {
        id: "a",
        text: "A survival guide and tools",
        emoji: "🔧",
        trait: "intellectual",
      },
      {
        id: "b",
        text: "Art supplies to pass the time",
        emoji: "🎨",
        trait: "creative",
      },
      {
        id: "c",
        text: "A satellite phone to call for help",
        emoji: "📡",
        trait: "social",
      },
      {
        id: "d",
        text: "A hammock and good vibes",
        emoji: "🌴",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "scenario-4",
    question: "You discover a time machine. Where do you go?",
    emoji: "⏰",
    options: [
      {
        id: "a",
        text: "The future to see technological advances",
        emoji: "🚀",
        trait: "intellectual",
      },
      {
        id: "b",
        text: "The Renaissance to meet great artists",
        emoji: "🎨",
        trait: "creative",
      },
      {
        id: "c",
        text: "Back to relive my favorite memories",
        emoji: "💭",
        trait: "social",
      },
      {
        id: "d",
        text: "Nowhere - I'm happy in the present",
        emoji: "🎁",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "scenario-5",
    question: "Aliens land and want to learn about humanity. You show them...",
    emoji: "👽",
    options: [
      {
        id: "a",
        text: "Our greatest scientific achievements",
        emoji: "🔬",
        trait: "intellectual",
      },
      {
        id: "b",
        text: "Music, art, and creative expression",
        emoji: "🎵",
        trait: "creative",
      },
      {
        id: "c",
        text: "How we connect and care for each other",
        emoji: "🤝",
        trait: "social",
      },
      {
        id: "d",
        text: "The beauty of nature and simple pleasures",
        emoji: "🌸",
        trait: "relaxed",
      },
    ],
  },

  // === PERSONALITY ===
  {
    id: "personality-1",
    question: "Which element resonates with you most?",
    emoji: "🌍",
    options: [
      {
        id: "a",
        text: "Fire - passionate and driven",
        emoji: "🔥",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Water - adaptable and flowing",
        emoji: "🌊",
        trait: "relaxed",
      },
      {
        id: "c",
        text: "Air - free-spirited and curious",
        emoji: "💨",
        trait: "adventurous",
      },
      {
        id: "d",
        text: "Earth - grounded and reliable",
        emoji: "🌱",
        trait: "intellectual",
      },
    ],
  },
  {
    id: "personality-2",
    question: "Your spirit animal would be...",
    emoji: "🦁",
    options: [
      {
        id: "a",
        text: "Eagle - ambitious and visionary",
        emoji: "🦅",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Dolphin - playful and social",
        emoji: "🐬",
        trait: "social",
      },
      {
        id: "c",
        text: "Wolf - adventurous and independent",
        emoji: "🐺",
        trait: "adventurous",
      },
      {
        id: "d",
        text: "Cat - creative and mysterious",
        emoji: "🐱",
        trait: "creative",
      },
    ],
  },
  {
    id: "personality-3",
    question: "At a costume party, you'd dress as...",
    emoji: "🎭",
    options: [
      {
        id: "a",
        text: "A powerful historical figure",
        emoji: "👑",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Something totally original I made myself",
        emoji: "🦄",
        trait: "creative",
      },
      {
        id: "c",
        text: "A group costume with friends",
        emoji: "👯",
        trait: "social",
      },
      {
        id: "d",
        text: "Something comfy - maybe pajamas?",
        emoji: "🧸",
        trait: "relaxed",
      },
    ],
  },

  // === MUSIC & ARTS ===
  {
    id: "music-1",
    question: "Your go-to music genre is...",
    emoji: "🎵",
    options: [
      { id: "a", text: "Pop and upbeat hits", emoji: "🎤", trait: "social" },
      {
        id: "b",
        text: "Indie, alternative, or experimental",
        emoji: "🎸",
        trait: "creative",
      },
      {
        id: "c",
        text: "Lo-fi, jazz, or chill vibes",
        emoji: "🎹",
        trait: "relaxed",
      },
      {
        id: "d",
        text: "EDM, rock, or high-energy music",
        emoji: "🔊",
        trait: "adventurous",
      },
    ],
  },
  {
    id: "music-2",
    question: "At a concert, you're the one who...",
    emoji: "🎸",
    options: [
      {
        id: "a",
        text: "Is at the front, fully into it",
        emoji: "🤘",
        trait: "adventurous",
      },
      {
        id: "b",
        text: "Sings along to every word with friends",
        emoji: "🎤",
        trait: "social",
      },
      {
        id: "c",
        text: "Analyzes the musicianship and production",
        emoji: "🎧",
        trait: "intellectual",
      },
      {
        id: "d",
        text: "Vibes in the back with a drink",
        emoji: "🍹",
        trait: "relaxed",
      },
    ],
  },

  // === NATURE & OUTDOORS ===
  {
    id: "nature-1",
    question: "Your ideal outdoor activity is...",
    emoji: "🌲",
    options: [
      {
        id: "a",
        text: "Hiking a challenging mountain trail",
        emoji: "🏔️",
        trait: "adventurous",
      },
      {
        id: "b",
        text: "A scenic picnic with friends",
        emoji: "🧺",
        trait: "social",
      },
      {
        id: "c",
        text: "Photography or sketching nature",
        emoji: "📷",
        trait: "creative",
      },
      {
        id: "d",
        text: "Laying in a hammock with a book",
        emoji: "📖",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "nature-2",
    question: "Your dream home location is...",
    emoji: "🏡",
    options: [
      {
        id: "a",
        text: "A bustling city with endless opportunities",
        emoji: "🌆",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "A cozy cabin in the mountains",
        emoji: "🏔️",
        trait: "adventurous",
      },
      {
        id: "c",
        text: "A beach house by the ocean",
        emoji: "🏖️",
        trait: "relaxed",
      },
      {
        id: "d",
        text: "A creative loft in an artsy neighborhood",
        emoji: "🎨",
        trait: "creative",
      },
    ],
  },

  // === TECHNOLOGY ===
  {
    id: "tech-1",
    question: "Your phone's home screen is organized...",
    emoji: "📱",
    options: [
      {
        id: "a",
        text: "By category with folders for everything",
        emoji: "📂",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Aesthetically with custom icons and widgets",
        emoji: "✨",
        trait: "creative",
      },
      {
        id: "c",
        text: "Just the essentials, minimal and clean",
        emoji: "⬜",
        trait: "relaxed",
      },
      {
        id: "d",
        text: "Honestly, it's a beautiful mess",
        emoji: "🌪️",
        trait: "adventurous",
      },
    ],
  },
  {
    id: "tech-2",
    question: "When a new app or game goes viral, you...",
    emoji: "📲",
    options: [
      {
        id: "a",
        text: "Download it immediately to stay current",
        emoji: "⬇️",
        trait: "social",
      },
      {
        id: "b",
        text: "Wait to see if it's actually worth it",
        emoji: "🤔",
        trait: "intellectual",
      },
      {
        id: "c",
        text: "Try it and move on quickly",
        emoji: "👋",
        trait: "adventurous",
      },
      {
        id: "d",
        text: "What viral app? I missed it",
        emoji: "🤷",
        trait: "relaxed",
      },
    ],
  },

  // === EMOTIONS & REACTIONS ===
  {
    id: "emotion-1",
    question: "When something exciting happens, you...",
    emoji: "🎉",
    options: [
      {
        id: "a",
        text: "Immediately share it with everyone",
        emoji: "📢",
        trait: "social",
      },
      {
        id: "b",
        text: "Plan how to capitalize on the moment",
        emoji: "📊",
        trait: "ambitious",
      },
      {
        id: "c",
        text: "Enjoy the moment quietly to yourself",
        emoji: "😊",
        trait: "relaxed",
      },
      {
        id: "d",
        text: "Start thinking of creative possibilities",
        emoji: "💭",
        trait: "creative",
      },
    ],
  },
  {
    id: "emotion-2",
    question: "When you're stressed, you cope by...",
    emoji: "😰",
    options: [
      {
        id: "a",
        text: "Making lists and taking action",
        emoji: "✅",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Venting to friends or family",
        emoji: "💬",
        trait: "social",
      },
      {
        id: "c",
        text: "Doing something creative",
        emoji: "🎨",
        trait: "creative",
      },
      { id: "d", text: "Resting and self-care", emoji: "🧖", trait: "relaxed" },
    ],
  },

  // === RANDOM FUN ===
  {
    id: "fun-1",
    question: "Your superpower of choice would be...",
    emoji: "🦸",
    options: [
      {
        id: "a",
        text: "Mind reading and super intelligence",
        emoji: "🧠",
        trait: "intellectual",
      },
      {
        id: "b",
        text: "Teleportation to travel anywhere",
        emoji: "✨",
        trait: "adventurous",
      },
      {
        id: "c",
        text: "Ability to make anyone laugh and smile",
        emoji: "😄",
        trait: "social",
      },
      {
        id: "d",
        text: "Time manipulation to relax more",
        emoji: "⏰",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "fun-2",
    question: "You're creating a playlist. It's titled...",
    emoji: "🎶",
    options: [
      { id: "a", text: "Boss Mode Activated", emoji: "💪", trait: "ambitious" },
      { id: "b", text: "Late Night Vibes", emoji: "🌙", trait: "relaxed" },
      { id: "c", text: "Adventure Awaits", emoji: "🗺️", trait: "adventurous" },
      { id: "d", text: "Weird but Good", emoji: "🎭", trait: "creative" },
    ],
  },
  {
    id: "fun-3",
    question: "Your emoji usage is best described as...",
    emoji: "😀",
    options: [
      {
        id: "a",
        text: "Strategic and purposeful",
        emoji: "🎯",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Excessive and enthusiastic",
        emoji: "🎊",
        trait: "social",
      },
      {
        id: "c",
        text: "Artistic and unconventional",
        emoji: "🦋",
        trait: "creative",
      },
      {
        id: "d",
        text: "Minimal, just the classics",
        emoji: "👍",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "fun-4",
    question: "If your life was a movie genre, it would be...",
    emoji: "🎬",
    options: [
      {
        id: "a",
        text: "An inspiring underdog story",
        emoji: "🏆",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "An epic adventure film",
        emoji: "🗺️",
        trait: "adventurous",
      },
      {
        id: "c",
        text: "A heartwarming comedy with friends",
        emoji: "🤣",
        trait: "social",
      },
      {
        id: "d",
        text: "A cozy slice-of-life film",
        emoji: "☕",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "fun-5",
    question: "Your coffee order says you're...",
    emoji: "☕",
    options: [
      {
        id: "a",
        text: "Black coffee - efficient and no-nonsense",
        emoji: "⚫",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Something unique from the secret menu",
        emoji: "🌈",
        trait: "creative",
      },
      {
        id: "c",
        text: "Whatever my friend is getting",
        emoji: "👯",
        trait: "social",
      },
      {
        id: "d",
        text: "Decaf or tea - keeping it calm",
        emoji: "🍵",
        trait: "relaxed",
      },
    ],
  },

  // === LEARNING & GROWTH ===
  {
    id: "learn-1",
    question: "Your preferred way to learn something new is...",
    emoji: "📖",
    options: [
      {
        id: "a",
        text: "Structured courses with clear goals",
        emoji: "🎓",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Hands-on experimentation",
        emoji: "🔧",
        trait: "adventurous",
      },
      {
        id: "c",
        text: "Watching tutorials and reading",
        emoji: "📚",
        trait: "intellectual",
      },
      {
        id: "d",
        text: "Learning from others through conversation",
        emoji: "💬",
        trait: "social",
      },
    ],
  },
  {
    id: "learn-2",
    question: "When you don't know something, you...",
    emoji: "❓",
    options: [
      {
        id: "a",
        text: "Research it thoroughly",
        emoji: "🔍",
        trait: "intellectual",
      },
      {
        id: "b",
        text: "Ask someone who might know",
        emoji: "🙋",
        trait: "social",
      },
      {
        id: "c",
        text: "Figure it out as I go",
        emoji: "🎲",
        trait: "adventurous",
      },
      {
        id: "d",
        text: "It's fine, I'll learn eventually",
        emoji: "🤷",
        trait: "relaxed",
      },
    ],
  },

  // === RELATIONSHIPS ===
  {
    id: "relationship-1",
    question: "In a relationship, you value most...",
    emoji: "💕",
    options: [
      {
        id: "a",
        text: "Shared ambitions and growing together",
        emoji: "🚀",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Deep conversations and understanding",
        emoji: "🧠",
        trait: "intellectual",
      },
      {
        id: "c",
        text: "Adventure and trying new things together",
        emoji: "🌍",
        trait: "adventurous",
      },
      {
        id: "d",
        text: "Comfort, trust, and feeling at home",
        emoji: "🏠",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "relationship-2",
    question: "Your ideal date night is...",
    emoji: "💘",
    options: [
      {
        id: "a",
        text: "A fancy dinner at an upscale restaurant",
        emoji: "🍾",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "An adventure like hiking or exploring",
        emoji: "🏔️",
        trait: "adventurous",
      },
      {
        id: "c",
        text: "A creative activity like painting or cooking",
        emoji: "🎨",
        trait: "creative",
      },
      {
        id: "d",
        text: "Netflix, snacks, and cuddles at home",
        emoji: "🛋️",
        trait: "relaxed",
      },
    ],
  },

  // === MORNING PERSON VS NIGHT OWL ===
  {
    id: "time-4",
    question: "Are you more of a morning person or night owl?",
    emoji: "🌓",
    options: [
      {
        id: "a",
        text: "Morning! I love early productivity",
        emoji: "🌅",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Night! That's when I'm most creative",
        emoji: "🌙",
        trait: "creative",
      },
      {
        id: "c",
        text: "Afternoon actually - best of both worlds",
        emoji: "☀️",
        trait: "relaxed",
      },
      {
        id: "d",
        text: "Depends on what adventure awaits",
        emoji: "🎲",
        trait: "adventurous",
      },
    ],
  },

  // === HOLIDAYS ===
  {
    id: "holiday-1",
    question: "Your favorite part of the holidays is...",
    emoji: "🎄",
    options: [
      {
        id: "a",
        text: "Achieving my end-of-year goals",
        emoji: "🎯",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Being surrounded by loved ones",
        emoji: "👨‍👩‍👧‍👦",
        trait: "social",
      },
      {
        id: "c",
        text: "The creative decorations and traditions",
        emoji: "✨",
        trait: "creative",
      },
      {
        id: "d",
        text: "The time off to rest and recharge",
        emoji: "😴",
        trait: "relaxed",
      },
    ],
  },

  // === CONFLICT ===
  {
    id: "conflict-1",
    question: "During a disagreement, you typically...",
    emoji: "⚔️",
    options: [
      {
        id: "a",
        text: "Present logical arguments to win",
        emoji: "📊",
        trait: "intellectual",
      },
      {
        id: "b",
        text: "Try to find a creative compromise",
        emoji: "🤝",
        trait: "creative",
      },
      {
        id: "c",
        text: "Focus on maintaining the relationship",
        emoji: "💕",
        trait: "social",
      },
      {
        id: "d",
        text: "Let it go, it's not worth the stress",
        emoji: "🕊️",
        trait: "relaxed",
      },
    ],
  },

  // === SHOPPING ===
  {
    id: "shopping-1",
    question: "Your shopping style is...",
    emoji: "🛍️",
    options: [
      {
        id: "a",
        text: "Know exactly what I need, in and out",
        emoji: "🎯",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Browse for unique and interesting finds",
        emoji: "💎",
        trait: "creative",
      },
      {
        id: "c",
        text: "A social activity with friends",
        emoji: "👯",
        trait: "social",
      },
      {
        id: "d",
        text: "Online shopping from my couch",
        emoji: "🛋️",
        trait: "relaxed",
      },
    ],
  },

  // === WEATHER ===
  {
    id: "weather-1",
    question: "Your favorite type of weather is...",
    emoji: "🌤️",
    options: [
      {
        id: "a",
        text: "Sunny and energizing",
        emoji: "☀️",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Rainy and cozy for staying in",
        emoji: "🌧️",
        trait: "relaxed",
      },
      { id: "c", text: "Snowy and magical", emoji: "❄️", trait: "creative" },
      {
        id: "d",
        text: "Perfect for outdoor adventures",
        emoji: "🏔️",
        trait: "adventurous",
      },
    ],
  },

  // === GAMING ===
  {
    id: "gaming-1",
    question: "If you played video games, you'd prefer...",
    emoji: "🎮",
    options: [
      {
        id: "a",
        text: "Strategy games that test my mind",
        emoji: "♟️",
        trait: "intellectual",
      },
      {
        id: "b",
        text: "Adventure and exploration games",
        emoji: "🗺️",
        trait: "adventurous",
      },
      {
        id: "c",
        text: "Multiplayer games with friends",
        emoji: "👥",
        trait: "social",
      },
      {
        id: "d",
        text: "Relaxing simulation or cozy games",
        emoji: "🌿",
        trait: "relaxed",
      },
    ],
  },

  // === COMMUNICATION ===
  {
    id: "comm-1",
    question: "Your texting style is...",
    emoji: "💬",
    options: [
      {
        id: "a",
        text: "Quick, efficient, to the point",
        emoji: "⚡",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Long voice messages and calls",
        emoji: "🎙️",
        trait: "social",
      },
      {
        id: "c",
        text: "Full of GIFs, memes, and creativity",
        emoji: "🎭",
        trait: "creative",
      },
      {
        id: "d",
        text: "I'll reply when I get to it",
        emoji: "🐢",
        trait: "relaxed",
      },
    ],
  },

  // === FINAL QUESTIONS ===
  {
    id: "final-1",
    question: "What matters most to you in life?",
    emoji: "💫",
    options: [
      {
        id: "a",
        text: "Achieving my full potential",
        emoji: "🚀",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Experiencing all life has to offer",
        emoji: "🌍",
        trait: "adventurous",
      },
      {
        id: "c",
        text: "Deep connections with others",
        emoji: "💕",
        trait: "social",
      },
      {
        id: "d",
        text: "Inner peace and happiness",
        emoji: "☮️",
        trait: "relaxed",
      },
    ],
  },
  {
    id: "final-2",
    question: "How would you describe your life philosophy?",
    emoji: "🧠",
    options: [
      {
        id: "a",
        text: "Work hard, dream big, make it happen",
        emoji: "💪",
        trait: "ambitious",
      },
      {
        id: "b",
        text: "Question everything, never stop learning",
        emoji: "🔬",
        trait: "intellectual",
      },
      {
        id: "c",
        text: "Create beauty and express yourself",
        emoji: "🎨",
        trait: "creative",
      },
      {
        id: "d",
        text: "Enjoy the journey, not just the destination",
        emoji: "🌈",
        trait: "relaxed",
      },
    ],
  },
];

// Function to get random questions from the bank
export function getRandomQuestions(
  count: number,
  seed?: number
): QuizQuestion[] {
  // Simple seeded random for reproducibility
  const seededRandom = (s: number) => {
    const x = Math.sin(s++) * 10000;
    return x - Math.floor(x);
  };

  let currentSeed = seed ?? Date.now();

  // Shuffle using Fisher-Yates with seeded random
  const shuffled = [...questionBank];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(currentSeed++) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}

// Get total question count
export function getTotalQuestionCount(): number {
  return questionBank.length;
}
