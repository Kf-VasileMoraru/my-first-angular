import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  focused: any = null;

  get name(): string {
    return this.focused ? this.focused.tagName : 'null';
  }

  onFocusWithin(focused: Element | null) {
    this.focused = focused;
  }
}
