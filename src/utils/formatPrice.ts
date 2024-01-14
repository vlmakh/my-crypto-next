export const formatPrice = (price: number) => {
  if (!price) {
    return;
  }

  const value = Math.abs(price);

  if (value >= 10) {
    return value.toFixed(0);
  }
  if (value < 10 && value > 1) {
    return value.toFixed(1);
  }
  if (value < 0.0001) {
    return value.toFixed(8);
  }
  if (value < 0.01) {
    return value.toFixed(4);
  }
  if (value < 0.1) {
    return value.toFixed(3);
  } else {
    return value.toFixed(2);
  }
};
