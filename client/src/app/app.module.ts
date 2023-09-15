import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './routes/main/main.component';
import { CosineSimilarityComponent } from './routes/cosine-similarity/cosine-similarity.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CosineSimilarityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
