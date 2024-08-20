import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IQuiz } from 'src/app/core/models/quiz.model';
import { QuizDataService } from '../../services/quiz-data.service';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.css']
})
export class QuizItemComponent {

  @Input() quiz!: IQuiz;

  constructor(private router: Router, private quizDataService: QuizDataService){}

  public selectQuiz(): void {
    this.quizDataService.changeQuiz(this.quiz)
    this.router.navigate(['/play']);
  }
}
