import {AfterViewChecked, AfterViewInit, Component, Inject, inject, InjectionToken, OnInit} from '@angular/core';
import {fromEvent, interval, Observable, Subject} from 'rxjs';
import {DOCUMENT} from '@angular/common';
import {distinctUntilChanged, map, publishReplay, share, shareReplay, startWith, take, tap} from 'rxjs/operators';

export const PAGE_VISIBILITY = new InjectionToken<Observable<boolean>>(
  'Shared Observable based on `document visibility changed`',
  {
    factory: () => {
      const documentRef = inject(DOCUMENT);

      return fromEvent(documentRef, 'visibilitychange').pipe(
        startWith(0),
        map(() => documentRef.visibilityState !== 'hidden'),
        shareReplay(1) );
    }
  }
);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(PAGE_VISIBILITY)
    readonly pageVisibility$: Observable<boolean>
  ) {
  }


  ngOnInit(): void {
    this.pageVisibility$.subscribe((value) => {
        console.log(`Page1 visibility changed to ${value}`);
      }
    );
  }

}
