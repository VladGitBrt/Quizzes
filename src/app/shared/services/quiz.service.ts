import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { IQuestion, IQuiz, IQuizResponse } from '../../core/models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private url: string = 'https://opentdb.com/api.php?amount=50';
  constructor(private http: HttpClient) { }

  private getQuestions(): Observable<IQuestion[]> {
    return this.http.get<IQuizResponse>(this.url)
      .pipe(
        map(res=> res.results)
      )
  }

  public getQuiz(): Observable<IQuiz[]> {
    return this.getQuestions().pipe(
      map(questions => {
        const quizzes: IQuiz[] = [];

        const questionsPerQuiz = Math.floor(questions.length / 10);
  
        for (let i = 0; i < 10; i++) {
          const quizQuestions = questions.slice(i * questionsPerQuiz, (i + 1) * questionsPerQuiz);
          const quiz: IQuiz = {
            name: `Quiz ${i + 1}`,
            questions: quizQuestions,
            totalQuestions: quizQuestions.length
          };
          quizzes.push(quiz);
        }
  
        return quizzes;
      })
    );
  }
  
}
