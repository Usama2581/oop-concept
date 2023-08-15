class Car {
   constructor () {
      this.wheels = 4;
      this.doors = 4;
      this.seats = 4;
      this.a = 20
   }

   start () {
      console.log('car start')
   }
   stop () {
      console.log('car stop')
   }
}

class Swift extends Car {
   constructor () {
      super()
      this.model = 2023
      this.name = 'elantra'
      this.color = 'white'
      this.b = 12
   }

   display() {
      console.log(this.name, this.model, this.color, this.wheels, this.doors, this.a + this.b)
   }
}

let swift = new Swift()

swift.display()
swift.start()
swift.stop()

//------------------CONSTRUCTOR---------------------
// 1. constructor is used to assign values to varibales 
// 2. it is called automatically when object is called
// 3. Used to assign diffresnt value when class have more than one object

//-------------THIS--------------------------------
// 1. refers to current class variables

//-------------SUPER--------------------------------
// 1. use to call the constructor of parent class to access variables