import { Component, Input } from '@angular/core';
import { MatrixParams } from './matrix-params.model';

@Component({
  selector: 'math-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent {

  @Input() params!: MatrixParams;

  ABC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  columns() {
    return [...Array(this.params.n)].map((v, i) => i);
  }

  rows() {
    return [...Array(this.params.m)].map((v, i) => i);
  }

  getLabel(i: number, j: number): string {
    let defaultFunc: ((i: number, j: number) => string) = (i, j) => this.ABC[this.params.transpose ? i : j] + `_${this.params.transpose ? j: i}`;
    if (this.params.label == undefined || this.params.label == false) return "";
    if (this.params.label == true) return defaultFunc(i, j);
    else return this.params.label(i, j);
  }

  getColor(i: number, j: number): string {
    let defaultFunc: ((i: number, j: number) => string) = (i, j) => `hsl(${((this.params.transpose ? i : j) * 45 + 200) % 360}, 70%, 75%)`;
    if (this.params.color == undefined || this.params.color == false) return "";
    if (this.params.color == true) return defaultFunc(i, j);
    else return this.params.color(i, j);
  }
}
