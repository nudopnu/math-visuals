import { AfterViewInit, Component } from '@angular/core';
import * as JXG from 'jsxgraph';
import { Value } from '../types/utility.types';

@Component({
  selector: 'math-cosine-similarity',
  templateUrl: './cosine-similarity.component.html',
  styleUrls: ['./cosine-similarity.component.scss']
})
export class CosineSimilarityComponent implements AfterViewInit {

  ngAfterViewInit(): void {

    JXG.Options.text.useMathJax = true;

    // Init boards
    const board = this.createBoard({
      elementId: 'jxgbox',
      xRange: [-0.5, 7],
      yRange: [-1.5, 1.5],
    });

    const board2 = this.createBoard({
      elementId: 'jxgbox2',
      xRange: [-1.5, 1.5],
      yRange: [-1.5, 1.5],
    });

    board.addChild(board2);

    // Add stuff to boards
    const cosineFunction = function (x: number): number { return Math.cos(x); };
    const cosinePlot = this.plotFunction({
      board,
      func: cosineFunction,
      start: 0,
      end: 2 * Math.PI,
    });

    const sliderAttributes = { snapWidth: 0.02, withLabel: false };
    const slider = this.createSlider({
      board,
      startPos: [0, 0],
      endPos: [2 * Math.PI, 0],
      range: [0, 2],
      value: 1,
      attributes: sliderAttributes,
    });

    // cosine value indicator
    const lineAttributes = { straightFirst: false, straightLast: false }
    this.createLine({
      board,
      startPos: [() => slider.Value() * Math.PI, 0],
      endPos: [() => slider.Value() * Math.PI, () => Math.cos(slider.Value() * Math.PI)],
      attributes: {
        ...lineAttributes,
        strokeColor: '#aaaaaa'
      },
    });

    const line1Pos = [0, 1];
    this.createLine({
      board: board2,
      startPos: [0, 0],
      endPos: line1Pos,
      attributes: {
        ...lineAttributes,
        strokeColor: '#4444aa',
        lastArrow: {
          type: 1,
        },
      },
    });

    const line2Pos = [() => Math.sin(slider.Value() * Math.PI), () => Math.cos(slider.Value() * Math.PI)];
    this.createLine({
      board: board2,
      startPos: [0, 0],
      endPos: line2Pos,
      attributes: {
        ...lineAttributes,
        strokeColor: '#44aa44',
        lastArrow: {
          type: 1,
        },
      },
    });

    board2.create('angle', [line2Pos, [0, 0], line1Pos], {
      radius: 0.3,
      name: () => `\\[\\varphi=${slider.Value().toFixed(2)}\\pi\\]`
    });


    // equation
    board.create('text', [4.15, -0.75,
      function () {
        const piFraction = slider.Value();
        return `\\[cos(\\varphi)=${cosineFunction(piFraction * Math.PI).toFixed(2)}\\]`;
      }], { fontSize: 16 });
  }

  private createLine(params: { board: JXG.Board, startPos: Value<number>[], endPos: Value<number>[], attributes: any }) {
    const { board, startPos, endPos, attributes: lineAttributes } = params;
    return board.create('line', [startPos, endPos], lineAttributes);
  }

  private createSlider(params: { board: JXG.Board, startPos: number[], endPos: number[], range: number[], value: number, attributes: { snapWidth: number; withLabel: boolean; } }): JXG.Slider {
    const { board, attributes: sliderAttributes, endPos: sliderEndPos, range: sliderRange, startPos: sliderStartPos, value: sliderValue } = params;
    const [sliderStartValue, sliderEndValue] = sliderRange;
    return board.create('slider', [sliderStartPos, sliderEndPos, [sliderStartValue, sliderValue, sliderEndValue]], sliderAttributes);
  }

  private createBoard(params: { xRange: number[], yRange: number[], elementId: string }): JXG.Board {
    const { xRange, yRange, elementId } = params;
    const [minY, maxY] = yRange;
    const [minX, maxX] = xRange;
    return JXG.JSXGraph.initBoard(elementId, {
      boundingbox: [minX, maxY, maxX, minY],
      resize: { enabled: false },
      axis: true,
    } as any);
  }

  private plotFunction(params: { board: JXG.Board, func: any, start: number, end: number }): JXG.Functiongraph {
    const { board, func, start, end } = params;
    return board.create('functiongraph', [func, start, end]);
  }
}
