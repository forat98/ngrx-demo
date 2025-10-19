import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { decrement, increment } from '../store/counter/counter.actions';

@Component({
  selector: 'app-output-counter',
  templateUrl: './output-counter.html',
  standalone: true,
  styleUrls: ['./output-counter.css'],
  imports:[AsyncPipe]
})
export class OutputCounter {
  counter$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.counter$ = this.store.select('counter');
  }

  increment(){
    this.store.dispatch(increment({value:5}));
  }

    decrement() {
      this.store.dispatch(decrement());
    }
}
