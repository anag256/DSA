function HCF(n1, n2) {
  let hcf;
  // o(min(n1,n2))
  for (i = 1; i <= Math.min(n1, n2); i++) {
    if (n1 % i === 0 && n2 % i == 0) {
      hcf = i;
    }
  }
  return hcf;
}

function EuclideanAlgorithm(a, b) {
  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  if (a == 0) {
    return b;
  }

  return a;
}

console.log(EuclideanAlgorithm(20, 15));
