import { Component } from '@angular/core';
import { MatrixParams } from 'src/app/components/matrix/matrix-params.model';

@Component({
  selector: 'math-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  m1: MatrixParams = {
    m: 5,
    n: 3,
    transpose: true,
    label: true,
    color: true,
  }
  m2: MatrixParams = {
    m: 3,
    n: 5,
    label: true,
    color: true,
  }
  m3: MatrixParams = {
    m: 3,
    n: 3,
  }
  m4: MatrixParams = {
    m: 5,
    n: 5,
  }

}
