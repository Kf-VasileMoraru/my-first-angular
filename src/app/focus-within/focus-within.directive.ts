import {Directive, Inject} from '@angular/core';
import {FocusWithinService} from './focus-within.service';
import {Observable} from 'rxjs';

@Directive({
  selector: "[focusWithin]",
  outputs: ["focusWithin1"],
  providers: [FocusWithinService]
})
export class FocusWithinDirective {
  constructor(
    @Inject(FocusWithinService) readonly focusWithin1: Observable<Element | null>
  ) {}
}

