import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IQuizResults } from 'src/app/core/models/quiz.model';
import { QuizResultsService } from 'src/app/shared/services/quiz-results.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {
  public quizResults: IQuizResults| null = null;
  constructor(private resultsService: QuizResultsService, private router: Router){}

  ngOnInit(): void {
    this.resultsService.quizResults$
      .subscribe(((results: BehaviorSubject<IQuizResults | null>) => {
        if(results.value) {
          this.quizResults = results.value;
          console.log(this.quizResults)
        } else {
          this.router.navigate(['/home'])
        }
      }))
  }
}
