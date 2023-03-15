saveButton.addEventListener('click', () => {
  const imgData = canvas.toDataURL();
  fs.writeFile(saveFile, imgData, (err) => {
    if (err) {
      console.error(err);
    }
  });
});

function loadFromFile() {
  try {
    if (fs.existsSync(readFile)) {
      //file exists
      const imgData = fs.readFileSync(readFile, 'utf8');
      const img = new Image();
      img.src = imgData;
      img.onload = function () {
        ctx.drawImage(img, 0, 0);
      };
    }
  } catch (err) {
    console.error(err);
  }
}

function writeToFile() {
  const imgData = canvas.toDataURL();
  fs.writeFile(saveFile, imgData, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

const readFileWatcher = fs.watch(readFile);

window.addEventListener('DOMContentLoaded', () => {
  loadFromFile();
});

readFileWatcher.on('change', () => {
  loadFromFile();
});
