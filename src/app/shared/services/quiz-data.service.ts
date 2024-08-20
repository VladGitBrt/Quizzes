import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { IQuiz } from 'src/app/core/models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {
  private quizSource = new BehaviorSubject<IQuiz | null>(null);
  public currentQuiz$ = of(this.quizSource);

  constructor() {}

  changeQuiz(quiz: IQuiz) {
    this.quizSource.next(quiz);
  }
}
