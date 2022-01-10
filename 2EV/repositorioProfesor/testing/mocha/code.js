function getCelcius(farenheit) {
  return farenheit.map(value => (value -32) * 5/9)
}