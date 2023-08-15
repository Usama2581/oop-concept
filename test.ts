//--------INTERFACE------
// It is achieved using two ways asbtract class and interface


// --------------ABSTRACTION-----------
//1. abstract keyword is used in class to make it
//2. abstract methods are created and then override in child class


//--------METHOD OVERRIDING-----------
// 1. If parent and child class have same method it is known as 

abstract class Car {
    name: string
    model: number
    color: string
    brand: string

    abstract stop(): void
    abstract start(): void
    // abstract start()
}

class Audi extends Car {
    constructor() {
        super()
        this.name = 'Audi A5'
        this.brand = 'Audi'
        this.model = 2023
        this.color = 'black'
    }

    start(): void {
        console.log('name', this.name, 'brand', this.brand, this.model, this.color)
        console.log('Audi is starting.........')
    }

    stop(): void {
        console.log('Audi is stopping....')
    }
}

const audi = new Audi()
// audi.start()
// audi.stop()


//----------INTERFACE-------------
interface Vechile {
    // name: string
    // model: number
    // brand: string
    //these variables are useless because interface is not a class it can't inherit variables from super()

    starts(): void
    stops(): void

}

class Elantra implements Vechile {
    name: string
    model: number
    brand: string

    constructor() {
        // super()
        this.name = 'elantra'
        this.model = 2022
        this.brand = 'hyundai'
    }

    starts(): void {
        console.log('Car start---------->')
        console.log(this.name, this.model, this.brand)
    }
    stops(): void {
        console.log('Car stops---------->')
    }
}

const elantra = new Elantra()
elantra.stops()
elantra.starts()
