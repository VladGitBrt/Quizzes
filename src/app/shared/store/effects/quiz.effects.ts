import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as QuizActions from '../actions/quiz.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { QuizService } from '../../services/quiz.service';

@Injectable()
export class QuizEffects {
  constructor(
    private actions$: Actions,
    private quizService: QuizService
  ) {}

  loadQuiz$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuizActions.loadQuiz),
      mergeMap(() =>
        this.quizService.getQuiz().pipe(
          map(quiz => QuizActions.loadQuizSuccess({ quiz })),
          catchError(error => of(QuizActions.loadQuizFailure({ error })))
        )
      )
    )
  );
}
