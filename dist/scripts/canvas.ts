const canvas = document.getElementById('canvas') as HTMLCanvasElement;
let ctx: CanvasRenderingContext2D = canvas.getContext('2d');
let isDrawing: boolean = false;
let imgData = null;
let colorInput = document.getElementById('color') as HTMLInputElement;
let sizeInput = document.getElementById('size') as HTMLInputElement;
let rangeValue = document.getElementById('rangeValue') as HTMLInputElement;

sizeInput.addEventListener('input', function () {
  rangeValue.innerHTML = sizeInput.value;
});

if (ctx) {
  canvas.addEventListener('mousedown', (e: MouseEvent) => {
    isDrawing = true;
    ctx.moveTo(e.clientX, e.clientY);
    ctx.beginPath();
    ctx.lineWidth = parseInt(sizeInput.value);
    ctx.strokeStyle = colorInput.value;
  });

  canvas.addEventListener('mousemove', (e: MouseEvent) => {
    if (isDrawing) {
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
    }
  });

  canvas.addEventListener('mouseup', () => {
    isDrawing = false;
  });

  document.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.key === 'l') {
      imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      console.log(imgData);
    }
  });
} else {
  console.log('Canvas not supported');
}
