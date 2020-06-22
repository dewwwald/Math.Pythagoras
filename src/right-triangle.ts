/// <reference path="math-pythagoras.d.ts" />

/**
 * x^2 = y^2 + z^2
 * sin v = opposite / h
 * cos v = opposite / h
 * tan v = opposite / h
 */

export function rightTriangle(
  legOne: number,
  legTwo: number,
  hypotenuse: number,
  cornerLegOneHypotenuse: number,
  cornerLegTwoHypotenuse: number,
  cornerLegOneTwo: number
): TriangleData;

export function rightTriangle(
  legOne?: number,
  legTwo?: number,
  hypotenuse?: number,
  cornerLegOneHypotenuse?: number,
  cornerLegTwoHypotenuse?: number,
  cornerLegOneTwo?: number
): TriangleData {
  return {
    legOne: 0,
    legTwo: 0,
    hypotenuse: 0,
    corners: {
      legOneHypotenuse: 0,
      legTwoHypotenuse: 0,
      legOneTwo: 90,
    },
  };
}
