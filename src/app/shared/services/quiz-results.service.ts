import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { IQuizResults } from 'src/app/core/models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizResultsService {
  private quizResults = new BehaviorSubject<IQuizResults | null>(null);
  public quizResults$ = of(this.quizResults);
  constructor() { }

  emitResults(points: number, totalQuestions: number, time: {minutes: number,seconds: number}): void {
    const precentage = (points / totalQuestions) * 100;
    this.quizResults.next({points,precentage,totalQuestions,time});
  }

  public formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
