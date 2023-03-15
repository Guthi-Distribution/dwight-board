const fs = require('fs');

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
let ctx: CanvasRenderingContext2D = canvas.getContext('2d');
let isDrawing: boolean = false;
let imgData = null;
let colorInput = document.getElementById('color') as HTMLInputElement;
let sizeInput = document.getElementById('size') as HTMLInputElement;
let rangeValue = document.getElementById('rangeValue') as HTMLInputElement;
const saveButton = document.getElementById('save') as HTMLButtonElement;
const clearButton = document.getElementById('clear') as HTMLButtonElement;

const saveFile = './canvas-data.txt';

var BB = canvas.getBoundingClientRect();
var offsetX = BB.left;
var offsetY = BB.top;
