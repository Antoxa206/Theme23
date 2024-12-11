const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.forEach(function(number) {
    console.log(number);
});

const doubled = array.map(function(numbers) {
    return numbers * 2;
  });
  console.log(doubled);

  const newfilter = array.filter(function(number) {
    return number > 3;
  });
  console.log(newfilter);

  const sum = array.reduce(function(acc, number) {
    return acc + number;
  }, 0);
  console.log(sum); 

  const greaterfive = array.some(function(number) {
    return number > 5;
  });
  console.log(greaterfive);