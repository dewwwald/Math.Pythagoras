/// <reference path="math-pythagoras.d.ts" />
import { rightTriangle } from "./right-triangle";

const pythagoras: Pythagoras = {
  rightTriangle: rightTriangle,
};

try {
  if (typeof (Math as any).Pythagoras !== "undefined") {
    Object.defineProperty(Math, "Pythagoras", {
      value: pythagoras,
      writable: false,
    });
  } else {
    new TypeError(
      "You are trying to install Pythagoras helper over an existing reference."
    );
  }
} catch (error) {
  console.error(error);
}
