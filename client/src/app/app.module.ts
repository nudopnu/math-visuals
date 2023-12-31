import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './routes/main/main.component';
import { CosineSimilarityComponent } from './routes/cosine-similarity/cosine-similarity.component';
import { MatrixComponent } from './components/matrix/matrix.component';
import { MathJaxDirective } from './directives/math-jax.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CosineSimilarityComponent,
    MatrixComponent,
    MathJaxDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
