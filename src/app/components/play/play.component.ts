import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, interval, Subject, takeUntil } from 'rxjs';
import { IQuestion, IQuiz } from 'src/app/core/models/quiz.model';
import { QuizDataService } from 'src/app/shared/services/quiz-data.service';
import { QuizResultsService } from 'src/app/shared/services/quiz-results.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  public quiz!: IQuiz;
  private points: number = 0;
  currentQuestionIndex = 0;
  timer: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private destroy$ = new Subject<void>();
  selectedAnswer?: string;
  private correctAnswers: IQuestion['correct_answer'][] = [];
  private unsubscribe$ = new Subject<void>();


  constructor(private quizDataService: QuizDataService, private router: Router, private resultsService: QuizResultsService){}

  ngOnInit(): void {
    this.quizDataService.currentQuiz$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((passData: BehaviorSubject<IQuiz | null>) => {
        if(passData.value) {
          this.quiz = passData.value;
          this.quiz.questions.forEach((question: IQuestion)=>{
            this.correctAnswers.push(question.correct_answer);
          })

          this.startTimer();
        } else {
          this.router.navigate(['/home']);
        }
      })
  }

  startTimer(): void {
    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.timer++;
        this.minutes = Math.floor(this.timer / 60);
        this.seconds = this.timer % 60;
      });
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.quiz.totalQuestions - 1) {
      if(this.selectedAnswer === this.correctAnswers[this.currentQuestionIndex]){
        this.points++;
      }
      this.currentQuestionIndex++;
      this.selectedAnswer = '';
    }
  }

  formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  finishQuiz(): void {
    this.destroy$.next(); 
    this.resultsService.emitResults(this.points, this.quiz.totalQuestions, {minutes: this.minutes, seconds: this.seconds});
    this.router.navigate(['/finish'])
  }
}
