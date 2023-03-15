saveButton.addEventListener('click', () => {
  const imgData = canvas.toDataURL();
  fs.writeFile(saveFile, imgData, (err) => {
    if (err) {
      console.error(err);
    }
  });
});

const saveFileWatcher = fs.watch(saveFile);

window.addEventListener('DOMContentLoaded', () => {
  try {
    if (fs.existsSync(saveFile)) {
      //file exists
      const imgData = fs.readFileSync(saveFile, 'utf8');
      const img = new Image();
      img.src = imgData;
      img.onload = function () {
        ctx.drawImage(img, 0, 0);
      };
    }
  } catch (err) {
    console.error(err);
  }
});

saveFileWatcher.on('change', () => {
  loadFromFile();
});

function loadFromFile() {
  try {
    if (fs.existsSync(saveFile)) {
      //file exists
      const imgData = fs.readFileSync(saveFile, 'utf8');
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
