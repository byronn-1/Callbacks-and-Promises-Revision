const breakastPromise = new Promise( (resolve, reject) => {
setTimeout(() => {
  resolve('Your order is ready come and get it');
  }, 3000);
});

console.log(breakfastPromise);
breakfastPromise.then(val => console.log(val) ).catch()