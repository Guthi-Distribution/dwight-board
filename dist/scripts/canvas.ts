sizeInput.addEventListener('input', function () {
  rangeValue.innerHTML = sizeInput.value;
});

if (ctx) {
  canvas.addEventListener('mousedown', (e: MouseEvent) => {
    isDrawing = true;
    ctx.moveTo(e.clientX - offsetX, e.clientY - offsetY);
    ctx.beginPath();
    ctx.lineWidth = parseInt(sizeInput.value);
    ctx.strokeStyle = colorInput.value;
  });

  canvas.addEventListener('mousemove', (e: MouseEvent) => {
    if (isDrawing) {
      ctx.lineTo(e.clientX - offsetX, e.clientY - offsetY);
      ctx.stroke();
    }
  });

  canvas.addEventListener('mouseup', () => {
    isDrawing = false;
  });

  document.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.key === 'l') {
      imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    }
  });

  clearButton.addEventListener('click', (e: MouseEvent) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    writeToFile();
  });
} else {
  console.log('Canvas not supported');
}
