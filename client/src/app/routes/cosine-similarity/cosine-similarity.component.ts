import { AfterViewInit, Component } from '@angular/core';
import * as JXG from 'jsxgraph';

@Component({
  selector: 'math-cosine-similarity',
  templateUrl: './cosine-similarity.component.html',
  styleUrls: ['./cosine-similarity.component.scss']
})
export class CosineSimilarityComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    JXG.Options.text.useMathJax = true;
    const board = JXG.JSXGraph.initBoard('jxgbox', {
      boundingbox: [-0.5, 1.5, 7, -1.5],
      resize: { enabled: false },
      axis: true,
    } as any);
    let func = function (x: number) { return Math.cos(x); };
    const funcStart = 0;
    const funcEnd = 2 * Math.PI;
    const sliderStartPos = [0, 0];
    const sliderEndPos = [2 * Math.PI, 0];
    const sliderStartValue = 0;
    const sliderEndValue = 2;
    const sliderValue = 2;
    let slider = board.create('slider', [sliderStartPos, sliderEndPos, [sliderStartValue, sliderValue, sliderEndValue]], { snapWidth: 0.05, withLabel: false });
    let plot = board.create('functiongraph', [func, funcStart, funcEnd]);
    board.create('text', [4.5, -0.7,
      function () {
        return `\\[cos(${slider.Value().toFixed(2)}\\pi)=${func(slider.Value() * Math.PI).toFixed(2)}\\]`;
      }], { fontSize: 16 });
  }
}
