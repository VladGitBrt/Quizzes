import { createAction, props } from '@ngrx/store';
import { IQuiz } from 'src/app/core/models/quiz.model';


export const loadQuiz = createAction('[Quiz] Load Quiz');

export const loadQuizSuccess = createAction(
  '[Quiz] Load Quiz Success',
  props<{ quiz: IQuiz[] }>()
);

export const loadQuizFailure = createAction(
  '[Quiz] Load Quiz Failure',
  props<{ error: any }>()
);