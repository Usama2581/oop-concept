//--------INTERFACE------
// It is achieved using two ways asbtract class and interface
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// --------------ABSTRACTION-----------
//1. abstract keyword is used in class to make it
//2. abstract methods are created and then override in child class
//--------METHOD OVERRIDING-----------
// 1. If parent and child class have same method it is known as 
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi() {
        var _this = _super.call(this) || this;
        _this.name = 'Audi A5';
        _this.brand = 'Audi';
        _this.model = 2023;
        _this.color = 'black';
        return _this;
    }
    Audi.prototype.start = function () {
        console.log('name', this.name, 'brand', this.brand, this.model, this.color);
        console.log('Audi is starting.........');
    };
    Audi.prototype.stop = function () {
        console.log('Audi is stopping....');
    };
    return Audi;
}(Car));
var audi = new Audi();
var Elantra = /** @class */ (function () {
    function Elantra() {
        // super()
        this.name = 'elantra';
        this.model = 2022;
        this.brand = 'hyundai';
    }
    Elantra.prototype.starts = function () {
        console.log('Car start---------->');
        console.log(this.name, this.model, this.brand);
    };
    Elantra.prototype.stops = function () {
        console.log('Car start---------->');
    };
    return Elantra;
}());
var elantra = new Elantra();
elantra.stops();
elantra.starts();
