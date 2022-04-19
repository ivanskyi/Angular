import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MultByPipe } from './pipes/mult-by.pipe';
import { MarksPipe } from './pipes/marks.pipe';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { AsynchronousComponent } from './asynchronous/asynchronous.component';

@NgModule({
  declarations: [
    AppComponent,
    MultByPipe,
    MarksPipe,
    FilterComponent,
    FilterPipe,
    AsynchronousComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
