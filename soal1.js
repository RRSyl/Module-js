const calculate = require('./index.js');

console.log("Luas persegi dengan panjang sisi 20 cm: "+calculate.calculateSquareArea(20));
console.log("Keliling persegi dengan panjang sisi 20 cm: "+calculate.calculateSquarePerimeter(20));
console.log("Luas Persegi Panjang dengan panjang 15 cm dan tinggi 10 cm : "+calculate.calculateRectangleArea(15,10));
console.log("Keliling Persegi Panjang dengan panjang 15 cm dan tinggi 10 cm : "+calculate.calculateRectanglePerimeter(15,10));