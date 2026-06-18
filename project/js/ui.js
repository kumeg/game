import { phase, display } from "./state.js";

export function phase_Change(x) {
  phase.value = phase.value.map(() => false);
  phase.value[x] = true;
}

export function a() {
  display.value = false;
}

export function b() {
  display.value = true;
}
