import { Question } from './types';

export const QUESTION_BANK: Question[] = [
  {
    id: '1',
    sentence: "____ tired, she still finished the report.",
    options: ["Although", "Because", "Unless", "If"],
    correctAnswer: "Although",
    explanation: {
      rule: "Although 引导让步状语从句，表示'尽管'。主句中有 still 进一步强调对比。",
      example: "Although it was raining, they went out for a walk.",
      commonMistake: "容易受汉语影响在主句中使用 but。注意：although 和 but 不能同时出现在一个句子中。",
      reviewLink: "https://www.bing.com/search?q=让步状语从句用法"
    },
    difficulty: "Beginner",
    category: "状语从句"
  },
  {
    id: '2',
    sentence: "The boy ____ is wearing a red hat is my brother.",
    options: ["who", "which", "whose", "whom"],
    correctAnswer: "who",
    explanation: {
      rule: "who 引导定语从句，先行词是人（The boy），且 who 在从句中作主语。",
      example: "The girl who is singing is my sister.",
      commonMistake: "误用 which（先行词是物）或 whose（表示所属关系）。",
      reviewLink: "https://www.bing.com/search?q=定语从句who用法"
    },
    difficulty: "Beginner",
    category: "定语从句"
  },
  {
    id: '3',
    sentence: "____ the homework, the student went out to play football.",
    options: ["Finished", "Finishing", "To finish", "Having finished"],
    correctAnswer: "Having finished",
    explanation: {
      rule: "现在分词的完成式（Having done）作状语，表示该动作发生在主句动作之前。",
      example: "Having seen the film, I don't want to see it again.",
      commonMistake: "误用 Finished（被动）或 Finishing（同时发生）。",
      reviewLink: "https://www.bing.com/search?q=非谓语动词现在分词完成式"
    },
    difficulty: "Advanced",
    category: "非谓语动词"
  },
  {
    id: '4',
    sentence: "I don't know ____ he will come or not.",
    options: ["if", "whether", "that", "what"],
    correctAnswer: "whether",
    explanation: {
      rule: "whether...or not 是固定搭配，表示'是否'。if 引导宾语从句时通常不与 or not 连用。",
      example: "I wonder whether it will rain tomorrow.",
      commonMistake: "在有 or not 的情况下误用 if。",
      reviewLink: "https://www.bing.com/search?q=whether+or+not+用法"
    },
    difficulty: "Intermediate",
    category: "宾语从句"
  },
  {
    id: '5',
    sentence: "This is the factory ____ my father used to work.",
    options: ["that", "which", "where", "when"],
    correctAnswer: "where",
    explanation: {
      rule: "where 引导定语从句，先行词是地点（factory），且 where 在从句中作地点状语。",
      example: "This is the house where I was born.",
      commonMistake: "误用 which。如果从句中谓语动词是及物动词且缺宾语，才用 which/that。",
      reviewLink: "https://www.bing.com/search?q=定语从句where用法"
    },
    difficulty: "Intermediate",
    category: "定语从句"
  },
  {
    id: '6',
    sentence: "____ by the news, he couldn't say a word.",
    options: ["Shocking", "Shocked", "To shock", "Having shocked"],
    correctAnswer: "Shocked",
    explanation: {
      rule: "过去分词（Done）作状语，表示被动或状态。主语 he 与 shock 是被动关系。",
      example: "Deeply moved, she shed tears.",
      commonMistake: "误用 Shocking（主动，令人震惊的）。",
      reviewLink: "https://www.bing.com/search?q=过去分词作状语"
    },
    difficulty: "Intermediate",
    category: "非谓语动词"
  },
  {
    id: '7',
    sentence: "The reason ____ he was late was that he missed the bus.",
    options: ["why", "that", "which", "because"],
    correctAnswer: "why",
    explanation: {
      rule: "why 引导定语从句，先行词是 reason，且 why 在从句中作原因状语。",
      example: "I don't know the reason why he left.",
      commonMistake: "误用 because。The reason is that... 是固定句式，定语从句用 why。",
      reviewLink: "https://www.bing.com/search?q=the+reason+why+用法"
    },
    difficulty: "Intermediate",
    category: "定语从句"
  },
  {
    id: '8',
    sentence: "____ you work hard, you will pass the exam.",
    options: ["As long as", "As soon as", "As well as", "As far as"],
    correctAnswer: "As long as",
    explanation: {
      rule: "as long as 引导条件状语从句，表示'只要'。",
      example: "As long as you don't give up, you will succeed.",
      commonMistake: "混淆 as soon as（一...就...）或 as far as（就...而言）。",
      reviewLink: "https://www.bing.com/search?q=as+long+as+用法"
    },
    difficulty: "Beginner",
    category: "状语从句"
  },
  {
    id: '9',
    sentence: "With the light ____, he fell asleep.",
    options: ["burning", "burnt", "to burn", "burn"],
    correctAnswer: "burning",
    explanation: {
      rule: "With + 宾语 + 现在分词（doing）构成独立主格结构，表示伴随状态，宾语与分词是主动关系。",
      example: "With the sun shining, we started our journey.",
      commonMistake: "误用 burnt（被烧毁）。这里指灯亮着。",
      reviewLink: "https://www.bing.com/search?q=with复合结构用法"
    },
    difficulty: "Advanced",
    category: "独立主格"
  },
  {
    id: '10',
    sentence: "It was in the park ____ I met my old friend.",
    options: ["that", "which", "where", "when"],
    correctAnswer: "that",
    explanation: {
      rule: "强调句型：It is/was + 被强调部分 + that/who + 其他部分。",
      example: "It was yesterday that I saw him.",
      commonMistake: "误用 where。虽然 park 是地点，但这是强调句，不是定语从句。",
      reviewLink: "https://www.bing.com/search?q=英语强调句型用法"
    },
    difficulty: "Advanced",
    category: "强调句"
  }
];
