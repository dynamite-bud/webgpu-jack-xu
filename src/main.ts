import { CheckWebGPU } from "./helper";

let gpuCheckElement = document.getElementById("id-gpu-check") as HTMLDivElement;

if (gpuCheckElement) {
  gpuCheckElement.innerHTML = CheckWebGPU();
}
