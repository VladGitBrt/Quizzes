
export interface IQuestion {
    type: 'multiple' | 'boolean';
    difficulty: 'easy' | 'medium' | 'hard';
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }
  
export interface IQuiz {
  name: string;
  questions: IQuestion[];
  totalQuestions: number;
}

export interface IQuizResponse {
  response_code: number,
  results: IQuestion[]
}

export interface IQuizResults {
  points: number;
  totalQuestions: number;
  precentage: number;
  time: {
    minutes: number;
    seconds: number;
  }
}