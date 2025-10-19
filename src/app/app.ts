import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OutputCounter } from './output-counter/output-counter';
import { InputCounter } from "./input-counter/input-counter";

@Component({
  selector: 'app-root',
  imports: [OutputCounter, InputCounter],
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App {
  protected readonly title = signal('ngrx-demo');
}
