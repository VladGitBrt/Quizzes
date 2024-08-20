import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { IQuizResults } from 'src/app/core/models/quiz.model';
import { QuizResultsService } from 'src/app/shared/services/quiz-results.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit, OnDestroy {
  public quizResults: IQuizResults| null = null;

  private unsubscribe$ = new Subject<void>();
  constructor(private resultsService: QuizResultsService, private router: Router){}

  ngOnInit(): void {
    this.resultsService.quizResults$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(((results: BehaviorSubject<IQuizResults | null>) => {
        if(results.value) {
          this.quizResults = results.value;
        } else {
          this.router.navigate(['/home'])
        }
      }))
  }

  ngOnDestroy(): void { 
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
