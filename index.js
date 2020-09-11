// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


//creating es6 class


class Vehicle{
  constructor(type,name,launchYear,color,){
    this.type = type;
    this.name = name;
    this.launchYear = launchYear;
    this.color = color
  }
  //defining a method inside class
  getPrice(x){
    return `The price of the vehicle is ${x}`
  }
}

//creating instances

const car = new Vehicle('car','Hyundai',1997,'ash')
const bike = new Vehicle('bike', 'honda', 2000, 'yellow')
const jeep = new Vehicle('jeep','wrangler',2005, 'red')

//calling the method

const priceOfCar = car.getPrice('7 lacks');
const priceOfBike = bike.getPrice('2 lacks');
const priceOfJeep = jeep.getPrice('15 lacks');

//creating subclass

class More extends Vehicle{
  constructor(type,name,launchYear,color,modelno,seatingCapacity){
    //inhereting the objects from Vehicle class
    super(type,name,launchYear,color)
    this.modelno = modelno;
    this.seatingCapacity= seatingCapacity;
  }
//creating a static function
static giveBrochure(){
  return "The brochure was given"
}
}
const moreDetailsOfCar = new More('car','Hyundai',1997,'ash',5547,5)
const moreDetailsOfBike = new More('bike', 'honda', 2000, 'yellow',3342,2)
const moreDetailsOfJeep = new More('jeep','wrangler',2005, 'red',2115,8)


//calling the static function

console.log(More.giveBrochure());

