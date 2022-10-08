const decToBinary = (input) => {
 let decimal = input, binary = '';

 for (let i = 0; decimal >= 1; i += 1) {
  binary = `${decimal % 2}${binary}`;
  decimal = parseInt(decimal / 2, 10);
 }

 return binary;
}
