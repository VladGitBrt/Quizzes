import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadQuiz } from './shared/store/actions/quiz.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'quiz-app';

  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.dispatch(loadQuiz())
  }
}
