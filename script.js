function fibonacci(number) {
  let fibbo = [0, 1];

  for (let i = 2; i < number; i++) {
    fibbo[i] = fibbo[i - 1] + fibbo[i - 2];
  }

  return fibbo;
}
