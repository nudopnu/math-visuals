import { Component, Input } from '@angular/core';
import { Value } from 'src/app/routes/types/utility.types';

@Component({
  selector: 'math-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent {
  @Input() m!: Value<number>;
  @Input() n!: Value<number>;
  @Input() transpose: Value<boolean> = false;
  @Input() label: boolean | ((i: number, j: number) => string) = true;

  ABC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  columns() {
    return [...Array(this.n)].map((v, i) => i);
  }

  rows() {
    return [...Array(this.m)].map((v, i) => i);
  }

  getLabel(i: number, j: number): string {
    let defaultFunc: ((i: number, j: number) => string) = (i, j) => this.ABC[this.transpose ? i : j];
    if (this.label == false) return "";
    if (this.label == true) return defaultFunc(i, j);
    else return this.label(i, j);
  }
}
