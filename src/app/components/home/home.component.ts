import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IQuiz } from 'src/app/core/models/quiz.model';
import { QuizDataService } from 'src/app/shared/services/quiz-data.service';
import { selectQuizzes } from 'src/app/shared/store/selectors/quiz.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  public quizzes$: Observable<IQuiz[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store, private router: Router, private quizDataService: QuizDataService){
    this.quizzes$ = this.store.select(selectQuizzes)
  }

  luckyChoose(): void{
    this.quizzes$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((quizzes: IQuiz[]) => {
        const randomQuizIndex: number = Math.floor(Math.random() * quizzes.length);
        this.quizDataService.changeQuiz(quizzes[randomQuizIndex]);
        this.router.navigate(['/play']);
      })
    
  }

  ngOnDestroy(): void { 
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
