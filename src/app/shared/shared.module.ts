import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizItemComponent } from './components/quiz-item/quiz-item.component';
import { BackButtonComponent } from './components/back-button/back-button.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { QuizService } from './services/quiz.service';
import { QuizDataService } from './services/quiz-data.service';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DecodePipe } from './pipes/decode.pipe';


@NgModule({
  declarations: [QuizItemComponent, BackButtonComponent, DecodePipe],
  exports: [
    QuizItemComponent,
    BackButtonComponent,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatProgressBarModule,
    DecodePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [QuizService, QuizDataService]

})
export class SharedModule { }
