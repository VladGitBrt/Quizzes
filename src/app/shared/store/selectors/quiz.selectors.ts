import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QuizState } from '../reducers/quiz.reducers';

// Feature Selector
export const selectQuizzesState = createFeatureSelector<QuizState>('quiz');

// Selectors
export const selectQuizzes = createSelector(
  selectQuizzesState,
  (state: QuizState) => state.quiz
);

export const selectQuizzesLoading = createSelector(
  selectQuizzesState,
  (state: QuizState) => state.loading
);

export const selectQuizzesError = createSelector(
  selectQuizzesState,
  (state: QuizState) => state.error
);
