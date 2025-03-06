
function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
   
  Car.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
   
  Car.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
   
  Car.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turning`);
  }
  const car1 = new car('frad', 'red', 200, 'f-i');
  const car2 = new car('ajinomoto', 'yellow', 180, 'ho-1');
  const car3 = new car('indofood', 'black' , 120, 'su-1');
  console.log(car1);
  console.log(car2);
  console.log(car3);
  
    car1.drive();
    car2.reverse();
    car3.turn();
