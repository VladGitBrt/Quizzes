import { createReducer, on } from '@ngrx/store';
import * as QuizActions from '../actions/quiz.actions';
import { IQuiz } from 'src/app/core/models/quiz.model';

export interface QuizState {
  quiz: IQuiz[] | [];
  error: any;
  loading: boolean;
}

export const initialState: QuizState = {
  quiz: [],
  error: null,
  loading: false,
};

export const quizReducer = createReducer(
  initialState,
  on(QuizActions.loadQuiz, state => ({
    ...state,
    loading: true
  })),
  on(QuizActions.loadQuizSuccess, (state, { quiz }) => ({
    ...state,
    quiz,
    loading: false,
    error: null
  })),
  on(QuizActions.loadQuizFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
