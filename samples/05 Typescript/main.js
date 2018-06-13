var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.run = function () {
        console.log("original");
    };
    MyClass = __decorate([
        Blabla()
    ], MyClass);
    return MyClass;
}());
var obj = new MyClass();
obj.run();
function Blabla() {
    console.log("Blabla");
    return function (target) {
        target.prototype.run = function () {
            console.log("XXX");
        };
        console.log("Decorating", target, "with Blabla");
        return target;
    };
}
//# sourceMappingURL=main.js.map