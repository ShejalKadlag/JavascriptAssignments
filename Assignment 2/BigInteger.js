// Regular number calculation
function factorialRegular(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // BigInt calculation
  function factorialBigInt(n) {
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Test with a large input
  const input = 80;
  
  // Regular number calculation
  console.time("Regular calculation");
  const regularResult = factorialRegular(input);
  console.timeEnd("Regular calculation");
  console.log(`Regular result: ${regularResult}`);
  
  // BigInt calculation
  console.time("BigInt calculation");
  const bigIntResult = factorialBigInt(input);
  console.timeEnd("BigInt calculation");
  console.log(`BigInt result: ${bigIntResult}`);
  
  