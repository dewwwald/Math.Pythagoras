declare interface Pythagoras {}

declare interface TriangleData {
  legOne: number;
  legTwo: number;
  hypotenuse: number;
  corners: {
    legOneHypotenuse: number;
    legTwoHypotenuse: number;
    legOneTwo: number;
  };
}

declare module "Math" {
  export const Pythagoras: Pythagoras;
}
