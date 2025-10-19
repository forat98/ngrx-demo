import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/counter/counter.actions';

@Component({
  selector: 'app-input-counter',
  imports: [],
  templateUrl: './input-counter.html',
  styleUrl: './input-counter.css'
})
export class InputCounter {
  constructor(private store:Store) {

  }

  increment() {
    this.store.dispatch(increment({value:2}));
  }

  decrement() {
        this.store.dispatch(decrement());
  }

}
