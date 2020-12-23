import {Component, OnInit} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-rx-test',
  templateUrl: './rx-test.component.html',
  styleUrls: ['./rx-test.component.scss']
})
export class RxTestComponent implements OnInit {

  sub: Subscription;
  stream$: Subject<number> = new Subject<number>();
  counter = 0;

  constructor() {
    this.sub = this.stream$.subscribe(value => {
      console.log('Subscribe', value);
    });
  }

  ngOnInit(): void {
  }

  stop(): void {
    this.sub.unsubscribe();
  }

  next() {
    this.counter++;
    this.stream$.next(this.counter);
  }
}
