import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {FocusWithinModule} from './focus-within/focus-within.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FocusWithinModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
