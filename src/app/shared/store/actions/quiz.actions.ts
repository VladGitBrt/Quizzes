import { createAction, props } from '@ngrx/store';
import { IQuiz } from 'src/app/core/models/quiz.model';

// Action to load a quiz
export const loadQuiz = createAction('[Quiz] Load Quiz');

// Action for successful loading of a quiz
export const loadQuizSuccess = createAction(
  '[Quiz] Load Quiz Success',
  props<{ quiz: IQuiz[] }>()
);

// Action for failed loading of a quiz
export const loadQuizFailure = createAction(
  '[Quiz] Load Quiz Failure',
  props<{ error: any }>()
);