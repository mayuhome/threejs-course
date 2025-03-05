import './style.css'
import { setupFirstCube } from './first-cube.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <canvas id="first-cube"></canvas>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
setupFirstCube(document.querySelector<HTMLButtonElement>('#first-cube')!)
