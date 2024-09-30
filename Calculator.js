function calculator(num1, num2, operator) {
    let result;
  
    if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '-') {
      result = num1 - num2;
    } else if (operator === '*') {
      result = num1 * num2;
    } else if (operator === '/') {
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = 'Error: Division by zero';
      }
    } else {
      result = 'Invalid operator';
    }
  
    return result;
  }
  
  // Test cases
  console.log(calculator(5, 2, '+'));
  console.log(calculator(5, 2, '-'));
  console.log(calculator(5, 2, '*')); 
  console.log(calculator(5, 2, '/'));
  console.log(calculator(5, 2, '&')); 
  console.log(calculator(5, 0, '/')); 
  