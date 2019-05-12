import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XpSeedProcessorComponent } from './xp-seed-processor/xp-seed-processor.component';

@NgModule({
  declarations: [
    AppComponent,
    XpSeedProcessorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
