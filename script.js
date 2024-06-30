let promptInput = prompt('Enter the grid size (Between 1 - 100)');
console.log(promptInput);

while (isNaN(promptInput)){
    alert('Invalid, choose a number');
    promptInput = prompt('Enter the grid size (Between 1 - 100)');

} 
