function processUserInput(callback) {
    const name = prompt('Введіть ваше ім\'я:');
    setTimeout(function () {
      callback(name);
    }, 3000); // Задержка 3 секунды перед вызовом коллбека
  }
  
  function greet(name) {
    console.log('Привіт, ' + name + '!');
  }
  
  // Использование
  processUserInput(greet);
  
  const car = {
    model: 'Model X',
    name: 'Tesla',
    year: '2015',
  
    ShowDetails: function(){
      setTimeout (() => {
        console.log(`Назва: ${this.name}, Модель: ${this.model}, Год випуску: ${this.year}`);
      }, 2000);
    }
  };
  
  car.ShowDetails();
  
  const add = (a, b) => a + b;
  
  console.log(add(3,4));
  
  function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4));
  
  const number = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const retrieveX = number.getX;
  console.log(retrieveX()); 
  
  const boundGetX = retrieveX.bind(number);
  console.log(boundGetX());
  
  const person1 = { name: 'John' };
  const person3 = { name: 'Jane' };
  
  function introduce() {
    console.log(`Привіт, мене звуть ${this.name}`);
  }
  
  introduce.call(person1);  
  introduce.call(person3);