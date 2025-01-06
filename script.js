function calculateIterative() {
    const input = document.getElementById('numberInput');
    const iterativeResultElement = document.getElementById('iterativeResult');
    
    const number = parseInt(input.value);
    
    if (isNaN(number) || number < 0) {
        iterativeResultElement.textContent = 'Please enter a non-negative number';
        return;
    }
    
    if (number > 20) {
        iterativeResultElement.textContent = 'Number too large (max 20)';
        return;
    }
    
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    
    iterativeResultElement.textContent = `Iterative Result: ${result}`;
}

function calculateRecursive() {
    const input = document.getElementById('numberInput');
    const recursiveResultElement = document.getElementById('recursiveResult');
    
    const number = parseInt(input.value);
    
    if (isNaN(number) || number < 0) {
        recursiveResultElement.textContent = 'Please enter a non-negative number';
        return;
    }
    
    if (number > 20) {
        recursiveResultElement.textContent = 'Number too large (max 20)';
        return;
    }
    
    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
    }
    
    const result = factorial(number);
    recursiveResultElement.textContent = `Recursive Result: ${result}`;
}
