import {Component} from '@angular/core';
import {AppCounterService} from './services/app-counter.service';
import {LocalCounterService} from './services/local-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService]
})
export class AppComponent {
  title = 'my-first-angular';

  constructor(public appCounterService: AppCounterService,
              public localCounterSevice: LocalCounterService) {
  }
}
