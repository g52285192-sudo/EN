import { LucideIcon } from 'lucide-react';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Question {
  id: string;
  sentence: string; // Use "____" for blanks
  options: string[];
  correctAnswer: string;
  explanation: {
    rule: string;
    example: string;
    commonMistake: string;
    reviewLink?: string;
  };
  difficulty: Difficulty;
  category: string;
}

export interface UserAnswer {
  questionId: string;
  selectedOption: string;
  isCorrect: boolean;
}
