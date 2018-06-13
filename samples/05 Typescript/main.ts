@Blabla()
class MyClass {
    run() {
        console.log("original");
    }
}

const obj = new MyClass();
obj.run();

function Blabla() {
    console.log("Blabla");

    return function(target) {
        target.prototype.run = function() {
            console.log("XXX");
        }

        console.log("Decorating", target, "with Blabla");

        return target;
    }
}
